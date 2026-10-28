# 替代主页 · Lang Gao 高朗

入口为 `alternative.html`，原主页 `_pages/about.md`、站点配置与原始素材保持独立。可直接用浏览器打开；本地 HTTP 预览可在仓库根目录运行 `python -m http.server 8000`，访问 `/alternative.html`。发布路径为 `https://heartyhaven.github.io/alternative.html`；新旧版导航分别提供 Old version / New personal homepage 入口，旧版入口使用细边框和圆点强调。

## 分页阅读

页面采用固定画幅分页。支持前后按钮、方向键、Page Up / Page Down、触屏横向滑动和章节导航；浏览器前进、后退与页面地址同步。

滚轮使用 24px 累积阈值、55ms 手势结束等待和至少 420ms 冷却，持续的触控板惯性不会连续翻页。翻页采用约 720ms 的淡入过渡，尊重系统减少动态效果的设置。

论文在空间足够时各占一页；小屏幕分为图示页和文字页，长文字继续分页，保留作者、摘要及链接。经历始终集中在一页，Details 展示完整课题与导师信息。Resources 与 Miscellany 使用统一的暖白文字、浅金标签和深色背景；Miscellany 页采用深色背景、更清晰的景观和简短英文设计说明，替换原摄影段落；包含 `/blog/`、`/blog/neuron-evolution/` 和原来的四个博客链接。

## 视觉与语言

首屏姓名使用 `Lang Gao 高朗`，中文名采用 Zhi Mang Xing 书法字体；个人介绍以正式的 `I am Lang Gao (高朗)` 开头。首屏不再显示地点标记。核心题记保留繁体原句与英文翻译，字号收小，字重使用更纤细的 200；正文及操作标签采用英文，保留原有中文资源名称。

首屏图像为 `images/elsewhere/deep-time-dawn.webp`。浅色正文与深色研究、联系页面的整个画幅均以低透明度渐变露出同一景观。论文图在独立的暖色纸面合成层内使用 multiply 混合，让白底在页面中透明呈现；原图文件与科学图示内容不改写。

浏览器标签页图标为暖金色线框二十面体，提供 SVG、16/32px PNG、多尺寸 ICO 和 Apple touch icon。

通用功能图标采用相同线宽、继承文字颜色的 SVG。Cohere 和 Amazon 的矢量标识已解析为古铜色副本，保存在 `images/elsewhere/icons/`。其余机构标识通过灰阶与暖色滤镜统一，保留原始文件。

顶部邮箱入口标为 Contact，移除 Contents 按钮；底部不再提供播放按钮。背景与装饰几何默认动态，仍尊重系统减少动态效果设置。

Contact 页只保留半透明景观背景和联系信息，移除圆盘装饰，突出显示 `Lang.Gao@mbzuai.ac.ae`，支持邮件链接和复制。页面保留原主页入口与 ARR Great Reviewer。

两张生成图的 PNG 原件、WebP 版本与内置 image_gen 的完整提示词仍保存在 `images/elsewhere/`。

## 二十面体与研究兴趣

互动几何只保留二十面体。三个稳定朝向对应 Mechanistic interpretability、Representation geometry、Trustworthy AI。拖动、画布方向键、左右按钮或编号标签都能切换。二十面体默认有轻微姿态和光照起伏，叙述只随主动旋转切换，不会自行更换。

极短屏幕的研究叙述提供 Continue reading，避免缩成难读的小字或裁切内容。三维引擎在访问研究兴趣页时加载；不可用时保留代码生成的二十面体 SVG 和可操作的研究方向按钮。

修改三维源码后，在仓库根目录重新打包：

```sh
npx --yes esbuild@0.14.54 assets/js/elsewhere-sculpture.js --bundle --format=iife --global-name=ElsewhereSculpture --minify --outfile=assets/js/elsewhere-sculpture.bundle.js
```

本地 Three.js 源码和许可证在 `assets/js/elsewhere-vendor/`。不要移动到 Jekyll 排除的 `assets/js/vendor/`。
