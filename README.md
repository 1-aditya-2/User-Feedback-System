# 🌟 User Feedback System — WOW Version

A premium-level **User Feedback System** built using **React.js**, **Node.js/Express.js**, **MongoDB**, and **Material UI**, designed with stunning animations, beautiful UI, and an amazing user experience.

---

## ✨ Features

-   🎯 Submit feedback easily with categories (Suggestion, Bug Report, Feature Request)
-   🎨 Stunning animated gradient background
-   🧊 Glassmorphism (frosted glass) effect on feedback cards
-   📈 Sort feedbacks by **Newest** or **Oldest**
-   🔍 Dynamic filters using clickable **Chips** (Name / Email / Category)
-   🎥 Smooth page and component animations (Framer Motion)
-   🔔 Toast notifications for feedback submission
-   📱 Fully responsive (mobile + desktop)

---

## 🛠 Tech Stack

| Layer     | Tech                                             |
| :-------- | :----------------------------------------------- |
| Frontend  | React.js, Material UI, Axios, Framer Motion, Toastify |
| Backend   | Node.js, Express.js                             |
| Database  | MongoDB (with Mongoose)                          |

---

## 🚀 Getting Started

Follow these steps to run the project locally.

---

### 📦 Backend Setup

1.  **Go to backend folder**

    ```bash
    cd client
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Create .env file**

    ```bash
    PORT=5000
    MONGO_URI=mongodb+srv://meadisingh1209:tAikrMFKWg78twnD@feedback.6ukikqp.mongodb.net/?retryWrites=true&w=majority&appName=Feedback
    (Used free account of Mongobd atlas - can use for setting up mongodb, if you don't have)
    ```

4.  **Run backend server**

    ```bash
    npm start
    ```

    (Server will start at http://localhost:5000)

### 📦 Frontend Setup

1.  **Go to frontend folder**

    ```bash
    cd client
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Start frontend server**

    ```bash
    npm start
    ```

    (Client will start at http://localhost:3000)

---

## 🔥 Pages Overview

| Page         | Description                                        |
| :----------- | :------------------------------------------------- |
| / (Home)     | Submit Feedback Form with animated hero section     |
| /dashboard   | Feedback Dashboard with filters and sorting        |

---

## 📋 Available Scripts

| Script             | Description                              |
| :----------------- | :--------------------------------------- |
| npm start (backend)   | Starts Express server using Nodemon       |
| npm start (frontend) | Runs React app on development server    |

---

## 🎨 UI Preview

![image](https://github.com/user-attachments/assets/6434bcfd-19e8-45ec-b135-1fa12fd02a06)

![image](https://github.com/user-attachments/assets/290a1593-57d7-4369-8987-93ad50019f07)


---

## 🌐 API Endpoints

| Method | Endpoint    | Purpose                      |
| :----- | :---------- | :--------------------------- |
| POST   | /feedback   | Submit new user feedback     |
| GET    | /feedback   | Fetch all feedbacks         |

---
