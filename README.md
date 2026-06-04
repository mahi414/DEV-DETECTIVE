# 🔍 Dev Detective

Dev Detective is a simple and responsive web application that allows users to search and view GitHub profiles by username. It fetches real-time data using the GitHub API and displays key profile information in a clean UI.

---

## 🚀 Features

- Search GitHub users by username
- View profile details like:
  - Avatar
  - Name
  - Username
  - Bio
  - Followers & Following
  - Public Repositories
  - Location & Company (if available)
- Direct link to GitHub profile
- Responsive UI (mobile + desktop)
- Dark/Light mode support (if implemented)

---

## 🛠️ Tech Stack

- HTML
- CSS / Tailwind CSS
- JavaScript (Vanilla JS)
- GitHub REST API

---

## 📸 Demo

🔗 Live Demo: https://your-live-link.com  
(Replace with your Vercel/Netlify link)

---

## 📂 Project Structure

dev-detective/
│── index.html
│── style.css
│── script.js
│── assets/
│── README.md

---

## ⚙️ How It Works

1. User enters a GitHub username  
2. App sends request to GitHub API  
   https://api.github.com/users/{username}  
3. Receives JSON response  
4. Dynamically updates UI with profile data  

---

## 🧠 API Reference

GitHub Users API:  
https://api.github.com/users/{username}

---

## 📦 Setup & Installation

# Clone the repository
git clone https://github.com/your-username/dev-detective.git

# Open folder
cd dev-detective

# Open index.html in browser

---

## ✨ Future Improvements

- Add search history
- Show repositories list
- Add loading skeleton UI
- Improve error handling
- Add animations for smoother UX

---

## 👨‍💻 Author

Made with ❤️ by Your Name

---

## 📄 License

This project is open-source and available under the MIT License.
