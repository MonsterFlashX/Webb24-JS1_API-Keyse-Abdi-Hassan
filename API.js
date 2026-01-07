const button = document.getElementById('fetchBtn');
const output = document.getElementById('output');

button.addEventListener('click', fetchUser);

async function fetchUser() {
  output.innerHTML = "";

  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];

    const img = document.createElement("img");
    img.src = user.picture.large;

    const name = document.createElement("p");
    name.textContent = `Name: ${user.name.first} ${user.name.last}`;

    const gender = document.createElement("p");
    gender.textContent = `Gender: ${user.gender}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${user.email}`;

    const phone = document.createElement("p");
    phone.textContent = `Phone: ${user.phone}`;

    output.append(img, name, gender, email, phone);

  } catch (error) {
    console.error("Fel vid hämtning av data:", error);
  }
}
