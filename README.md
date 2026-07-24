<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=120&section=header&text=Sathwin%20Reddy%20Julakanti&fontSize=36&fontColor=ffffff&fontAlignY=65&animation=fadeIn" width="100%"/>

</div>

<div align="center">

### M.S. Computer Science · Arizona State University · GPA 4.0

**Backend Systems · Distributed Infrastructure · Physical AI & Sensor Fusion**

Full Stack Software Developer @ Cala Health

<br/>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sathwin)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sjulaka7@asu.edu)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sathwin)
[![Resume](https://img.shields.io/badge/Resume-4285F4?style=for-the-badge&logo=googledrive&logoColor=white)](https://github.com/sathwin)

</div>

---

## About

I'm a backend and infrastructure-focused engineer finishing my M.S. in CS at ASU. I've spent the last two years building distributed systems, cloud-native backends, and event-driven pipelines across three engineering internships, alongside research in autonomous systems and sensor fusion for physical environment perception.

I write mostly in **Java, Python, and C++**, work primarily on **AWS**, and have shipped end-to-end systems spanning Kafka pipelines, microservice APIs, containerized deployments, and LiDAR + camera fusion models. I'm drawn to hard infrastructure problems and real-world physical systems.

---

## Experience

<table>
  <tr>
    <th>Role</th>
    <th>Company</th>
    <th>Period</th>
  </tr>
  <tr>
    <td>Full Stack Software Developer</td>
    <td>Cala Health</td>
    <td>Jul 2026 – Present</td>
  </tr>
  <!-- Hidden - uncomment to restore
  <tr>
    <td>Software Development Intern</td>
    <td>VariableAI · AI Startup, Phoenix AZ</td>
    <td>Jun 2025 – Apr 2026</td>
  </tr>
  -->
  <tr>
    <td>Software Development Engineer Intern</td>
    <td>AI Quotient, Inc.</td>
    <td>Aug 2024 – May 2025</td>
  </tr>
  <tr>
    <td>Student Cloud Developer Intern</td>
    <td>ASU AI Cloud Innovation Center · Powered by AWS</td>
    <td>Oct 2023 – Aug 2024</td>
  </tr>
  <tr>
    <td>Research Assistant · Autonomous Systems & CV Lab</td>
    <td>ASU IMPACT Lab · Collab w/ UC San Diego</td>
    <td>Dec 2023 – Aug 2025</td>
  </tr>
  <tr>
    <td>Graduate Teaching Assistant · FSE 100</td>
    <td>Arizona State University</td>
    <td>Jan 2023 – May 2026</td>
  </tr>
</table>

---

## Featured Projects

### ⚡ [FlowSight — Real-Time Physical Environment Intelligence](https://github.com/sathwin/FlowSight)
> Multi-camera vehicle detection and tracking prototype for smart city traffic analysis

Built a **Kafka-based event streaming pipeline** ingesting multi-camera video frames into a **FastAPI** backend on **AWS EC2**. Vehicle detection and tracking via **YOLOv8 + DeepSORT** (PyTorch/OpenCV), extracting counts, approximate speeds, and congestion anomalies from simulated streams. Containerized with **Docker**, experimented with **Kubernetes/EKS** for scaling, and wired **Prometheus + Grafana** dashboards to monitor inference latency and detection confidence over time.

`Python` `Kafka` `YOLOv8` `DeepSORT` `PyTorch` `OpenCV` `Docker` `Kubernetes` `FastAPI` `AWS EC2` `MLflow` `Prometheus` `Grafana`

---

### ⚙️ [SmartQueue — Distributed Task Processing System](https://github.com/sathwin/smartqueue)
> Priority-scheduled distributed job queue with auto-scaling worker infrastructure

Designed a **distributed backend** with **FastAPI** REST APIs and **Redis** queue state management. Implemented **C++ worker processes** with priority scheduling and retry logic. Deployed on **ECS** with **CloudWatch**-triggered auto-scaling and **Java**-based rate limiting to protect downstream services. CI/CD via **AWS CodePipeline + ECR** with WebSocket monitoring and SNS alerting.

`Java` `C++` `FastAPI` `Redis` `AWS ECS` `CloudWatch` `Docker` `CodePipeline` `WebSockets`

---

### 🗂️ [LegalDocs AI — Serverless Document Backend](https://github.com/sathwin/legaldocs-ai)
> Serverless event-driven document processing platform with multi-tenant auth

Architected a serverless backend using **Lambda, Step Functions, Textract, and Bedrock**. Built a custom **Java** Lambda layer for PDF preprocessing exposed through **API Gateway**. Multi-tenant **FastAPI** backend on **ECS Fargate** with **Cognito** authentication, RBAC, and **KMS** encryption. Full infrastructure via **CloudFormation** nested stacks with **X-Ray** tracing and **CloudWatch** dashboards.

`Java` `Python` `FastAPI` `AWS Lambda` `Step Functions` `Bedrock` `ECS Fargate` `Cognito` `KMS` `CloudFormation` `X-Ray`

---

### 📄 DocuMind AI — RAG Document Q&A System
> Natural language querying over PDFs, reports, and knowledge documents

Built a full **RAG pipeline**: ingestion, chunking, embedding generation via **AWS Bedrock/OpenAI**, vector search with **FAISS/Pinecone**, top-k retrieval, and LLM-based response synthesis with source grounding. Hallucination evaluation and query caching included. Deployed with **FastAPI**, **AWS Lambda**, **S3**, **Docker**, and **GitHub Actions** CI/CD.

`Python` `FastAPI` `LangChain` `FAISS` `Pinecone` `AWS Bedrock` `Lambda` `Docker` `GitHub Actions`

---

## Tech Stack

**Languages**

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=postgresql&logoColor=white)

**Backend & APIs**

![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white)
![gRPC](https://img.shields.io/badge/gRPC-244c5a?style=flat-square&logo=google&logoColor=white)
![REST](https://img.shields.io/badge/REST%20APIs-FF6C37?style=flat-square&logo=postman&logoColor=white)
![WebSockets](https://img.shields.io/badge/WebSockets-010101?style=flat-square&logo=socketdotio&logoColor=white)

**Infrastructure & DevOps**

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Kafka](https://img.shields.io/badge/Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=flat-square&logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat-square&logo=grafana&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)

**Cloud — AWS**

![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white)
![Lambda](https://img.shields.io/badge/Lambda-FF9900?style=flat-square&logo=awslambda&logoColor=white)
![ECS](https://img.shields.io/badge/ECS%2FFargate-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![EC2](https://img.shields.io/badge/EC2-FF9900?style=flat-square&logo=amazonec2&logoColor=white)
![S3](https://img.shields.io/badge/S3-569A31?style=flat-square&logo=amazons3&logoColor=white)
![CloudFormation](https://img.shields.io/badge/CloudFormation-FF4F8B?style=flat-square&logo=amazonaws&logoColor=white)
![SageMaker](https://img.shields.io/badge/SageMaker-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![Bedrock](https://img.shields.io/badge/Bedrock-FF9900?style=flat-square&logo=amazonaws&logoColor=white)

**Databases**

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?style=flat-square&logo=amazondynamodb&logoColor=white)

**AI / ML & Computer Vision**

![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white)
![HuggingFace](https://img.shields.io/badge/HuggingFace-FFD21E?style=flat-square&logo=huggingface&logoColor=black)
![MLflow](https://img.shields.io/badge/MLflow-0194E2?style=flat-square&logo=mlflow&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)

---

## Research

**ASU IMPACT Lab · Autonomous Systems & Computer Vision**
*Dec 2023 – Aug 2025 · Advisors: Dr. Elena Chavez · Collaboration with UC San Diego*

- Built a multimodal sensor fusion pipeline in **PyTorch** combining **LiDAR** point clouds with egocentric RGB frames; applied **CLIP**-based contrastive pre-training to align spatial and visual embeddings, improving **zero-shot scene classification by 22%** on ASU–UCSD benchmark datasets
- Fine-tuned a **Vision Transformer (ViT-B/16)** for semantic segmentation of physical scenes from egocentric cameras; implemented fisheye distortion correction and **LiDAR-to-camera extrinsic projection** to fuse depth into 2D feature maps — **18% mIoU improvement** over RGB-only baseline
- Developed a **VLM-augmented evaluation harness** using **LLaVA + GPT-4V** to benchmark multi-agent perception pipelines; tracked 3D object detection **mAP**, trajectory **ADE/FDE**, and cross-modal attention across 10K+ driving log frames via **Weights & Biases**

---

## Certifications & Awards

| | |
|---|---|
| 🥇 OpenAI × ASU Pitch Competition — **1st Place** | May 2025 |
| ☁️ AWS Certified Solutions Architect — Associate | Feb 2026 |
| 🔷 Azure Developer Associate (AZ-204) | Dec 2025 |
| ☁️ AWS Certified Cloud Practitioner | May 2025 |
| 💻 Cognizant & AZ Next — Full Stack Developer | Sep 2025 |
| 🎓 Moeur Award — Top 0.4% of ASU graduates | May 2025 |
| 🏅 ASU GSG Teaching Excellence Award | Spring 2026 |
| 🏅 Fulton Schools Outstanding Teaching Assistant Award | 2023–2024 |

---

## GitHub Stats

<div align="center">

![Sathwin's GitHub Stats](https://github-readme-stats.vercel.app/api?username=sathwin&show_icons=true&theme=tokyonight&hide_border=true&count_private=true&include_all_commits=true)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=sathwin&layout=compact&theme=tokyonight&hide_border=true&langs_count=8)

![GitHub Streak](https://streak-stats.demolab.com?user=sathwin&theme=tokyonight&hide_border=true)

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:24243e,50:302b63,100:0f0c29&height=80&section=footer" width="100%"/>

<sub>Full Stack Software Developer @ Cala Health · <a href="mailto:sjulaka7@asu.edu">sjulaka7@asu.edu</a></sub>

</div>
