(() => {
  'use strict';
  const sculptureURL=new URL('elsewhere-sculpture.bundle.js',document.currentScript.src).href;
  const book=document.querySelector('#book');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const motion={paused:reduced.matches};
  const records=[...book.children].map(node=>({node,template:node.cloneNode(true),id:node.id,chapter:node.dataset.chapter,title:node.dataset.title}));
  let pages=[],index=0,facet=0,sculptureStarted=false;
  const buttonPrev=document.querySelector('#page-prev'),buttonNext=document.querySelector('#page-next');
  document.body.classList.add('book-mode');
  function syncMotion(){
    document.body.classList.toggle('motion-paused',motion.paused);
    if(motion.paused)document.querySelectorAll('.turn-in').forEach(p=>p.classList.remove('turn-in'));
    document.dispatchEvent(new Event('elsewhere-motion'));
  }
  reduced.addEventListener('change',e=>{motion.paused=e.matches;syncMotion();});syncMotion();
  function measure(node){node.hidden=false;node.classList.add('measuring');book.append(node);}
  function fits(node){const inner=node.querySelector('.leaf-inner');return inner.scrollHeight<=inner.clientHeight+2;}
  function finish(node){node.classList.remove('measuring');node.hidden=true;pages.push(node);}
  function shell(record,n,extra=''){
    const el=document.createElement('section');el.className=`leaf reading-leaf ${extra}`;
    el.id=n===0?record.id:`${record.id}-${n+1}`;el.dataset.chapter=record.chapter;el.dataset.title=record.title;
    el.dataset.source=record.id;
    const inner=document.createElement('div');inner.className='leaf-inner';
    const heading=record.template.querySelector('.leaf-heading').cloneNode(true);
    if(n){heading.querySelector('.eyebrow').textContent+=' · CONTINUED';}
    const body=document.createElement('div');body.className='flow-body';inner.append(heading,body);el.append(inner);return el;
  }
  // Split text using DOM ranges so inline emphasis and hyperlinks survive page boundaries.
  function sliceBlock(block,start,end){
    const nodes=[];const walker=document.createTreeWalker(block,NodeFilter.SHOW_TEXT);let n,total=0;
    while((n=walker.nextNode())){nodes.push({node:n,start:total,end:total+n.length});total+=n.length;}
    const out=block.cloneNode(false);out.removeAttribute('id');
    if(!nodes.length)return out;
    const locate=offset=>{const x=nodes.find(x=>offset<x.end)||nodes[nodes.length-1];return [x.node,Math.max(0,Math.min(x.node.length,offset-x.start))];};
    const range=document.createRange();if(start===0)range.setStart(block,0);else range.setStart(...locate(start));if(end===total)range.setEnd(block,block.childNodes.length);else range.setEnd(...locate(end));out.append(range.cloneContents());return out;
  }
  function flow(record,extra=''){
    let count=0,node=shell(record,count,extra);measure(node);
    let body=node.querySelector('.flow-body');
    const queue=[...record.template.querySelector('.flow-body').children].map(n=>n.cloneNode(true));
    while(queue.length){
      const block=queue.shift();body.append(block);
      if(fits(node))continue;
      block.remove();
      if(body.children.length){finish(node);node=shell(record,++count,extra);measure(node);body=node.querySelector('.flow-body');queue.unshift(block);continue;}
      const text=block.textContent;
      const breaks=[...text.matchAll(/\s+/g)].map(m=>m.index).filter(i=>i>0);
      let low=0,high=breaks.length-1,best=0;
      while(low<=high){const middle=(low+high)>>1;const part=sliceBlock(block,0,breaks[middle]);body.append(part);const okay=fits(node);part.remove();if(okay){best=breaks[middle];low=middle+1;}else high=middle-1;}
      if(best){body.append(sliceBlock(block,0,best));queue.unshift(sliceBlock(block,best,text.length));}
      else{body.append(block);node.classList.add('overflow-leaf');}
      if(queue.length){finish(node);node=shell(record,++count,extra);measure(node);body=node.querySelector('.flow-body');}
    }
    finish(node);
  }
  function paper(record){
    const full=record.template.cloneNode(true);measure(full);
    if(innerWidth>800&&fits(full)){finish(full);return;}
    full.remove();
    const visual=record.template.cloneNode(true);visual.classList.add('paper-visual');visual.querySelector('.paper-box-text').remove();measure(visual);finish(visual);
    const original=record.template.querySelector('.publication');
    const template=document.createElement('section');
    template.innerHTML='<div class="leaf-inner"><header class="leaf-heading"><p class="eyebrow">RESEARCH NOTES</p><h2 tabindex="-1"></h2></header><div class="flow-body"></div></div>';
    template.querySelector('h2').textContent=original.querySelector('h3').textContent;
    [...original.querySelector('.paper-box-text').children].forEach(n=>template.querySelector('.flow-body').append(n.cloneNode(true)));
    flow({template,id:record.id+'-notes',chapter:record.chapter,title:record.title+' · Notes'},'paper-notes');
  }
  function paginate(){
    const old=(pages[index]&&pages[index].id)||location.hash.slice(1)||'cover';
    const oldSource=pages[index]&&(pages[index].dataset.source||pages[index].dataset.chapter);
    book.replaceChildren();pages=[];
    for(const record of records){
      if(record.template.classList.contains('flow-source'))flow(record,record.chapter==='notes'?'miscellany-leaf':'');
      else if(record.template.classList.contains('paper-source'))paper(record);
      else{const node=record.node;node.classList.remove('is-current','turn-in');measure(node);finish(node);}
    }
    show(findPage(pages.some(p=>p.id===old)?old:(oldSource||old)),{animate:false,history:false,focus:false});
  }
  function findPage(id){
    const aliases={top:'cover',observatory:'interests',miscellaneous:'notes'};id=aliases[id]||id;
    const exact=pages.findIndex(p=>p.id===id);if(exact>=0)return exact;
    const chapter=pages.findIndex(p=>p.dataset.chapter===id);return chapter>=0?chapter:0;
  }
  function show(next,{animate=true,history=true,focus=true}={}){
    next=Math.max(0,Math.min(pages.length-1,next));const direction=next>=index?1:-1;index=next;
    pages.forEach((p,i)=>{p.hidden=i!==index;p.classList.toggle('is-current',i===index);p.classList.remove('turn-in');});
    const page=pages[index];const dark=['cover','interests','contact','notes'].includes(page.dataset.chapter);
    document.body.classList.toggle('is-dark',dark);document.body.classList.toggle('is-cover',page.id==='cover');
    if(animate&&!reduced.matches&&!motion.paused){page.style.setProperty('--turn-origin',direction>0?'right':'left');page.style.setProperty('--turn-angle',`${direction*3}deg`);page.style.setProperty('--turn-shift',`${direction*12}px`);void page.offsetWidth;page.classList.add('turn-in');}
    document.querySelector('#page-counter').textContent=`${String(index+1).padStart(2,'0')} / ${String(pages.length).padStart(2,'0')}`;
    document.querySelector('#page-chapter').textContent=page.dataset.chapter==='publications'?'Selected research':page.dataset.title;
    document.querySelector('#page-status').textContent=`Page ${index+1} of ${pages.length}: ${page.dataset.title}`;
    buttonPrev.disabled=index===0;buttonNext.disabled=index===pages.length-1;
    document.querySelectorAll('.masthead nav a').forEach(a=>{if(pages[findPage(a.hash.slice(1))].dataset.chapter===page.dataset.chapter)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
    if(history)window.history.pushState(null,'','#'+page.id);
    if(focus){const heading=page.querySelector('h1,h2');if(heading)heading.focus({preventScroll:true});}
    [page,pages[index+1]].filter(Boolean).forEach(p=>p.querySelectorAll('img').forEach(img=>{img.loading='eager';}));
    if(page.id==='interests'){layoutFacet();startSculpture();}
    document.dispatchEvent(new CustomEvent('elsewhere-page',{detail:{id:page.id}}));
  }
  buttonPrev.addEventListener('click',()=>show(index-1));buttonNext.addEventListener('click',()=>show(index+1));
  document.addEventListener('click',event=>{
    const link=event.target.closest('a[href^="#"]');if(!link)return;
    const id=link.hash.slice(1);if(!id)return;event.preventDefault();show(findPage(id));
  });
  window.addEventListener('popstate',()=>show(findPage(location.hash.slice(1)),{history:false}));
  document.addEventListener('keydown',e=>{
    if(document.querySelector('dialog[open]')||e.altKey||e.ctrlKey||e.metaKey||e.target.closest('canvas,input,textarea,select,[contenteditable],[role="tablist"]'))return;
    if(['ArrowRight','PageDown','ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();show(index+(['ArrowRight','PageDown'].includes(e.key)?1:-1));}
  });
  let touch=null;
  book.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'&&!e.target.closest('canvas,button,a'))touch={x:e.clientX,y:e.clientY};},{passive:true});
  book.addEventListener('pointerup',e=>{if(!touch)return;const x=e.clientX-touch.x,y=e.clientY-touch.y;touch=null;if(Math.abs(x)>75&&Math.abs(y)<55)show(index+(x<0?1:-1));},{passive:true});
  book.addEventListener('pointercancel',()=>{touch=null;});
  // Accumulate a deliberate wheel gesture, then turn once after it settles.
  // A cooldown ignores trackpad inertia instead of rushing through pages.
  let wheelAmount=0,wheelTimer=0,wheelLockedUntil=0,lastWheel=0;
  document.addEventListener('wheel',event=>{
    if(document.querySelector('dialog[open]')||event.ctrlKey||event.metaKey)return;
    event.preventDefault();const now=performance.now();if(now<wheelLockedUntil){wheelLockedUntil=Math.max(wheelLockedUntil,now+120);return;}
    let delta=event.deltaY*(event.deltaMode===1?24:event.deltaMode===2?innerHeight:1);
    delta=Math.max(-240,Math.min(240,delta));
    if(now-lastWheel>250||Math.sign(delta)!==Math.sign(wheelAmount))wheelAmount=0;
    lastWheel=now;wheelAmount+=delta;clearTimeout(wheelTimer);
    wheelTimer=setTimeout(()=>{
      if(Math.abs(wheelAmount)>=24){wheelLockedUntil=performance.now()+420;show(index+Math.sign(wheelAmount));}
      wheelAmount=0;
    },55);
  },{passive:false});
  const experienceDialog=document.querySelector('#experience-dialog');
  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-experience]');if(!button)return;
    const card=button.closest('.experience-card');document.querySelector('#experience-title').textContent=card.querySelector('h3').textContent;
    const body=document.querySelector('#experience-body');body.replaceChildren(card.querySelector('.timeline-date').cloneNode(true),card.querySelector('template').content.cloneNode(true));experienceDialog.showModal();
  });
  document.querySelector('#experience-close').addEventListener('click',()=>experienceDialog.close());
  const interestPage=records.find(r=>r.id==='interests').node;
  const narrative=interestPage.querySelector('.interest-narrative');
  const facetPanels=[...interestPage.querySelectorAll('.facet')];
  const facetOriginals=facetPanels.map(panel=>{
    const paragraphs=[...panel.querySelectorAll('p:not(.eyebrow)')];
    const originals=paragraphs.map(p=>p.cloneNode(true));paragraphs.forEach(p=>p.remove());
    const reader=document.createElement('div');reader.className='facet-reader';panel.append(reader);return originals;
  });
  const more=document.createElement('button');more.type='button';more.className='facet-more';more.hidden=true;narrative.append(more);
  let thoughtPages=[],thoughtIndex=0;
  function displayThought(){
    const reader=facetPanels[facet].querySelector('.facet-reader');reader.replaceChildren(...thoughtPages[thoughtIndex].map(n=>n.cloneNode(true)));
    more.textContent=`Continue reading · ${thoughtIndex+1} / ${thoughtPages.length} →`;
  }
  more.addEventListener('click',()=>{thoughtIndex=(thoughtIndex+1)%thoughtPages.length;displayThought();});
  function layoutFacet(){
    if(interestPage.hidden)return;
    const reader=facetPanels[facet].querySelector('.facet-reader');reader.replaceChildren(...facetOriginals[facet].map(n=>n.cloneNode(true)));more.hidden=true;
    if(narrative.scrollHeight<=narrative.clientHeight+1)return;
    more.hidden=false;more.textContent='Continue reading →';reader.replaceChildren();thoughtPages=[];thoughtIndex=0;
    const queue=facetOriginals[facet].map(n=>n.cloneNode(true));
    const save=()=>{thoughtPages.push([...reader.children].map(n=>n.cloneNode(true)));reader.replaceChildren();};
    while(queue.length){
      const block=queue.shift();reader.append(block);
      if(narrative.scrollHeight<=narrative.clientHeight+1)continue;
      block.remove();if(reader.children.length){save();queue.unshift(block);continue;}
      const text=block.textContent,breaks=[...text.matchAll(/\s+/g)].map(m=>m.index).filter(i=>i>0);let low=0,high=breaks.length-1,best=0;
      while(low<=high){const mid=(low+high)>>1,part=sliceBlock(block,0,breaks[mid]);reader.append(part);const okay=narrative.scrollHeight<=narrative.clientHeight+1;part.remove();if(okay){best=breaks[mid];low=mid+1;}else high=mid-1;}
      if(best){reader.append(sliceBlock(block,0,best));queue.unshift(sliceBlock(block,best,text.length));}else reader.append(block);
      save();
    }
    if(reader.children.length)save();displayThought();
  }
  function setFacet(next,fromGeometry=false){
    facet=(next%3+3)%3;
    interestPage.querySelectorAll('[data-facet]').forEach(b=>{const active=Number(b.dataset.facet)===facet;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
    interestPage.querySelectorAll('.facet').forEach((p,i)=>{p.hidden=i!==facet;});
    layoutFacet();
    if(!fromGeometry)document.dispatchEvent(new CustomEvent('interest-select',{detail:{index:facet}}));
  }
  interestPage.querySelectorAll('[data-facet]').forEach(b=>b.addEventListener('click',()=>setFacet(Number(b.dataset.facet))));
  interestPage.querySelector('.facet-tabs').addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();setFacet(facet+(e.key==='ArrowRight'?1:-1));interestPage.querySelector('[aria-selected=true]').focus();}});
  interestPage.querySelectorAll('[data-turn]').forEach(b=>b.addEventListener('click',()=>setFacet(facet+Number(b.dataset.turn))));
  document.addEventListener('interest-change',e=>setFacet(e.detail.index,true));
  async function startSculpture(){
    if(sculptureStarted)return;sculptureStarted=true;
    try{await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=sculptureURL;script.onload=resolve;script.onerror=reject;document.head.append(script);});window.ElsewhereSculpture.mountSculpture(document.querySelector('#sculpture'),motion);}
    catch(_){document.querySelector('#sculpture-help').textContent='Choose a research interest';}
  }
  const cover=records.find(r=>r.id==='cover').node;
  if(matchMedia('(pointer:fine)').matches)cover.addEventListener('pointermove',e=>{if(motion.paused)return;cover.style.setProperty('--world-x',`${(e.clientX/innerWidth-.5)*-10}px`);cover.style.setProperty('--world-y',`${(e.clientY/innerHeight-.5)*-6}px`);},{passive:true});
  records.find(r=>r.id==='contact').node.querySelector('#copy-email').addEventListener('click',async()=>{
    const email='Lang.Gao@mbzuai.ac.ae';let copied=false;
    try{await navigator.clipboard.writeText(email);copied=true;}catch(_){const input=document.createElement('textarea');input.value=email;input.style.position='fixed';input.style.opacity='0';document.body.append(input);input.select();copied=document.execCommand('copy');input.remove();}
    document.querySelector('#copy-status').textContent=copied?'Email copied':'Select the address above to copy';
  });
  paginate();
  document.fonts.ready.then(()=>paginate());
  let timer;window.addEventListener('resize',()=>{clearTimeout(timer);timer=setTimeout(paginate,180);});
})();
