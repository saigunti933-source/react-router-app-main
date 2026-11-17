
# React Router App Main

A React application demonstrating client-side navigation using React Router.

## Features

- Home Page
- Contact Page
- Students Page
- Student Details Page
- Navigation without page refresh
- Dynamic routing using URL parameters
- Student information display

## Technologies Used

- React.js
- JavaScript
- HTML
- CSS
- React Router DOM
- Vite

## Project Structure

```text
react-router-app-main/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Contact.jsx
│   │   ├── Students.jsx
│   │   └── StudentDetails.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Installation

```bash
npm install
```

## Run Application

```bash
npm run dev
```

## Run ESLint

```bash
npm run lint
```

## Production Build

```bash
npm run build
```

## Routes

| Path | Page |
|---|---|
| / | Home |
| /contact | Contact |
| /students | Students |
| /details/1 | Student Details |

## Deployment

Platform: Render

Service: Static Site

Build Command:

```bash
npm install && npm run build
```

Publish Directory:

```text
dist
```
