document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  // 🔑 CHANGE YOUR USERNAME & PASSWORD HERE
  const ADMIN_USER = "admin";
  const ADMIN_PASS = "1234";

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    localStorage.setItem("isAdmin", "true");
    window.location.href = "admin.html";
  } else {
    error.textContent = "Invalid username or password!";
  }
});
