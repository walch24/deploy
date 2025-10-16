// Cargar estado de sesión
window.onload = function () {
   const currentUser = localStorage.getItem("currentUser");
   if (currentUser) {
      showApp(currentUser);
   }
};

function toggleForm() {
   const loginForm = document.getElementById("login-form");
   const registerForm = document.getElementById("register-form");
   const title = document.getElementById("form-title");

   if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
      registerForm.style.display = "none";
      title.textContent = "Iniciar Sesión";
   } else {
      loginForm.style.display = "none";
      registerForm.style.display = "block";
      title.textContent = "Registrarse";
   }
}

function register() {
   const username = document.getElementById("register-username").value.trim();
   const password = document.getElementById("register-password").value;

   if (!username || !password) {
      alert("Por favor, completa todos los campos.");
      return;
   }

   if (localStorage.getItem(username)) {
      alert("Este usuario ya existe.");
      return;
   }

   localStorage.setItem(username, password);
   alert("Usuario registrado correctamente.");
   toggleForm();
}

function login() {
   const username = document.getElementById("login-username").value.trim();
   const password = document.getElementById("login-password").value;

   const storedPassword = localStorage.getItem(username);

   if (storedPassword && storedPassword === password) {
      localStorage.setItem("currentUser", username);
      showApp(username);
   } else {
      alert("Usuario o contraseña incorrectos.");
   }
}

function showApp(username) {
   document.getElementById("auth-container").style.display = "none";
   document.getElementById("app").style.display = "block";
   document.getElementById("navbar-username").textContent = username;
}

function logout() {
   localStorage.removeItem("currentUser");
   document.getElementById("app").style.display = "none";
   document.getElementById("auth-container").style.display = "block";
   document.getElementById("form-title").textContent = "Iniciar Sesión";
}

function showSection(sectionId) {
   document.querySelectorAll(".content").forEach(sec => sec.classList.remove("active-section"));
   document.getElementById(sectionId).classList.add("active-section");
}

function areaCuadrado(lado) {
    return lado * lado
}
function perimetroCuadrado(lado) {
    return 4 * lado
}
function Cuadrado() {
    let ladoV = parseFloat(document.getElementById("ladoC").value);

    let areaC = areaCuadrado(ladoV);
    document.getElementById("areaC").innerHTML = areaC;

    let perimetroC = perimetroCuadrado(ladoV);
    document.getElementById("perimetroC").innerHTML = perimetroC;

    }