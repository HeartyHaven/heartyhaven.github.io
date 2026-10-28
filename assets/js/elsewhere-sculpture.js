import * as THREE from './elsewhere-vendor/three.module.js';

// A single nested icosahedron. Its three stable orientations select research facets.
export function mountSculpture(host, motion) {
  const canvas = host.querySelector('canvas');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  } catch (_) { return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(37, 1, .1, 50);
  const organism = new THREE.Group();
  scene.add(organism);
  organism.rotation.set(.25, -.4, -.2);

  // Broad studio reflections create shaped highlights on curved bone and metal.
  // The environment is generated locally; no HDR download is required.
  const studio = new THREE.Scene();
  studio.background = new THREE.Color(0x19130e);
  function softbox(position, scale, color, intensity) {
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(...scale),
      new THREE.MeshBasicMaterial({color: new THREE.Color(color).multiplyScalar(intensity), side:THREE.DoubleSide}));
    panel.position.set(...position);panel.lookAt(0,0,0);studio.add(panel);
  }
  softbox([-4,5,3],[4,5],0xffead2,5);
  softbox([4,1,-3],[2,5],0xffae55,4);
  softbox([1,-2,5],[3,2],0xdce2da,1.5);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(studio,.08,.1,30);
  scene.environment = environment.texture;
  studio.traverse(o=>{if(o.isMesh){o.geometry.dispose();o.material.dispose();}});
  pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xffe3bb,0x26180f,.32));
  const key = new THREE.DirectionalLight(0xffedcf,4.3);
  key.position.set(-3.4,4.3,5);scene.add(key);
  key.castShadow=true;key.shadow.mapSize.set(2048,2048);
  Object.assign(key.shadow.camera,{left:-2.8,right:2.8,top:2.8,bottom:-2.8,near:.5,far:18});
  key.shadow.bias=-.00015;key.shadow.normalBias=.008;
  const rim = new THREE.DirectionalLight(0xffb558,3.8);rim.position.set(3,1,-3);scene.add(rim);
  const fill = new THREE.DirectionalLight(0xdce5df,.48);fill.position.set(2,-1,4);scene.add(fill);
  const light = new THREE.PointLight(0xff782c,1.1,5,2);scene.add(light);
  const ivory = new THREE.MeshPhysicalMaterial({color:0xe6d3aa,roughness:.34,metalness:.12,clearcoat:.35,clearcoatRoughness:.32,envMapIntensity:.65,side:THREE.DoubleSide});
  const pale = new THREE.MeshPhysicalMaterial({color:0xf5e3bd,roughness:.3,metalness:.08,clearcoat:.45,clearcoatRoughness:.26,envMapIntensity:.7,side:THREE.DoubleSide});
  const gold = new THREE.MeshStandardMaterial({color:0xb78943,roughness:.24,metalness:.72,envMapIntensity:1.1});
  const bronze = new THREE.MeshStandardMaterial({color:0x6a4526,roughness:.43,metalness:.45,envMapIntensity:.65,side:THREE.DoubleSide});
  const lumen = new THREE.MeshStandardMaterial({color:0xc58636,roughness:.32,metalness:.4,emissive:0xa63a08,emissiveIntensity:.4});
  const v3=(x,y,z)=>new THREE.Vector3(x,y,z);
  function tube(points,radius,material,group,segments=100){
    group.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),segments,radius,8,false),material));
  }
  function batchGroup(group) {
    const buckets=new Map();
    for(const mesh of group.children){const key=mesh.material.uuid;if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push(mesh);}
    group.clear();
    for(const meshes of buckets.values()){
      if(meshes.length===1){group.add(meshes[0]);continue;}
      let vertexCount=0,indexCount=0;
      for(const mesh of meshes){vertexCount+=mesh.geometry.attributes.position.count;indexCount+=mesh.geometry.index.count;}
      const positions=new Float32Array(vertexCount*3),normals=new Float32Array(vertexCount*3),indices=new Uint32Array(indexCount);
      let vo=0,io=0;
      for(const mesh of meshes){const g=mesh.geometry;positions.set(g.attributes.position.array,vo*3);normals.set(g.attributes.normal.array,vo*3);for(let i=0;i<g.index.count;i++)indices[io++]=g.index.array[i]+vo;vo+=g.attributes.position.count;g.dispose();}
      const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(positions,3));g.setAttribute('normal',new THREE.BufferAttribute(normals,3));g.setIndex(new THREE.BufferAttribute(indices,1));group.add(new THREE.Mesh(g,meshes[0].material));
    }
  }
  function prepare(model){model.traverse(mesh=>{if(mesh.isMesh){mesh.castShadow=true;mesh.receiveShadow=true;}});}
  function makePolyhedron(){
    const model=new THREE.Group(),localLayers=[];
    const topology=new THREE.IcosahedronGeometry(1.48,0).getAttribute('position');
    for(let depth=0;depth<3;depth++){
      const g=new THREE.Group();model.add(g);localLayers.push(g);const scale=1-depth*.24;
      for(let face=0;face<topology.count;face+=3){
        const a=v3().fromBufferAttribute(topology,face).multiplyScalar(scale),b=v3().fromBufferAttribute(topology,face+1).multiplyScalar(scale),c=v3().fromBufferAttribute(topology,face+2).multiplyScalar(scale);
        const center=a.clone().add(b).add(c).multiplyScalar(1/3);
        function tri(x,y,z,level){
          for(const [u,v] of [[x,y],[y,z],[z,x]]){
            const middle=u.clone().lerp(v,.5).multiplyScalar(1.035);
            tube([u,middle,v],level===2?.015:.006,level===2?pale:gold,g,12);
          }
          if(level>0){const ab=x.clone().lerp(y,.5),bc=y.clone().lerp(z,.5),ca=z.clone().lerp(x,.5);tri(x,ab,ca,level-1);tri(ab,y,bc,level-1);tri(ca,bc,z,level-1);}
        }
        tri(a,b,c,depth===0?2:1);
        if(depth===0){
          const n=center.clone().normalize(),u=a.clone().sub(center).normalize(),v=n.clone().cross(u),pts=[];
          for(let j=0;j<=75;j++){const t=j/75,r=.3*Math.exp(-2.5*t),angle=t*Math.PI*4;pts.push(center.clone().addScaledVector(u,r*Math.cos(angle)).addScaledVector(v,r*Math.sin(angle)).addScaledVector(n,.08*Math.sin(t*Math.PI)));}
          tube(pts,.009,ivory,g,75);
        }
      }
      batchGroup(g);
    }
    model.add(new THREE.Mesh(new THREE.IcosahedronGeometry(.43,2),lumen));prepare(model);
    return {group:model,layers:localLayers,outer:localLayers[0],name:'Fractal icosahedron',description:'Twenty faces; branching triangles and spirals nested within.'};
  }
  const sculpture=makePolyhedron();organism.add(sculpture.group);
  const step=Math.PI*2/3,base=-.3;
  let facet=Number(document.querySelector('[data-facet][aria-selected=true]').dataset.facet);
  let targetY=base+facet*step,targetX=.4,smoothY=targetY,smoothX=targetX,frame=0,last=0,visible=true,lost=false,pointer=null;
  organism.rotation.set(targetX,targetY,-.2);
  const render=()=>{if(!lost)renderer.render(scene,camera);};
  function resize(){const {width,height}=host.getBoundingClientRect();if(!width||!height)return;camera.aspect=width/height;camera.position.z=1.8/Math.tan(THREE.MathUtils.degToRad(camera.fov/2))/Math.min(camera.aspect,1);camera.updateProjectionMatrix();renderer.setSize(width,height,false);render();}
  function tick(time){
    frame=0;if(!visible||document.hidden||lost)return;
    if(time-last<25){frame=requestAnimationFrame(tick);return;}last=time;
    const ease=motion.paused?1:.12;
    smoothY+=(targetY-smoothY)*ease;smoothX+=(targetX-smoothX)*ease;
    const ambient=!motion.paused&&!pointer;
    organism.rotation.y=smoothY+(ambient?Math.sin(time*.00017)*.035:0);
    organism.rotation.x=smoothX+(ambient?Math.sin(time*.00012)*.012:0);
    light.intensity=1.1+(ambient?Math.sin(time*.0005)*.14:0);render();
    if(!motion.paused||Math.abs(targetY-smoothY)>.0001||Math.abs(targetX-smoothX)>.0001)frame=requestAnimationFrame(tick);
  }
  const wake=()=>{if(!frame&&visible&&!document.hidden&&!lost){last=performance.now();frame=requestAnimationFrame(tick);}};
  function choose(index){
    facet=(index%3+3)%3;const desired=base+facet*step;
    targetY=desired+Math.round((targetY-desired)/(2*Math.PI))*2*Math.PI;wake();
  }
  function snap(){
    const sector=Math.round((targetY-base)/step);facet=(sector%3+3)%3;targetY=base+sector*step;
    document.dispatchEvent(new CustomEvent('interest-change',{detail:{index:facet}}));wake();
  }
  canvas.addEventListener('pointerdown',e=>{if(e.button!==0)return;pointer={id:e.pointerId,x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{if(!pointer||pointer.id!==e.pointerId)return;targetY+=(e.clientX-pointer.x)*.014;targetX=THREE.MathUtils.clamp(targetX+(e.clientY-pointer.y)*.005,-1,1);pointer.x=e.clientX;pointer.y=e.clientY;wake();});
  const end=()=>{if(pointer){pointer=null;snap();}};
  canvas.addEventListener('pointerup',end);canvas.addEventListener('pointercancel',end);canvas.addEventListener('lostpointercapture',end);
  canvas.addEventListener('keydown',e=>{
    if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(e.key))return;
    e.preventDefault();e.stopPropagation();
    if(e.key==='ArrowLeft')targetY-=step;if(e.key==='ArrowRight')targetY+=step;
    if(e.key==='ArrowUp')targetX-=.12;if(e.key==='ArrowDown')targetX+=.12;
    if(e.key==='Home'){targetY=base;targetX=.4;}targetX=THREE.MathUtils.clamp(targetX,-1,1);snap();
  });
  document.addEventListener('interest-select',e=>choose(e.detail.index));
  document.addEventListener('elsewhere-page',e=>{visible=e.detail.id==='interests';if(visible){resize();wake();}});
  document.addEventListener('elsewhere-motion',wake);document.addEventListener('visibilitychange',wake);
  new ResizeObserver(resize).observe(host);
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;host.classList.remove('is-ready');});
  canvas.addEventListener('webglcontextrestored',()=>{lost=false;resize();host.classList.add('is-ready');wake();});
  resize();render();host.classList.add('is-ready');wake();return {renderer,organism};
}
