# Mini Music Distribution Dashboard

A **white-label music distribution dashboard** built with **Next.js** and **React**. This project demonstrates dynamic routing, API integration, state management, and responsive UI design. Users can login, view tracks, upload new tracks, and see track details.

---

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Approach](#approach)
- [Future Improvements](#future-improvements)

---

## Demo

- Login with any username and password (mock authentication)
- Dashboard listing tracks
- Upload a new track
- View details of a selected track
- Responsive design for mobile, tablet, and desktop

---

## Features

### ✅ Core Features
- **Login Page**: Mock authentication with username and password.
- **Dashboard**: Displays a list of uploaded tracks in a table.
- **Track Upload**: Form to add new tracks (Track Title, Artist, Release Date, Genre).
- **Track Details Page**: Dynamic routing `/dashboard/track/[id]` showing selected track details.
- **Next.js API Routes**: `/api/tracks` serves mock track data.

### ✨ Bonus Features
- Theme switcher (Light/Dark Mode) with localStorage persistence
- Search and filter tracks by status (`Published` or `Draft`)
- Responsive and mobile-friendly UI

---

## Tech Stack

- **Next.js** (Latest stable version)
- **React Functional Components & Hooks** (`useState`, `useEffect`)
- **SCSS/SASS** for styling
- **Next.js API Routes** for mock backend
- **LocalStorage** for theme/session persistence
- **Responsive Design** with CSS Flexbox/Grid

---

## Getting Started

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <project-folder>
```
2.Install dependencies

npm install
# or
yarn
# or
pnpm install

3. Run the Server

npm run dev
# or
yarn dev
# or
pnpm dev


