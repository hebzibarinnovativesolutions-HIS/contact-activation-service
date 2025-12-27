# HVA Contact Activation Service

!(assets/logo.png)

Instant contacts for outreach testing and integration.

---

## ✨ Overview
The **HVA Contact Activation Service** is a lightweight Node.js microservice that generates outreach-ready contacts instantly.  
It is designed for engineers, testers, and outreach teams who need quick access to sample contacts without manual entry.

---

## 🚀 Quick Start

Clone the repository:
```bash
git clone https://github.com/hebzibarinnovativesolutions-HIS/contact-activation-service.git
cd contact-activation-service
npm install
npm start


git clone https://github.com/hva/contact-activation-service
cd contact-activation-service
npm install
npm start
Access the service:

Code
http://localhost:3000/contacts
🔌 API
GET /contacts
Returns 50 WhatsApp-ready contacts in JSON format.

Example response:

json
[
  {
    "name": "Contact 1",
    "phone": "2348012345678"
  },
  {
    "name": "Contact 2",
    "phone": "2348098765432"
  }
]
🐳 Docker
Build and run with Docker:

bash
docker build -t contact-service .
docker run -p 3000:3000 contact-service
Access at:

Code
http://localhost:3000/contacts
📂 Project Structure
Code
contact-activation-service/
├── index.js          # Main service entry point
├── package.json      # Dependencies and scripts
├── Dockerfile        # Containerization setup
├── README.md         # Documentation
└── assets/logo.png   # Service logo
✨ Features
Instant generation of outreach-ready contacts.

Lightweight Node.js  microservice.

Easy integration for testing and automation pipelines.

Docker-ready for fast deployment.

📜 License
---

✅ This version ensures all shell commands and paths are under `bash` fences, JSON examples under `json`, and the project tree under `bash` for consistent formatting.  
