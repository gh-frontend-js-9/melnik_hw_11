async function login() {

  const email = document.getElementById("email").value;
  const pass = document.getElementById('password').value;

  const data = {
    "password": pass,
    "email": email,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
  };

  let response = await fetch('http://localhost:3000/api/users/login',options);
  const json = await response.json();

  alert("Привет " + json.name);

  fetch('http://localhost:3000/api/users/login', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  window.localStorage.setItem("key", response.headers.get('x-auth-token'));
}
const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  login();
});