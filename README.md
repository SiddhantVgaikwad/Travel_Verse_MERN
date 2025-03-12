# TravelVerse 🌍🗺️

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-brightgreen)](https://mern.dev)
[![JWT Auth](https://img.shields.io/badge/Security-JWT%20Auth-orange)](https://jwt.io)

A full-featured travel platform offering secure bookings, personalized experiences, and comprehensive tour management.

**Live Demo:** [Explore Now](#) <!-- Add your live URL here -->

![TravelVerse Interface](client/public/showcase.gif) <!-- Add your showcase GIF -->

## 🔥 Key Features

### **Authentication & Security**
- 🔐 **JWT-based User Authentication**
- 🌐 **Google OAuth 2.0 Integration**
- ✉️ **Email Verification System**
- 🔄 **Password Reset & Recovery**
- 🛡️ **Role-Based Authorization** (User/Admin)

### **User Experience**
- 🌓 **Dark/Light Theme Toggle**
- 🎯 **Personalized Tour Recommendations**
- 🔍 **Advanced Search Filters**:
  - Country/Region
  - Price Range
  - Duration
  - Interest Tags (Adventure, Cultural, etc.)
  - Rating Threshold
- ⭐ **Interactive Rating & Review System**
- 📅 **Real-Time Availability Calendar**

### **Booking System**
- 💳 **Secure Payment Integration** (Stripe/Razorpay)
- 📧 **Booking Confirmation Emails**
- 📦 **Booking History & Management**
- 🚨 **Last-Minute Deal Alerts**

### **Tour Management**
- 📸 **Rich Tour Details** with 360° Virtual Tours
- 📍 **Interactive Location Maps** (Google Maps API)
- 📊 **Tour Analytics Dashboard**
- 📝 **Dynamic Itinerary Planner**

## 🛠 Tech Stack

### **Frontend**
- React.js with Hooks & Context API
- Redux Toolkit for State Management
- Axios for API Communication
- React Router v6
- Lottie Animations
- Tailwind CSS + Dark Mode

### **Backend**
- Node.js & Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Passport.js (Google OAuth)
- Nodemailer (Email Service)
- Cloudinary (Media Storage)

### **Services**
- SendGrid/Mailgun Email Service
- MongoDB Atlas (Cloud Database)
- Render/Vercel (Cloud Hosting)

### **Advanced Search Architecture**

Elasticsearch-powered Query Engine

GeoJSON-based Location Filtering

Tag-based Recommendation System

Cached Search Results

Review System
5-Star Rating with Half-Star Support

Verified Purchaser Reviews

Admin Moderation Panel

Review Analytics Dashboard

## **🚀 Getting Started**
Prerequisites
Node.js v18+

MongoDB Atlas Cluster

Google OAuth Credentials

Cloudinary Account

## **Installation**
1. Clone repo:
git clone https://github.com/SiddhantVgaikwad/Travel_Verse_MERN.git

2.Configure environment (.env):
# Server
MONGO_URI=mongodb+srv://...
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=cloudinary://...
GOOGLE_CLIENT_ID=your_google_id
MAIL_USER=your_email@service.com

3.Install & Run: cd client && npm install && npm start
cd ../server && npm install && npm run dev

## **📸 Feature Showcase **

Contribute
Fork the repository

Create feature branch:

git checkout -b feat/your-feature
Commit changes:

git commit -m 'feat: add amazing feature'
Push & Create PR

📄 License
MIT © Siddhant Gaikwad

Crafted with ❤️ by Siddhant Gaikwad | Full Stack Developer





