---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

[//]: # (Hello, I'm Yue Huang, currently a fourth-year undergraduate student at [Sichuan University]&#40;https://www.scu.edu.cn/&#41;.)

[//]: # ()
[//]: # (I am currently a visiting student at LAIR LAB, [Lehigh University]&#40;https://www.lehighuniversity.cn/&#41;, under the supervision of [Prof. Lichao Sun]&#40;https://lichao-sun.github.io/&#41;. During this time, I also receive guidance from Prof. [Philip S. Yu]&#40;https://scholar.google.com/citations?user=D0lL1r0AAAAJ&hl=en&#41;. Before this, I received guidance from [Prof. Tang Jie]&#40;https://keg.cs.tsinghua.edu.cn/jietang/&#41; of Tsinghua University and collaborated with [Dr. Xiao Liu]&#40;https://scholar.google.com.hk/citations?user=VKI8EhUAAAAJ&hl=zh-CN&#41;. I was fortunate to collaborate with [Prof. Cheng Huang]&#40;https://chenghuang.org/index.html&#41; at Sichuan University.)

[//]: # ()
[//]: # ()
Hello, I'm Yue Huang (黄跃, Yue pronounced similar to your), an upcoming PhD student at the [University of Notre Dame](https://www.nd.edu/). Currently in my fourth year of undergraduate studies at [Sichuan University](https://www.scu.edu.cn/), I am deeply passionate about exploring the realms of academia and research.

Presently, I am honored to serve as a visiting student at the LAIR Lab, [Lehigh University](https://www.lehighuniversity.cn/), under the esteemed guidance of [Prof. Lichao Sun](https://lichao-sun.github.io/). This invaluable experience has provided me with profound insights, complemented by mentorship from the distinguished [Prof. Philip S. Yu](https://scholar.google.com/citations?user=D0lL1r0AAAAJ&hl=en). Prior to this, I had the privilege of working under the mentorship of [Prof. Tang Jie](https://keg.cs.tsinghua.edu.cn/jietang/) at Tsinghua University, where I collaborated closely with [Dr. Xiao Liu](https://scholar.google.com.hk/citations?user=VKI8EhUAAAAJ&hl=zh-CN), enriching my academic journey. Additionally, I have engaged in collaborative efforts with [Prof. Cheng Huang](https://chenghuang.org/index.html) at Sichuan University, further broadening my perspective.

Passionate about fostering trust in Large Language Models (LLMs), I lead the [TrustLLM](https://github.com/HowieHwong/TrustLLM) project alongside [Prof. Lichao Sun](https://lichao-sun.github.io/). We extend a warm invitation to researchers, developers, and practitioners intrigued by trustworthy LLMs to join our endeavor. Please feel free to [contact me](mailto:howiehwong@gmail.com) for further details.

# 💡 Research Interest

- Trustworthy AI: safety, truthfulness, fairness, robustness, privacy and machine ethics of AI model.
- LLM-based Agents: tool usage, efficiency and utility.
- Applied ML/DL: knowledge graph, AI for X (*e.g.,* computational social science, cybersecurity & human computer interaction)


# 🔥 News
- *2024.03.14*: &nbsp;🎉🎉 One paper has been accepted by NAACL 2024! Congratulations to [Qihui](https://mask-hui.github.io/), [Chujie](https://flossiee.github.io/) and [Dongping](https://dongping-chen.github.io/)!
- *2024.03.05*: &nbsp;🎉🎉 One paper has been accepted as a short paper of WWW 2024!
- *2024.02.08*: &nbsp;🎉🎉 Thanks for the invited talk on TrustLLM Project! @ [IBM Research](https://research.ibm.com/)
- *2024.01.27*: &nbsp;🎉🎉 This fall, I will be pursuing my Ph.D. at the University of Notre Dame, with [Prof. Xiangliang Zhang](https://scholar.google.com/citations?user=BhRJe4wAAAAJ&hl=en) as my advisor!
- *2024.01.15*: &nbsp;🎉🎉 [MetaTool](https://arxiv.org/abs/2310.03128) has been accepted by ICLR 2024!
- *2024.01.13*: &nbsp;🎉🎉 Finish research internship at Tsinghua University KEG & Zhipu Inc.!


# 📝 Selected Publications 

See more publications in my [Google Scholar](https://scholar.google.com/citations?user=HvzvvqQAAAAJ&hl=en)

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2024</div><img src='images/metatool_00.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MetaTool Benchmark for Large Language Models: Deciding Whether to Use Tools and Which to Use](https://arxiv.org/abs/2310.03128)

**Yue Huang**, Jiawen Shi, Yuan Li, Chenrui Fan, Siyuan Wu, Qihui Zhang, Yixin Liu, Pan Zhou, Yao Wan, Neil Zhenqiang Gong, Lichao Sun

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv Preprint</div><img src='images/trustllm.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[TrustLLM: Trustworthiness in Large Language Models](https://arxiv.org/abs/2401.05561)

Lichao Sun \*, **Yue Huang** \*, Haoran Wang, Siyuan Wu, Qihui Zhang, Chujie Gao, Yixin Huang, Wenhan Lyu, Yixuan Zhang, Xiner Li, Zhengliang Liu, Yixin Liu, Yijue Wang, Zhikun Zhang, Bhavya Kailkhura, Caiming Xiong, et al. (*: co-corresponding authors)


[**Toolkit & Code**](https://github.com/HowieHwong/TrustLLM) [![](https://img.shields.io/github/stars/HowieHwong/TrustLLM)](https://github.com/HowieHwong/TrustLLM)

[![Website](https://img.shields.io/badge/Website-%F0%9F%8C%8D-blue?style=flat-square)](https://trustllmbenchmark.github.io/TrustLLM-Website/)
[![Paper](https://img.shields.io/badge/Paper-%F0%9F%8E%93-lightgrey?style=flat-square)](https://arxiv.org/abs/2401.05561)
[![Dataset](https://img.shields.io/badge/Dataset-%F0%9F%92%BE-green?style=flat-square)](https://huggingface.co/datasets/TrustLLM/TrustLLM-dataset)
[![Data Map](https://img.shields.io/badge/Data%20Map-%F0%9F%8D%9F-orange?style=flat-square)](https://atlas.nomic.ai/map/f64e87d3-c769-4a90-b15d-9dc833acc8ba/8e9d7045-503b-4ba0-bc64-7201cb7aacee?xs=-16.14086&xf=-1.88776&ys=-7.54937&yf=3.88213)
[![Leaderboard](https://img.shields.io/badge/Leaderboard-%F0%9F%9A%80-brightgreen?style=flat-square)](https://trustllmbenchmark.github.io/TrustLLM-Website/leaderboard.html)
[![Toolkit Document](https://img.shields.io/badge/Toolkit%20Document-%F0%9F%93%9A-blueviolet?style=flat-square)](https://howiehwong.github.io/TrustLLM/)
[![Code](https://img.shields.io/badge/Code-%F0%9F%90%99-red?style=flat-square)](https://github.com/HowieHwong/TrustLLM)

</div>
</div>



- `NAACL 2024` [LLM-as-a-Coauthor: Can Mixed Human-Written and Machine-Generated Text Be Detected?](https://arxiv.org/abs/2401.05952) Qihui Zhang, Chujie Gao, Dongping Chen, **Yue Huang**, et al.





[//]: # (# ⚙️ Project)

[//]: # ()
[//]: # (**TrustLLM: Trustworthiness in Large Language Models**)

[//]: # ()
[//]: # ()
[//]: # ()
[//]: # ()
[//]: # ()
[//]: # ()
[//]: # ()
[//]: # (- We have proposed a set of guidelines based on a comprehensive literature review for evaluating the trustworthiness of LLMs, which is a taxonomy encompassing eight aspects, including *truthfulness, safety, fairness, robustness, privacy, machine ethics, transparency, and accountability*.)

[//]: # (- We have established a benchmark for six of these aspects due to the difficulty of benchmarking transparency and accountability. This is the first comprehensive and integrated benchmark comprising over 18 subcategories, covering more than 30 datasets and 16 LLMs, including proprietary and open-weight ones.)

[//]: # (- We obtain empirical findings from the results of our experiments, which provide valuable insights for future research.)

[//]: # (📣 **Welcome your Contribution**)

[//]: # ()
[//]: # (We welcome your contributions, including but not limited to the following:)

[//]: # ()
[//]: # (- New benchmark datasets of trustworthy dimension)

[//]: # (- Research on trustworthy issues of LLM)

[//]: # (- Improvements to the [trustllm toolkit]&#40;https://github.com/HowieHwong/TrustLLM&#41;)


# 🎤 Talk
- *2024.02* Invited Talk: Trustworthiness in Large Language Models @ [IBM Research](https://research.ibm.com/)


# 🎖 Honors and Awards
- *2024.01* Microsoft Accelerate Foundation Models Research is awarded (Project: [TrustLLM](https://github.com/HowieHwong/TrustLLM) & Lead PI: [Lichao Sun](https://lichao-sun.github.io/))

# 📖 Educations

- *2024.09 - 2029.06 (Expected)*, Ph.D, [University of Notre Dame](https://www.nd.edu/)
- *2020.09 - now*, BEng., [Sichuan University](https://www.scu.edu.cn/)

# 💻 Internships

- *2023.09 - 2024.01*, Research Intern at Tsinghua University KEG & Zhipu AI Inc.