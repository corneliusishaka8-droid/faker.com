const regenerate = document.getElementById("regenerate");
const generateButton = document.getElementById("generate");
const results = document.getElementById("div-class");

const fieldMap = {
  fullname: "name",
  bio: "bio",
  gender: "gender",
  email: "email",
  jobtype: "jobtype",
  jobtitle: "jobtitle",
  phone: "phone",
  usernaame: "username",
  zodic: "zodic",
  password: "password",
};

const renderSelectedFields = () => {
  const selectedEntries = Object.entries(fieldMap).filter(([checkboxId]) => {
    const checkbox = document.getElementById(checkboxId);
    return checkbox && checkbox.checked;
  });

  results.innerHTML = "";

  if (!selectedEntries.length) {
    results.hidden = true;
    return;
  }

  selectedEntries.forEach(([checkboxId, userKey]) => {
    const label = checkboxId === "usernaame" ? "username" : checkboxId;
    const value = window.user?.[userKey] ?? "N/A";
    results.innerHTML += `<span>${label}: ${value}</span>`;
  });

  results.hidden = false;
  results.style.display = "grid";
  regenerate.style.display = "inline-block";
};

const loadNewUser = async () => {
  const response = await fetch("/api/user");
  const user = await response.json();
  window.user = user;
  renderSelectedFields();
};

results.hidden = true;
regenerate.style.display = "none";

generateButton.addEventListener("click", renderSelectedFields);
regenerate.addEventListener("click", loadNewUser);