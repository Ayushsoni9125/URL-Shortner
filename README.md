# 🔗 URL Shortener Backend

A simple and efficient **URL Shortener backend** built using **Node.js**, **Express**, and **MongoDB**.  
It allows users to generate short URLs, redirect to original URLs, and track visit analytics.

---

## 🚀 Features

- Generate short URLs using `nanoid`
- Redirect short URLs to original URLs
- Track visit history (analytics)
- RESTful API design
- MongoDB database with Mongoose
- Clean project structure

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **nanoid**

---

## 📁 Project Structure

```text
URL-Shortner/
│
├── controllers/
│   └── url.js
├── models/
│   └── url.js
├── routes/
│   └── url.js
├── connect.js
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
⚙️ Setup & Installation
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/Ayushsoni9125/REPO_NAME.git
cd REPO_NAME
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Configure environment variables
Create a .env file:

env
Copy code
MONGODB_URL=your_mongodb_connection_string
PORT=8000
4️⃣ Start the server
bash
Copy code
npm start
Server will run at:

arduino
Copy code
http://localhost:8000
📌 API Endpoints
🔹 Generate Short URL
POST

bash
Copy code
/url
Body

json
Copy code
{
  "url": "https://example.com"
}
Response

json
Copy code
{
  "id": "abcd1234"
}
🔹 Redirect to Original URL
GET

makefile
Copy code
/:shortId
🔹 Get URL Analytics
GET

bash
Copy code
/analytics/:shortId
Response

json
Copy code
{
  "totalClicks": 5,
  "analytics": [
    { "timestamp": 1700000000000 }
  ]
}
🧠 Future Improvements
User authentication

Custom short URLs

Expiry for URLs

Frontend UI

Rate limiting

👤 Author
Ayush Soni
GitHub: Ayushsoni9125
