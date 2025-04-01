## News Website - Full Stack

This is a full-stack news website built with React for the frontend and Node.js with PostgreSQL for the backend. The website allows admin users to post news articles, and visitors can browse the latest news.

---

## Frontend (`frontend/`)

### 🚀 Features

- Fetch and display the latest news articles
- Smooth animations with Framer Motion
- Responsive design with Tailwind CSS
- Navigation for different news categories
- Individual news pages for detailed reading
- Authentication for admin users

### 📌 Pages

- **Home Page** – Displays the latest news articles
- **Category Pages** – Shows news filtered by categories
- **News Detail Page** – Displays full article details
- **Search Information Page** – Displays full article details
- **Login Page** – For admin authentication
- **Post News Page** – Admin-only page to create articles

### 🛠 Tech Stack

- React (Frontend framework)
- Tailwind CSS (Styling)
- Framer Motion (Animations)
- Axios (API requests)

### 📦 Installation

```sh
cd frontend
npm install
npm run dev
```

### 🔗 API Connection

Update `.env`:

```env
VITE_API_BASE_URL=https://news-park.onrender.com
```

### 🚀 Deployment

```sh
npm run build
```

---

## Backend (`backend/`)

### 🚀 Features

- Admin authentication with JWT & bcrypt
- CRUD operations for news articles
- Image uploads with Multer
- Categories and comments system

### 🛠 Tech Stack

- Node.js & Express
- PostgreSQL
- Multer (Image uploads)
- Bcrypt & JWT (Authentication)

### 📦 Installation

```sh
cd backend
npm install
```

### 🔗 API Endpoints

- `POST /auth/login` – Admin login
- `POST /news` – Create news (Admin only)
- `GET /news` – Fetch all news
- `POST /upload` – Upload images

- There are other end points i cannot remeber right now

### 🚀 Deployment

```sh
npm start
```

---

## 📄 License

This project is open-source and available under the MIT License.
