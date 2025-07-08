# IP Address Tracker 🌐

This is a responsive IP Address Tracker application that allows users to search for any IP address or domain name and receive location details including the IP, city, region, timezone, ISP, and a map view.

Built with React and Leaflet, styled with custom CSS, and powered by the IP-API for location data.

## 🔍 Features

- IP or domain lookup
- Displays:
  - IP Address
  - City & Region
  - Timezone (UTC offset)
  - Internet Service Provider
- Interactive map with marker using Leaflet
- Responsive layout (mobile + desktop)
- Search with input validation and error handling

## 🛠️ Technologies Used

- React
- Vite
- Leaflet (OpenStreetMap)
- IP-API (https://ip-api.com/)
- CSS3 / Media Queries
- React Hooks (useState, useEffect)

## 🚀 Getting Started

To run this app locally

git clone https://github.com/yourusername/ip-address-tracker.git
cd ip-address-tracker
npm install
npm run dev
Then open http://localhost:5173 in your browser.

## 🗺️ API Used
IP-API: Simple, no-auth API to get IP geolocation.

Endpoint example: http://ip-api.com/json/8.8.8.8

## Folder Structure
php
Copy
Edit
src/
├── assets/               # Icons and images
├── components/           # React components
│   ├── SearchBar.jsx
│   ├── IPDetails.jsx
│   └── MapView.jsx
├── styles/               # CSS modules
├── App.jsx               # Main app logic
├── main.jsx              # Entry point
├── index.css             # Global styles
public/
└── images/               # Reference design files only

## Reflection
Most challenging part:
Integrating Leaflet map tiles dynamically with marker positioning based on API data required careful handling of async data and proper coordinate formatting.

Design decision:
Kept all major UI state in the App component to allow consistent data sharing between SearchBar, IPDetails, and MapView. Used minimal dependencies to retain full control over styling and responsiveness.

