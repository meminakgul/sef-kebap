# Şef Kebap — Restaurant Website

Dark elegant multi-page React (Vite) website for **Şef Kebap**, a traditional Turkish kebab restaurant in Adana.

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
cd sef-kebap
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## 📦 Generate ZIP

To zip the entire project (excluding `node_modules`, `.git`, `dist`):

```bash
# Install archiver (one-time)
npm install --save-dev archiver

# Create zip
node zip-project.js
```

This creates `sef-kebap.zip` in the project root.

---

## 📁 Project Structure

```
sef-kebap/
├── index.html
├── package.json
├── vite.config.js
├── zip-project.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── Menu.jsx
    │   ├── About.jsx
    │   ├── Gallery.jsx
    │   └── Contact.jsx
    └── styles/
        ├── global.css
        ├── Navbar.css
        ├── Footer.css
        ├── Home.css
        ├── Menu.css
        ├── About.css
        ├── Gallery.css
        └── Contact.css
```

---

## 📄 Pages & Routes

| Route           | Page         |
|-----------------|--------------|
| `/`             | Ana Sayfa    |
| `/menu`         | Menü         |
| `/hakkimizda`   | Hakkımızda   |
| `/galeri`       | Galeri       |
| `/iletisim`     | İletişim     |

---

## 🎨 Design System

- **Font Display:** Playfair Display (headings)
- **Font Body:** Crimson Pro (body text)
- **Font UI:** Bebas Neue (labels, nav)
- **Primary:** `#c9a84c` (gold)
- **Accent:** `#b03a2e` (red)
- **Background:** `#0a0806` (near-black)

---

## 📞 Restaurant Info

- **Phone:** (0322) 226 00 11
- **Address:** Yenibaraj, Seyhan / Adana
- **Instagram:** [@sefkebap](https://www.instagram.com/sefkebap/)
