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

Hello, I'm Yue Huang, currently a fourth-year undergraduate student at [Sichuan University](https://www.scu.edu.cn/).

I am currently a visiting student at LAIR LAB, [Lehigh University](https://www.lehighuniversity.cn/), under the supervision of [Prof. Lichao Sun](https://lichao-sun.github.io/). Before this, I received guidance from [Prof. Tang Jie](https://keg.cs.tsinghua.edu.cn/jietang/) of Tsinghua University and collaborated with [Dr. Xiao Liu](https://scholar.google.com.hk/citations?user=VKI8EhUAAAAJ&hl=zh-CN). I was fortunate to receive guidance from [Prof. Cheng Huang](https://chenghuang.org/index.html) at Sichuan University.







❤️‍🔥 The project [TrustLLM](https://github.com/HowieHwong/TrustLLM), led by me and [Prof. Lichao Sun](https://lichao-sun.github.io/), is cordially inviting researchers, developers, and practitioners interested in issues related to trustworthy LLMs to join us. [Contact me.](mailto:howiehwong@gmail.com)

# 💡 Research Interest

- Trustworthy AI: safety, truthfulness, fairness, robustness, and privacy of AI model. (*e.g.,* [TrustLLM](https://github.com/HowieHwong/TrustLLM))
- LLM-based Agents: tool usage (*e.g.,* [MetaTool](https://arxiv.org/abs/2310.03128)), efficiency and utility.
- Applied ML/DL: knowledge graph, AI for X (*e.g.,* computational social science, cybersecurity & human computer interaction)


# 🔥 News
- *2024.02.08*: &nbsp;🎉🎉 Thanks for the invited talk on TrustLLM Project! @ [IBM Research](https://research.ibm.com/)
- *2024.01.27*: &nbsp;🎉🎉 This fall, I will be pursuing my Ph.D. at the University of Notre Dame, with [Prof. Xiangliang Zhang](https://scholar.google.com/citations?user=BhRJe4wAAAAJ&hl=en) as my advisor!
- *2024.01.15*: &nbsp;🎉🎉 My paper [MetaTool](https://arxiv.org/abs/2310.03128) has been accepted by ICLR 2024!
- *2024.01.13*: &nbsp;🎉🎉 Finish research internship at Tsinghua University KEG & Zhipu Inc.!


# 📝 Selected Publications 

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

**Toolkit & Code**: https://github.com/HowieHwong/TrustLLM
</div>
</div>

# ⚙️ Project


**TrustLLM: Trustworthiness in Large Language Models**

<div align="center">


<img src="https://raw.githubusercontent.com/TrustLLMBenchmark/TrustLLM-Website/main/img/logo.png" width="60%">

</div>

[![Website](https://img.shields.io/badge/Website-%F0%9F%8C%8D-blue?style=flat-square)](https://trustllmbenchmark.github.io/TrustLLM-Website/)
[![Paper](https://img.shields.io/badge/Paper-%F0%9F%8E%93-lightgrey?style=flat-square)](https://arxiv.org/abs/2401.05561)
[![Dataset](https://img.shields.io/badge/Dataset-%F0%9F%92%BE-green?style=flat-square)](https://huggingface.co/datasets/TrustLLM/TrustLLM-dataset)
[![Data Map](https://img.shields.io/badge/Data%20Map-%F0%9F%8D%9F-orange?style=flat-square)](https://atlas.nomic.ai/map/f64e87d3-c769-4a90-b15d-9dc833acc8ba/8e9d7045-503b-4ba0-bc64-7201cb7aacee?xs=-16.14086&xf=-1.88776&ys=-7.54937&yf=3.88213)
[![Leaderboard](https://img.shields.io/badge/Leaderboard-%F0%9F%9A%80-brightgreen?style=flat-square)](https://trustllmbenchmark.github.io/TrustLLM-Website/leaderboard.html)
[![Toolkit Document](https://img.shields.io/badge/Toolkit%20Document-%F0%9F%93%9A-blueviolet?style=flat-square)](https://howiehwong.github.io/TrustLLM/)
[![Code](https://img.shields.io/badge/Code-%F0%9F%90%99-red?style=flat-square)](https://github.com/HowieHwong/TrustLLM)




- We have proposed a set of guidelines based on a comprehensive literature review for evaluating the trustworthiness of LLMs, which is a taxonomy encompassing eight aspects, including *truthfulness, safety, fairness, robustness, privacy, machine ethics, transparency, and accountability*.
- We have established a benchmark for six of these aspects due to the difficulty of benchmarking transparency and accountability. This is the first comprehensive and integrated benchmark comprising over 18 subcategories, covering more than 30 datasets and 16 LLMs, including proprietary and open-weight ones.
- We obtain empirical findings from the results of our experiments, which provide valuable insights for future research.

📣 **Welcome your Contribution**

We welcome your contributions, including but not limited to the following:

- New benchmark datasets of trustworthy dimension
- Research on trustworthy issues of LLM
- Improvements to the [trustllm toolkit](https://github.com/HowieHwong/TrustLLM)


# 🎤 Talk
- *2024.02* Invited Talk: Trustworthiness in Large Language Models @ [IBM Research](https://research.ibm.com/)


# 🎖 Honors and Awards
- *2024.01* Microsoft Accelerate Foundation Models Research is awarded (Project: [TrustLLM](https://github.com/HowieHwong/TrustLLM) & Lead PI: [Lichao Sun](https://lichao-sun.github.io/))

# 📖 Educations

- *2020.09 - now*, [Sichuan University](https://www.scu.edu.cn/)

# 💻 Internships

- *2023.09 - 2024.01*, Research Intern at Tsinghua University KEG & Zhipu AI Inc.