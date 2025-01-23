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
Hi 👋, I'm Lang Gao(/læŋ ɡaʊ/), an undergraduate student of Computer Science and Technology at Huazhong University of Science and Technology(HUST), expected to graduate in July 2025.

I am currently a research assistant at [MBZUAI](https://mbzuai.ac.ae/). It is a nice place for research.

> I am currently actively seeking for PhD opportunities. If you have any relevant opportunities or suggestions, please feel free to [contact me](gaolang1643@outlook.com). I am very excited to discuss potential collaborations.


# 💡 Research Interest
- **Explainable AI**: My current research goal is to **interpret** why large foundational models suffer from *trustworthiness* issues, such as hallucinations and vulnerabilities, by investigating their abnormal *intrinsic behaviors and structures* and proposing **data-efficient solutions** to these problems.
- **Application of AI**: I am also highly interested and experienced in exploring the *reliable application* of large foundational models (like Large Language Models and Vision-Language Models), particularly in the **security & healthcare** domains.

# 📖 Educations

  *2021.09 - now* : B.E.(expected),<img src='files/hust.png' style='width: 1.2em;'> Huazhong University of Science and Technology(HUST)

### Proficiencies
      
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


### Skills
I have the necessary theoretical foundation and skills in AI/NLP research, including proficiency in deep learning frameworks (**PyTorch**, **TensorFlow**), training and evaluation techniques, and large-scale data management. 

I am also familiar with the architectures of large foundational models such as **GPT**, **Llama**, and **LLaVA**. I enjoy manipulating activations and neurons within these models and am eager to observe how changes affect their output.

# 📝 Publications 
## 🧑‍🔬 Explainable AI
<div class='paper-box'><div class='paper-box-image'><div><img src='files/abd-pre.svg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

  [**Shaping the Safety Boundaries: Understanding and Defending Against Jailbreaks in Large Language Models**](https://arxiv.org/abs/2412.17034) ![Static Badge](https://img.shields.io/badge/ARR2025-submission-green)


  **Lang Gao**, Xiangliang Zhang, Preslav Nakov, and Xiuying Chen

*"Try to interpret common mechanisms of diverse LLM jailbreak attacks in the activation space, and propose an efficient defense method.”"* 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='files/a2i.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

  **Adversarial Cooperative Rationalization: The Risk of Spurious Correlations in Even Clean Datasets** ![Static Badge](https://img.shields.io/badge/ARR2025-submission-green)

  
  Wei Liu, Zhongyu Niu, **Lang Gao**, Zhiying Deng, Jun Wang, Haozhao Wang, Zhigang Zeng, and Ruixuan Li

*"An interpretable, causal learning paradigm that simultaneously avoids spurious correlations in data and traditional self-interpretable models."*
</div>
</div>

## 👨‍🔧 Application of AI

<div class='paper-box'><div class='paper-box-image'><div><img src='files/medtrinity.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

 [**MedTrinity-25M: A Large-scale Multimodal Dataset with Multigranular Annotations for Medicine**](https://arxiv.org/abs/2408.02900) ![Static Badge](https://img.shields.io/badge/ICLR'2025-red
d)


Yunfei Xie\*, Ce Zhou\*, **Lang Gao\***, Juncheng Wu*, Xianhang Li, Hong-Yu Zhou, Sheng Liu, Lei Xing, James Zou, Cihang Xie, and Yuyin Zhou 
(\*: first co-authors)
[**Toolkit**](https://github.com/HeartyHaven/DataProcessingSystem) & [**Code**](https://github.com/UCSC-VLAA/MedTrinity-25M) ![](https://img.shields.io/github/stars/UCSC-VLAA/MedTrinity-25M)

[![Static Badge](https://img.shields.io/badge/Dataset-%F0%9F%92%BE-green)
](https://huggingface.co/datasets/UCSC-VLAA/MedTrinity-25M)[![Website](https://img.shields.io/badge/Website-%F0%9F%8C%8D-blue)](https://yunfeixie233.github.io/MedTrinity-25M/)
[![Static ](https://img.shields.io/badge/Expert_Evaluation-%F0%9F%A7%91%E2%80%8D%E2%9A%95%EF%B8%8F-gold)](https://docs.google.com/forms/d/e/1FAIpQLSfjNvzyo2LRpAvLfGpj6XmNI_OHaVDRtV0ON2pcz1dUYC5Itg/viewform)


*"A comprehensive, large-scale multimodal dataset for medical vision-language models."*
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='files/vuldetectbench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">


 [**VulDetectBench: Evaluating the Deep Capability of Vulnerability Detection with Large Language Models**](https://arxiv.org/pdf/2406.07595)

Yu Liu\*, **Lang Gao\***, Mingxin Yang\*, Yu Xie, Ping Chen, Xiaojin Zhang, and Wei Chen 
(\*: first co-authors)

*"A novel, comprehensive benchmark, specifically designed to assess the code vulnerability detection capabilities
of LLMs."*

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



# 💼 Experiences
- \[2024.10 - now\] <img src='files/mbzuai.png' style='width: 1.2em;'> MBZUAI (Supervisor: [Prof.Xiuying Chen](https://mbzuai.ac.ae/study/faculty/xiuying-chen/),topic:Interpretability in LLMs)
- \[2024.07 - 2024.10\] <img src='files/Notre_Dame.png' style='width: 1.2em;'> University of Notre Dame, Research Intern (Supervisor: [Prof.Xiangliang Zhang](https://engineering.nd.edu/faculty/xiangliang-zhang/),topic: LLMs for Bayesian Optimization)
- \[2024.01 - 2024.06\] <img src='files/ucsc.png' style='width: 1.2em;'> UC Santa Cruz, Research Intern (Supervisor: [Prof.Yuyin Zhou](https://yuyinzhou.github.io/),topic: Visual-Language models for healthcare)
- \[2023.10 - 2023.12\] <img src='files/hust.png' style='width: 1.2em;'> HUST (Supervisor: [Prof.Ruixuan Li](https://faculty.hust.edu.cn/rxli/zh_CN/index/1784505/list/index.htm),topic: Interpretable deep learning frameworks)

# 🏆 Honors and Awards
- 🥇 **National First Price**, RAICOM Robotics Developer Contest - CAIR Engineering Competition National Finals，2024
- 🥈 **National Second Price**, 15th China College Students' Service Outsourcing Innovation and Entrepreneurship Competition, 2024
- 🥈 **National Second Prize**, The 5th Integrated Circuit EDA Design Elite Challenge (Deep Learning Track), 2023
- 🥉 **National Third Prize**, The 5th Global Campus Artificial Intelligence Algorithm Elite Competition, 2023. 
- 🥉 **National Third Prize**, iFlytek Developer Competition, NLP Track, 2023

# 📚 Resources
### Insights
- Book: Interpretability in Deep Learning \[[Link](files/XAI.pdf)\]
- Book: Interpretable Machine Learning \[[Link](https://christophm.github.io/interpretable-ml-book/index.html)\]
- Book: Trustworthy Machine Learning \[[Link](https://arxiv.org/pdf/2310.08215)\]
- Book: 大语言模型 \(The Chinese Book for Large Language Models\) \[[Link](https://llmbook-zh.github.io/LLMBook.pdf)\]
- Article: The Bitter Lesson \[[Link](files/bitter_lesson.pdf)\]


### Blogs

- \[05/24\] \[Chinese\] National Undergraduate Innovation Project Documentation. \[[Link](files/grammargpt-rp.pdf)\] 
- \[03/24\] \[Chinese\] Negative Transfer. \[[Link](https://k034sybliz3.feishu.cn/wiki/GX7Vw4IfBiYq6okUDf7cAGCJnHh)\] 
- \[03/24\] \[Chinese\] Mixture of Experts Explained. \[[Link](https://k034sybliz3.feishu.cn/wiki/MjBFwFm9giBTg3kQ9v6cJ7uQnFb)\] 
- \[01/24\] \[Chinese\] EMNLP2020 Tutorial Notes (Topic: Explainable AI). \[[Link](https://k034sybliz3.feishu.cn/wiki/Mo2xwR6B4iDV7nk4CZ5clwymnze)\] 





# 📜 References

You can find my [full CV](files/CV_langgao.pdf) and an [English Transcript](files/Eng_transcript.pdf) here (Latest update: **Aug 14th**).

<a href="https://mapmyvisitors.com/web/1bw95"  title="Visit tracker"><img src="https://mapmyvisitors.com/map.png?d=RJ-9BpR3nPPhm7slE3OgXRPbI71Yo8jKNdXiKoeSQUw&cl=ffffff" /></a>


