document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevents the form from submitting and page refresh

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Simple validation (you can improve this by adding more complex checks)
  if (email && password) {
      console.log("Login Successful!");
      alert("Login Successful! Redirecting to the homepage...");

      // Redirect to the main business directory page
      window.location.href = "index.html";  // Change the URL to your homepage
  } else {
      alert("Please fill in both fields.");
  }
});


// Function to add active class to the current section in navigation
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav ul li a");

  // Add active class to the current section
  navLinks.forEach(link => {
      link.addEventListener("click", function() {
          // Remove active class from all links
          navLinks.forEach(link => link.classList.remove("active"));
          // Add active class to the clicked link
          this.classList.add("active");
      });
  });

  // Scroll behavior for smooth scrolling (optional, for better user experience)
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          window.scrollTo({
              top: target.offsetTop,
              behavior: "smooth"
          });
      });
  });
});
