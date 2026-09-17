import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { faker } from "@faker-js/faker";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const generateUser = () => ({
  name: faker.person.fullName(),
  bio: faker.person.bio(),
  gender: faker.person.gender(),
  jobtitle: faker.person.jobTitle(),
  jobtype: faker.person.jobType(),
  phone: faker.phone.number(),
  email: faker.internet.exampleEmail(),
  password: faker.internet.password(),
  zodic: faker.person.zodiacSign(),
  username: faker.internet.username(),
});

app.get("/", (req, res) => {
  const user = generateUser();
  res.render("index", { user });
});

app.get("/api/user", (req, res) => {
  const user = generateUser();
  res.json(user);
});

if (process.env.VERCEL !== "1") {
  app.listen(port, () => {
    console.log(`faker app is listening on http://localhost:${port}`);
  });
}

export default app;