import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { faker } from "@faker-js/faker";

// Create the Express application.
const app = express();
const PORT = process.env.PORT || 3000;

// Fix __dirname in ES modules so we can point to views and public folders.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tell Express to use EJS as the template engine.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, images, JS) from the public folder.
app.use(express.static(path.join(__dirname, "public")));

// Create a richer fake profile object to pass into the frontend.
const createProfile = () => {
  const seed = faker.string.uuid();

  return {
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    company: faker.company.name(),
    city: faker.location.city(),
    phone: faker.phone.number(),
    jobTitle: faker.person.jobTitle(),
    address: `${faker.location.streetAddress()}, ${faker.location.city()}`,
    imageUrl: `https://picsum.photos/seed/${seed}/900/700`,
    accent: faker.color.rgb({ format: "css" }),
  };
};

// Home route: generate a fake profile and pass it to the EJS template.
app.get("/", (req, res) => {
  const profile = createProfile();

  res.render("index", {
    profile,
    useCases: [
      "UI mockups",
      "Testing forms",
      "Seed data for demos",
      "Product prototypes",
    ],
  });
});

// Start the server.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});