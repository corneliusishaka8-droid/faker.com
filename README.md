# Faker Studio

Faker Studio is a polished mock-data generator built with Express, EJS, and Faker. It creates realistic user profiles, including names, contact information, company details, and random image URLs for mockups, demos, and UI testing.

## Overview

This project is designed for developers who need realistic sample content without manually creating placeholder data. The page generates a new profile on each visit and presents it in a clean, animated layout.

## Features

- Realistic fake profile generation with Faker
- Random image generation using Picsum
- Modern animated frontend with GSAP
- Scroll-triggered section reveals
- Split-text typography animations
- Clear documentation and usage notes in the landing page footer

## Tech Stack

- JavaScript
- Node.js
- Express
- EJS
- Faker
- GSAP
- ScrollTrigger
- SplitText

## Project Structure

```bash
faker/
├── public/
│   ├── script.js
│   └── style.css
├── views/
│   └── index.ejs
├── server.js
├── package.json
├── README.md
├── index.html
└── src/
```

## Installation

```bash
npm install
```

## Run the app

```bash
npm run start
```

Then open:

```bash
http://localhost:3000
```

## Development and preview

```bash
npm run dev
```

Use this if you want to run the Vite development workflow for front-end work.

## How to use

1. Start the server with `npm run start`.
2. Open the home page in your browser.
3. Review the generated profile card and data list.
4. Use the fields for demos, forms, mockups, or test data.
5. Refresh the page to generate a new random profile and image.

## Example output

- Full name
- Email address
- Company name
- City and address
- Phone number
- Random image

## License

ISC

## Author

cornelius
