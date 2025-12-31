# Appscrip Task – Product Listing Page by Manvendra Hati

This project is a responsive Product Listing Page (PLP) built as part of the Appscrip frontend assignment.

## 🔧 Tech Stack
- Next.js (React)
- Plain CSS (no UI frameworks)
- Server Side Rendering (SSR)
- Mock API: https://fakestoreapi.com/

## ✨ Features
- Server-side rendered product listing
- Responsive layout for desktop, tablet, and mobile
- Centered logo header with right-aligned action icons
- Collapsible filter sidebar (closed by default on refresh)
- Accordion-style filters matching Figma design
- SEO-friendly structure (semantic HTML, meta tags)
- Minimal DOM and no external JS/UI libraries

## 🧠 SSR Implementation
Products are fetched using `getServerSideProps`, ensuring the page is rendered on the server for better SEO and performance.

## 📱 Responsiveness
- Desktop: Grid-based product layout with sidebar filters
- Mobile: Optimized spacing and layout without layout shifts

## 🚀 Deployment
The project is deployed on Netlify and is publicly accessible.

## 📦 Setup Instructions
```bash
npm install
npm run dev
