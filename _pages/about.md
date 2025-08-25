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

[//]: # ()
[//]: # ()


Hi 👋, I'm Lang Gao(/læŋ ɡaʊ/).

I am currently a first-year PhD student at [MBZUAI](https://mbzuai.ac.ae/), a great place for research. I'm fortunate to be supervised by [Dr. Xiuying Chen](https://iriscxy.github.io/), an outstanding rising star and a truly supportive mentor.




# 💡 Interests
- **Mechanistic Interpretability (MI)**: Empirically or theoretically interpret behaviors of LLMs / provide empirically or theoretically interpretable approaches to enhance LLMs. 
  - *Recently I am trying to use MI to address various trustworthiness issues (jailbreaking, bias, etc.) in LLMs. This often yields highly efficient and effective solutions!*
- **Reliable Application of AI (secondary)**: Explore the reliable application of machine learning models, particularly in the **Biomedical** domains.
  - *I see these as  potential platforms to extend and prove the usefulness of MI.*

> I'm always happy to connect with anyone interested in interpretability. It's a field full of different sparks, and I'm eager to learn from new perspectives. Feel free to reach out!



<!-- ### Proficiencies
      
  **GPA:4.28/5.00** (or 3.70/4.00 according to [WES](https://www.wes.org/))

  |Course|Result|
  |:---:|:---:|
  |Calculus|97|
  |Software Engineering|97|
  |Algorithmic Design & Analysis|97|
  |Advanced Programming Language|94|
  |Computer Vision|94|
  |Principles of Imperative Computation|94|
  |Operating System|91|
  |Machine Learning|91|
  |...|...|
-->

# ⚙️ Skills
- Deep learning frameworks like Transformers, PyTorch, etc.
- Mechanistic Interpretability toolkits: NNsight, TransformerLens, SAELens.

# 📝 Publications 
## 🧑‍🔬 Mechanistic Interpretability
<div class='paper-box'><div class='paper-box-image'><div><img src='files/biaslens.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

  [**Evaluate Bias without Manual Test Sets: A Concept Representation Perspective for LLMs**](https://arxiv.org/abs/2505.15524) ![Static Badge](https://img.shields.io/badge/Submission-NeurIPS'2025-green)

  **Lang Gao**, Kaiyang Wan, Wei Liu, Chenxi Wang, Zirui Song, Zixiang Xu, Yanbo Wang, Veselin Stoyanov, and Xiuying Chen

*"BiasLens is a new interpretable method that directly examines concept representations inside LLMs to detect hidden biases, without relying on any human-labeled data."* 

[**Code**](https://anonymous.4open.science/r/BiasLens-1ECE/) 

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><img src='files/abd-pre.svg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

  [**Shaping the Safety Boundaries: Understanding and Defending Against Jailbreaks in Large Language Models**](https://aclanthology.org/2025.acl-long.1233/) ![Static Badge](https://img.shields.io/badge/Main-ACL'2025-red)

  **Lang Gao**, Jiahui Geng, Xiangliang Zhang, Preslav Nakov, and Xiuying Chen

*"Try to interpret common mechanisms of diverse LLM jailbreak attacks in the activation space and propose an efficient defense method."* 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='files/typo.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

  [**Word Form Matters: LLMs' Semantic Reconstruction under Typoglycemia**](https://aclanthology.org/2025.findings-acl.866/) ![Static Badge](https://img.shields.io/badge/Findings-ACL'2025-red)

  Chenxi Wang, Tianle Gu, Zhongyu Wei, **Lang Gao**, Zirui Song, and Xiuying Chen

*"How do LLMs make sense of scrambled input words—and why do they trust word form more than context?"* 

[**Code**](https://github.com/Aurora-cx/TypoLLM) 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='files/a2i.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

  [**Adversarial Cooperative Rationalization: The Risk of Spurious Correlations in Even Clean Datasets**](https://icml.cc/virtual/2025/poster/44947)  ![Static Badge](https://img.shields.io/badge/ICML'2025-red)

  Wei Liu, Zhongyu Niu, **Lang Gao**, Zhiying Deng, Jun Wang, Haozhao Wang, and Ruixuan Li

*"An interpretable, causal learning paradigm that simultaneously avoids spurious correlations in data and traditional self-interpretable models."*

[**Code**](https://github.com/jugechengzi/Rationalization-A2I) 
</div>
</div>

## 👨‍🔧 Applications

<div class='paper-box'><div class='paper-box-image'><div><img src='files/medtrinity.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

 [**MedTrinity-25M: A Large-scale Multimodal Dataset with Multigranular Annotations for Medicine**](https://iclr.cc/virtual/2025/poster/30141) ![Static Badge](https://img.shields.io/badge/ICLR'2025-red)

Yunfei Xie\*, Ce Zhou\*, **Lang Gao\***, Juncheng Wu*, Xianhang Li, Hong-Yu Zhou, Sheng Liu, Lei Xing, James Zou, Cihang Xie, and Yuyin Zhou 
(\*: first co-authors)

*"A comprehensive, large-scale multimodal dataset for medical vision-language models."*

[**Toolkit**](https://github.com/HeartyHaven/DataProcessingSystem) & [**Code**](https://github.com/UCSC-VLAA/MedTrinity-25M) ![](https://img.shields.io/github/stars/UCSC-VLAA/MedTrinity-25M)

[![Static Badge](https://img.shields.io/badge/Dataset-%F0%9F%92%BE-green)
](https://huggingface.co/datasets/UCSC-VLAA/MedTrinity-25M)[![Website](https://img.shields.io/badge/Website-%F0%9F%8C%8D-blue)](https://yunfeixie233.github.io/MedTrinity-25M/)
[![Static ](https://img.shields.io/badge/Expert_Evaluation-%F0%9F%A7%91%E2%80%8D%E2%9A%95%EF%B8%8F-gold)](https://docs.google.com/forms/d/e/1FAIpQLSfjNvzyo2LRpAvLfGpj6XmNI_OHaVDRtV0ON2pcz1dUYC5Itg/viewform)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='files/vuldetectbench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

 [**VulDetectBench: Evaluating the Deep Capability of Vulnerability Detection with Large Language Models**](https://arxiv.org/pdf/2406.07595)

Yu Liu\*, **Lang Gao\***, Mingxin Yang\*, Yu Xie, Ping Chen, Xiaojin Zhang, and Wei Chen 
(\*: first co-authors)

*"A novel, comprehensive benchmark, specifically designed to assess the code vulnerability detection capabilities of LLMs."*

[**Toolkit & Code**](https://github.com/Sweetaroo/VulDetectBench) [![](https://img.shields.io/github/stars/Sweetaroo/VulDetectBench)](https://github.com/Sweetaroo/VulDetectBench)
</div>
</div>





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

# 🧐 Service
- 2025, Reviewer: ACL, EMNLP, NLPCC.


# 💼 Experiences
- \[10 / 2024 - 07 / 2025      \] <img src='files/mbzuai.jpeg' style='width: 1.2em;'> MBZUAI, Research Intern (Supervisor: [Dr. Xiuying Chen](https://iriscxy.github.io/), topic: Mechanistic Interpretability of LLMs)
- \[07 / 2024 - 10 / 2024\] <img src='files/Notre_Dame.png' style='width: 1.2em;'> University of Notre Dame, Research Intern (Supervisor: [Prof. Xiangliang Zhang](https://engineering.nd.edu/faculty/xiangliang-zhang/), topic: LLMs for Bayesian Optimization)
- \[01 / 2024 - 06 / 2024\] <img src='files/ucsc.png' style='width: 1.2em;'> UC Santa Cruz, Research Intern (Supervisor: [Dr. Yuyin Zhou](https://yuyinzhou.github.io/), topic: Visual-Language models for healthcare)
- \[10 / 2023 - 12 / 2023\] <img src='files/hust.png' style='width: 1.2em;'> HUST (Supervisor: [Prof. Ruixuan Li](https://faculty.hust.edu.cn/rxli/zh_CN/index/1784505/list/index.htm), topic: Interpretable deep learning frameworks)
> 💬 I am deeply grateful to all the mentors and collaborators who have guided and supported me along the way. Your encouragement, trust, and inspiration have made all the difference in my journey.

# 📖 Educations
  *08 / 2025 - Now* : Ph.D. student, <img src='files/mbzuai.jpeg' style='width: 1.2em;'> Mohamed bin Zayed University of Artificial Intelligence 

  *09 / 2021 - 07 / 2025* : B.E., <img src='files/hust.png' style='width: 1.2em;'> Huazhong University of Science and Technology

<!-- # 🏆 Honors and Awards
- 🥇 **National First Price**, RAICOM Robotics Developer Contest - CAIR Engineering Competition National Finals，2024
- 🥈 **National Second Price**, 15th China College Students' Service Outsourcing Innovation and Entrepreneurship Competition, 2024
- 🥈 **National Second Prize**, The 5th Integrated Circuit EDA Design Elite Challenge (Deep Learning Track), 2023
- 🥉 **National Third Prize**, The 5th Global Campus Artificial Intelligence Algorithm Elite Competition, 2023. 
- 🥉 **National Third Prize**, iFlytek Developer Competition, NLP Track, 2023
-->


# 🧩Miscellaneous
## 📚 Resources
### Insights
- Book: Interpretability in Deep Learning \[[Link](files/XAI.pdf)\]
- Book: Interpretable Machine Learning \[[Link](https://christophm.github.io/interpretable-ml-book/index.html)\]
- Book: Trustworthy Machine Learning \[[Link](https://arxiv.org/pdf/2310.08215)\]
- Book: 大语言模型 \(The Chinese Book for Large Language Models\) \[[Link](https://llmbook-zh.github.io/LLMBook.pdf)\]
- Article: The Bitter Lesson \[[Link](files/bitter_lesson.pdf)\]
- Article: The Urgency of Interpretability \[[Link](https://www.darioamodei.com/post/the-urgency-of-interpretability)\]


### Blogs

- \[05/24\] \[Chinese\] National Undergraduate Innovation Project Documentation. \[[Link](files/grammargpt-rp.pdf)\] 
- \[03/24\] \[Chinese\] Negative Transfer. \[[Link](https://k034sybliz3.feishu.cn/wiki/GX7Vw4IfBiYq6okUDf7cAGCJnHh)\] 
- \[03/24\] \[Chinese\] Mixture of Experts Explained. \[[Link](https://k034sybliz3.feishu.cn/wiki/MjBFwFm9giBTg3kQ9v6cJ7uQnFb)\] 
- \[01/24\] \[Chinese\] EMNLP2020 Tutorial Notes (Topic: Explainable AI). \[[Link](https://k034sybliz3.feishu.cn/wiki/Mo2xwR6B4iDV7nk4CZ5clwymnze)\] 

## Other Stuff
I also like photography. Sometimes I take good photos by accident. So I might upload a few here someday, along with some unnecessary commentary, but feel free to pretend you're looking forward to it.🙃

---

<div style="text-align: center;">
<script type='text/javascript' id='mapmyvisitors' src='https://mapmyvisitors.com/map.js?cl=bdc1c4&w=600&t=n&d=RJ-9BpR3nPPhm7slE3OgXRPbI71Yo8jKNdXiKoeSQUw&co=f3eee8&ct=808080&cmo=3acc3a&cmn=ff5353'></script>
</div>


