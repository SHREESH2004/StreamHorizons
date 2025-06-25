
<h1 align="center">🚀 StreamHorizon</h1>
<p align="center">
  <em>The future of video streaming — redefined by MERN.</em><br/>
  Upload. Stream. Engage. Repeat.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/MERN%20Stack-Full--Power-blueviolet?style=flat-square" />
  <img src="https://img.shields.io/badge/Streaming-Live%20and%20On-Demand-ff69b4?style=flat-square" />
  <img src="https://img.shields.io/badge/UI-Stylish%20AF-ec4899?style=flat-square" />
</p>

---

## 🎬 What is StreamHorizon?

**StreamHorizon** is a sleek and scalable video streaming platform built on the **MERN stack** (MongoDB, Express.js, React.js, Node.js). Think **YouTube meets minimalism** — users can upload videos, watch content in HD, interact with creators, and explore trending content with lightning-fast performance.

Whether you're a content creator, binge-watcher, or just love beautiful code — **StreamHorizon delivers.**

---

## ✨ Features

- 🎥 **Video Uploading** — MP4, WebM supported with real-time progress
- ⚡ **Seamless Streaming** — Adaptive playback with low-latency delivery
- ❤️ **Like & Comment System** — Engage with videos & creators
- 🔍 **Advanced Search & Tags** — Discover trending and related content
- 🧑‍🚀 **User Profiles & Auth** — Sign up, sign in, customize your profile
- 🧠 **Smart Backend** — Optimized API with JWT auth and Mongo aggregation
- 💅 **Sexy UI** — Styled with Tailwind CSS for clean, modern visuals
- 📱 **Responsive** — Works flawlessly on desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Layer       | Tech                       |
|------------|----------------------------|
| 💻 Frontend | React.js, Tailwind CSS     |
| 🔌 Backend  | Node.js, Express.js        |
| 🧠 Database | MongoDB + Mongoose         |
| 🔐 Auth     | JWT + bcrypt               |
| ☁️ Storage  | Cloudinary / AWS S3        |
| 🎞️ Video   | HTML5 Video, ffmpeg        |

---

## 📦 Installation

### 🔧 Prerequisites

- Node.js (v14+)
- MongoDB
- Cloudinary (or S3) account
- ffmpeg (optional, for compression)

### ⚙️ Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/streamhorizon.git
cd streamhorizon

# Install backend dependencies
cd backend
npm install

# Configure environment variables
cp .env.example .env

# Start backend server
npm run dev
````

```bash
# Open new terminal & install frontend dependencies
cd frontend
npm install

# Start React app
npm start
```

---

## 🌐 Environment Variables

Create a `.env` file in `/backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 📂 Project Structure

```
streamhorizon/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.js
└── README.md
```

---

## 🧪 Features In Progress

* 📝 Video descriptions with Markdown
* ⏱️ Watch history & resume playback
* 💬 Real-time chat during livestream
* 🧠 AI-based video recommendations
* 💸 Creator monetization & donations

---

## 🎥 Sneak Peek

<p align="center">
  <img src="https://your-screenshot-link.com/stream-ui.png" width="700" alt="StreamHorizon UI Preview" />
</p>

---

## 🤝 Contributing

We love contributors! 🖤

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'feat: add cool feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

---

## 📜 License

Licensed under the MIT License. See `LICENSE` for details.
