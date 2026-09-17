# Faker Randomizer

A simple Express app that generates realistic fake user data using Faker.js. Users can choose which fields they want to display with checkboxes, generate a profile, and regenerate it on demand.

## What it does

This app creates random profile data such as:

- full name
- bio
- gender
- job title
- job type
- phone number
- email
- password
- zodiac sign
- username

The user can select the fields they want to show and then click Generate to view only the chosen values.

## Features

- Express server with EJS template rendering
- Random user generation with Faker.js
- Checkbox-driven output selection
- Regenerate button for fresh data
- Responsive dark-themed frontend
- API route for returning JSON user data at `/api/user`

## Tech stack

- Node.js
- Express
- EJS
- Faker.js
- JavaScript

## Project structure

```bash
faker/
├── public/
│   ├── main.js
│   └── styles,.css
├── views/
│   └── index.ejs
├── server.js
├── package.json
├── README.md
└── node_modules/
```

## Installation

```bash
npm install
```

## Run the app

```bash
npm start
```

For development with automatic server restarts:

```bash
npm run dev
```

Then open the app in your browser at:

```bash
http://localhost:3000
```

## How to use it

1. Open the home page.
2. Select the checkboxes for the data you want to show.
3. Click Generate.
4. The page displays only the selected fields.
5. Click Regenerate to fetch a fresh random profile.

## API

The app also exposes a JSON endpoint:

```bash
GET /api/user
```

This returns a new fake user object such as:

```json
{
  "name": "John Smith",
  "bio": "teacher",
  "gender": "Male",
  "jobtitle": "Product Designer",
  "jobtype": "Manager",
  "phone": "1-234-567-8901",
  "email": "john.smith@example.com",
  "password": "A1b2C3d4!",
  "zodic": "Leo",
  "username": "johnsmith77"
}
```

## Developer

Built by Cornelius.

## Deployment

Vercel routes every request to `server.js` through `vercel.json`. Express is the only application server in both local production mode and deployment; Vite is not required.

## License

ISC
