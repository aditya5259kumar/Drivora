# 🚗 Drivora – Driving School Website

**Drivora** is a modern, responsive, and multi-page website designed for a driving school. It provides an engaging user experience across all devices and offers features like theme switching, animated scroll effects, and a filterable gallery.

---

## 🌐 Live Demo

🔗 [Live Demo](https://aditya5259kumar.github.io/Drivora/)

---

## 📸 Preview

<img width="1790" height="853" alt="image" src="https://github.com/user-attachments/assets/dedf44f8-dee1-4820-b903-e7996ec321d6" />


## 🌟 Features

- ✅ **Multi-Page Navigation** with Tabs
- ✅ **Responsive Design** for all screen sizes (Mobile, Tablet, Desktop)
- ✅ **Dark & Light Theme Switcher** (Remembers user preference on next visit)
- ✅ **Scroll Animations** using AOS (Animate On Scroll)
- ✅ **Filterable Gallery** using MixItUp.js
- ✅ **Modern Swiper Slider** integration for carousels
- ✅ **Clean Code Structure** and folder organization

---

## 🛠️ Tech Stack

| Technology | Use |
|------------|-----|
| **HTML5**  | Structure of pages |
| **CSS3**   | Styling and layout |
| **JavaScript (ES6)** | Interactivity and DOM manipulation |
| **SwiperJS** | Responsive sliders |
| **AOS (Animate On Scroll)** | Scroll animations |
| **MixItUpJS** | Gallery filtering |
| **LocalStorage** | Persisting theme preference |

---

## 📁 Project Structure

```bash
Drivora/
│
├── index.html             # Main landing page
├── index.css              # Base styles for the homepage
├── style.css              # Global styles
├── index.js               # Main JS logic
├── script.js              # Additional JS functionality
│
├── about us/              # About Us page files
│   ├── about-us.html      # About page
│   └── about-us.css       # About page styles
│
├── contact/               # Contact page files
│   ├── contacts.html      # Contact form and info
│   └── contacts.css       # Contact page styles
│
├── FAQs/                  # Frequently Asked Questions section
│   ├── faqs.html          # FAQ content
│   ├── faqs.css           # FAQ styles
│   └── faqs.js            # Toggle functionality
│
├── gallery/               # Gallery section with MixItUp
│   ├── gallery.html       # Gallery markup
│   ├── gallery.css        # Gallery styles
│   └── gallery.js         # Filtering logic using MixItUp
│
├── programs/              # Driving programs offered
│   ├── programs.html      # Programs info
│   ├── programs.css       # Program page styles
│   └── program.js         # Program-specific JS
│
└── assets/                # Images and other static assets
    └── screenshots/
        └── home.png       # Homepage screenshot
