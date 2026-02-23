# 📈 AI Stock Prediction Platform

A full-stack machine learning web application that provides real-time stock price forecasting through an API-driven architecture. This project bridges experimental ML workflows with a production-style deployment using Django REST Framework and React.

---

# 🚀 Overview

This platform allows users to request stock predictions through an interactive frontend while a backend ML pipeline handles preprocessing, inference, and response generation. The system is designed with modular architecture to simulate real-world ML deployment practices.

Key Goals:

* Convert research-based ML models into scalable web services
* Provide real-time prediction through REST APIs
* Maintain clean separation between frontend, backend, and ML logic

---

# 🧠 Features

* 📊 Machine Learning based stock prediction
* 🔗 REST API powered prediction system
* ⚡ Real-time frontend to backend communication
* 🧩 Modular backend architecture
* 📈 Dynamic visualization of prediction results
* 🧪 Jupyter notebook experimentation integrated into production workflow

---

# 🏗️ Tech Stack

## Backend

* Python
* Django
* Django REST Framework
* Machine Learning Models

## Frontend

* React.js
* JavaScript
* HTML5 / CSS3

## ML & Data

* NumPy
* Pandas
* Scikit-learn / Deep Learning workflows

---

# ⚙️ System Architecture

Frontend (React)  →  REST API (Django DRF)  →  ML Inference Pipeline  →  Prediction Response

The architecture separates responsibilities into:

* Model Logic Layer
* API Layer
* Data Processing Layer
* User Interface Layer

This structure improves scalability and makes it easy to integrate new ML models without changing frontend logic.

---

# 📂 Project Structure (High Level)

```
stock_prediction/
│
├── backend/        # Django REST API and ML inference
├── frontend/       # React UI
├── notebooks/      # Model experimentation
├── models/         # Saved ML models
└── README.md
```

---

# 🧪 Machine Learning Pipeline

The ML workflow includes:

1. Data preprocessing and feature engineering
2. Model training and evaluation (via notebooks)
3. Model serialization
4. API-based inference for real-time prediction

This design demonstrates transitioning from experimental ML development to production-ready services.

---

# ▶️ Getting Started

## 1️⃣ Clone Repository

```
git clone https://github.com/udaykiranreddyvangala/stock_prediction.git
cd stock_prediction
```

## 2️⃣ Backend Setup

```
cd backend
pip install -r requirements.txt
python manage.py runserver
```

## 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

# 📌 API Workflow

1. User selects stock or inputs parameters from UI
2. Frontend sends POST request to prediction endpoint
3. Backend loads trained model and processes input
4. Prediction returned as JSON response
5. UI renders results dynamically

---

# 🎯 Resume Highlights

* Production-style ML deployment using Django REST + React
* End-to-end inference pipeline from preprocessing to visualization
* Modular architecture supporting scalable AI applications

---

# 🔮 Future Improvements

* Add live stock data integration
* Model performance monitoring
* Authentication & user dashboards
* Cloud deployment (Docker + CI/CD)

---

# 👨‍💻 Author

**Uday Kiran Reddy Vangala**
B.Tech Data Science | NIT Jalandhar
Interested in AI, Machine Learning, and Full-Stack ML Systems

---

# ⭐ If you found this project useful, consider giving it a star!
