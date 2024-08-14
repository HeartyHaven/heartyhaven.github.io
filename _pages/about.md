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
Hi 👋,I'm Lang Gao(/læŋ ɡaʊ/), an undergraduate student of Computer Science and Technology at Huazhong University of Science and Technology(HUST),expected to graduate in July 2025.

I'm currently a visiting student at MINE Lab,[University of Notre Dame](https://www.nd.edu/),under the guidance of [Prof.Xiangliang Zhang](https://engineering.nd.edu/faculty/xiangliang-zhang/)(topic:LLM for optimization).Before that,I worked under [Prof.Yuyin Zhou](https://yuyinzhou.github.io/) at University of California,Santa Cruz(UCSC) and [Prof.Ruixuan Li](https://scholar.google.com/citations?user=scAIu2MAAAAJ&hl=en) of HUST.

> I am currently actively seeking for PhD opportunities.If you have any relevant opportunities or suggestions, please feel free to [contact me](gaolang1643@hust.edu.cn). I am very excited to discuss potential collaborations.


# 💡 Research Interest

- Large Language Models(LLMs)
  - Application on various domains:LLM for healthcare,security,and scientific research.
  - Data-Centric Solutions:Constructing high-quality benchmarks and datasets to evaluate and improve LLMs on various tasks.
  - Multimodal Large Language Models(MLLMs).
- Trustworthy and Explanable AI(XAI)
  - Building self-explaining deep-learning models and workflows to provide faithful and trustworthy predictions.

# 📖 Educations

  *2021.09 - now* : B.E.(expected),<img src='images/hust.png' style='width: 1.2em;'> Huazhong University of Science and Technology(HUST)

### Proficiencies
      
  **GPA:4.34/5.00** (or 3.75/4.00 according to [WES](https://www.wes.org/))

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
  - Deep Learning Framework: Proficient in **Pytorch**, **Tensorflow**
  - Large Language Models:
  Proficient in Prompt Engineering(Chain-of-Thought,In-Context-Learning and few-shot learning)
  Fine-tune techniques(**PEFT**,full-parameter training;large-scale distributed training on server cluster),**Deepspeed**, **Transformers**
  - Strong Data Management and Processing Skills: **deduplication, cleaning, formatting**, and **statical analysis**. 
  - Programming Languages: Proficient in **Python, Linux,C and C++.**

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><img src='images/medtrinity.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

![nips24](https://img.shields.io/badge/NIPS24-submitted-orange) [MedTrinity-25M: A Large-scale Multimodal Dataset with Multigranular Annotations for Medicine](https://arxiv.org/abs/2408.02900)

Yunfei Xie\*, Ce Zhou\*, **Lang Gao\***, Juncheng Wu*, Xianhang Li, Hong-Yu Zhou, Sheng Liu, Lei Xing, James Zou, Cihang Xie, and Yuyin Zhou 
(\*: first co-authors)
[**Toolkit**](https://github.com/HeartyHaven/DataProcessingSystem) & [**Code**](https://github.com/UCSC-VLAA/MedTrinity-25M) 
[![Static Badge](https://img.shields.io/badge/Dataset-%F0%9F%92%BE-green)
](https://huggingface.co/datasets/UCSC-VLAA/MedTrinity-25M)[![Website](https://img.shields.io/badge/Website-%F0%9F%8C%8D-blue)](https://yunfeixie233.github.io/MedTrinity-25M/)
[![Static ](https://img.shields.io/badge/Expert_Evaluation-%F0%9F%A7%91%E2%80%8D%E2%9A%95%EF%B8%8F-gold)](https://docs.google.com/forms/d/e/1FAIpQLSfjNvzyo2LRpAvLfGpj6XmNI_OHaVDRtV0ON2pcz1dUYC5Itg/viewform)


*"A comprehensive, large-scale multimodal dataset for medical vision-language models."*
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/vuldetectbench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">


![nips24](https://img.shields.io/badge/NIPS24-submitted-orange) [VulDetectBench:Evaluating the Deep Capability of Vulnerability Detection with Large Language Models](https://arxiv.org/pdf/2406.07595)

Yu Liu\*,**Lang Gao\***,Mingxin Yang\*,Yu Xie,Ping Chen,Xiaojin Zhang, and Wei Chen 
(\*: first co-authors)

*"A novel, comprehensive benchmark, specifically designed to assess the code vulnerability detection capabilities
of LLMs."*

[**Toolkit & Code**](https://github.com/Sweetaroo/VulDetectBench) [![](https://img.shields.io/github/stars/Sweetaroo/VulDetectBench)](https://github.com/Sweetaroo/VulDetectBench)
</div>
</div>



![nips24](https://img.shields.io/badge/NIPS24-submitted-orange)  **Attacking for Inspection and Instruction: The Risk of Spurious Correlations in Even Clean Datasets** Wei Liu, Zhiying Deng, Zhongyu Niu, **Lang Gao**, Jun Wang, Haozhao Wang, and Ruixuan Li

*"An interpretable causal model framework aimed at correctly learning useful
information from data with spurious correlations."*

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

[//]: #	⚙️ Other Works
[//]: For more works,please refer to my [Github](https://github.com/HeartyHaven).
[//]: - **GrammarGPT**:A Chinese Text Correction System Based on Large Language Models([Technical Report](images/grammargpt-rp.pdf))
[//]: - **NewsGPT**:Daily News Summarizer and Q&A([Code](https://github.com/HeartyHaven/NewsGPT))
[//]: - **SoC-Analyser**:A U-net based SoC static IR drop estimation system.([Code](https://github.com/HeartyHaven/soc-analyser))

# 🏆 Honors and Awards
- **National Second Price**,15th China College Students' Service Outsourcing Innovation and Entrepreneurship Competition,2024
- **National Third Prize**, The 5th Global Campus Artificial Intelligence Algorithm Elite Competition,2023. 
- **National Third Prize**, iFlytek Developer Competition, NLP Track, 2023
- **National Second Prize**, The 5th Integrated Circuit EDA Design Elite Challenge (Deep Learning Track), 2023

# 📜 References

You can find my [full CV](images/CV_langgao.pdf) and an [English Transcript](images/Eng_transcript.pdf) here.

<a href="https://mapmyvisitors.com/web/1bw95"  title="Visit tracker"><img src="https://mapmyvisitors.com/map.png?d=RJ-9BpR3nPPhm7slE3OgXRPbI71Yo8jKNdXiKoeSQUw&cl=ffffff" /></a>
