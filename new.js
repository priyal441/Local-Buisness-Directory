document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email && password) {
      // Normally, you'd send this data to a server to authenticate
      console.log("Login Successful!");
      alert("Welcome back! Redirecting to the homepage...");

      // Redirect to the main business directory page
      window.location.href = "index.html";
  } else {
      alert("Please fill in both fields.");
  }
});
