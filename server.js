import express from "express";
import { faker } from "@faker-js/faker";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

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

app.listen(port, () => {
  console.log(`faker app is listening on http://localhost:${port}`);
});