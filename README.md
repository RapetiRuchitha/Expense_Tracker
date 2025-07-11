# 💸 Expense Tracker Web App

A sleek, responsive and user-authenticated **Expense Tracker** built using **Node.js, Express, MongoDB**, and vanilla **HTML/CSS/JavaScript**.  
This application helps users seamlessly **log, view, filter, and analyze** their daily expenses with a clean dashboard experience.

---

## 🚀 Why This Project?

This project showcases **full-stack development skills**, API integration, user authentication, chart visualization, and frontend/backend coordination — designed specifically to reflect strong hands-on capability in a **real-world use-case**. Perfect for interview demonstrations.

---

## ✨ Key Features

- ✅ User registration & secure login (JWT-based auth)
- ✅ Add, delete, and manage expenses
- ✅ Live monthly bar chart using **Chart.js**
- ✅ Filter expenses by **category**, **search text**, and **date range**
- ✅ Export your expenses as **CSV**
- ✅ Fully **responsive** design (mobile/tablet/desktop)
- ✅ Built using **pure HTML, CSS, JS** (no frontend framework!)

---

## 🛠️ Tech Stack

| Layer         | Technology                  |
|--------------|-----------------------------|
| Frontend     | HTML, CSS, JavaScript       |
| Backend      | Node.js, Express.js         |
| Database     | MongoDB + Mongoose          |
| Auth         | JWT (JSON Web Tokens)       |
| Charting     | Chart.js                    |

---

## 📁 Folder Structure

expense-tracker-full/
│
├── frontend/
│ ├── index.html
│ ├── login.html
│ ├── register.html
│ ├── style.css
│ └── script.js
│
├── backend/
│ ├── models/
│ │ ├── Expense.js
│ │ └── User.js
│ ├── routes/
│ │ ├── auth.js
│ │ └── expenses.js
│ ├── server.js
│ └── .env
│
└── README.md



## 🔐 Authentication Flow

- Users must register/login
- Auth token is stored in `localStorage`
- All protected routes (like expense APIs) require a Bearer token

---

## 📊 Visualization

Expenses are automatically grouped **monthly** and visualized using a clean bar chart.
- Responsive, fixed-size chart container
- Updates with filters in real-time

---

## 📤 Export to CSV

Download your entire expense table in `.csv` format using a single button — enabling portability and record-keeping.

---

## 🔍 Smart Filtering

- **Category Filter** (Food, Travel, etc.)
- **Date Filter** (from-to range)
- **Live Search** (description/category match)

---

## 🎯 How to Run

### 📦 Backend
```bash
cd backend
npm install
node server.js

🌐 Frontend
Open index.html directly in your browser or serve it using VSCode Live Server.