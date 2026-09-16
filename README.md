# Faker

A lightweight JavaScript project for generating random user details and mock data using the Faker library. The app is built with Vite and is designed to make it easy to create realistic sample profiles for testing, demos, and front-end prototyping.

## Overview

This project is centered around a "random detail generator" workflow. It uses `@faker-js/faker` to generate realistic values such as names, emails, addresses, phone numbers, and other common profile data.

It also includes support for animation and optional server-side rendering through `gsap`, `express`, and `ejs`, making it suitable for a small full-stack prototype or front-end UI.

## Features

- Generate realistic fake profile data
- Fast development workflow with Vite
- Simple frontend setup for instant testing
- Optional Express + EJS support for server-rendered views
- Lightweight and easy to extend

## Tech Stack

- JavaScript
- Vite
- @faker-js/faker
- GSAP
- Express
- EJS

## Project Structure

```bash
faker/
├── index.html
├── package.json
├── public/
├── src/
│   ├── assets/
│   ├── counter.js
│   ├── main.js
│   └── style.css
├── README.md
└── node_modules/
```

## Installation

```bash
npm install
```

## Run the app

```bash
npm run dev
```

This starts the Vite development server so you can view and test the app in the browser.

## Build for production

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` — runs the local Vite dev server
- `npm run build` — creates a production build
- `npm run preview` — serves the production build locally

## Notes

This project is a good starting point for a fake data generator, random user profile app, or demo data utility. You can expand it by adding custom generation rules, export options, or a backend API for returning generated records.

## License

ISC

## Author

cornelius
