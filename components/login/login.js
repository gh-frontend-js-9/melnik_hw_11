async function login() {

  const email = document.getElementById("email").value;
  const pass = document.getElementById('password').value;

  const data = {
    "password": pass,
    "email": email,
  };
  console.log(data);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
  };
  let response = await fetch('http://localhost:3000/api/users/login',options);
  const json = await response.json();
  console.log(json);
}
const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  login();
});