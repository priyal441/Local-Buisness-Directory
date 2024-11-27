const businesses = [
    { name: "Sharma Sweets", category: "Restaurant", address: "Near Main Market", rating: 4.5, image: "sharma sweet.webp" },
    { name: "Aggarwal Book Depot", category: "Book Store", address: "Station Road", rating: 4.2, image: "agraval.jpeg" },
    { name: "Gupta Electronics", category: "Electronics", address: "City Center", rating: 4.0, image: "gupta image.jpeg" },
    { name: "Elite Fitness Gym", category: "Gym", address: "Sector 5, Block C", rating: 4.9, image: "elite.jpeg" },
    { name: "Fresh Veggie Mart", category: "Vegetable Shop", address: "Market Lane", rating: 4.7, image: "veggi.jpg" },
    { name: "The Baker's Hub", category: "Bakery", address: "Central Street", rating: 4.8, image: "bakers.jpg" },
    { name: "Modern Hair Studio", category: "Salon", address: "Green Avenue", rating: 4.6, image: "hair.jpg" },
    { name: "Urban Cafe", category: "Cafe", address: "City Square Mall", rating: 4.3, image: "urban.jpg" },
    { name: "Quick Print Solutions", category: "Printing Services", address: "Business Park", rating: 4.2,image:"quick.jpg" },
    { name: "Dream Interiors", category: "Furniture Store", address: "Design District", rating: 4.3, image: "dream.jpg" },
    { name: "SuperMart Grocery", category: "Supermarket", address: "Block A, Sector 3", rating: 4.4, image: "supermarket.jpg" },
    { name: "Glow ", category: "Restaurant", address: "Near Main Market", rating: 4.5, image: "glow.jpg" },
    { name: "Healthy Center", category: "Book Store", address: "Station Road", rating: 4.2, image: "healthy.jpg" },
    { name: "Gupta Electronics", category: "Electronics", address: "City Center", rating: 4.0, image: "gupta image.jpeg" },
    { name: "Elite Fitness Gym", category: "Gym", address: "Sector 5, Block C", rating: 4.9, image: "elite.jpeg" },
    { name: "Fresh Veggie Mart", category: "Vegetable Shop", address: "Market Lane", rating: 4.7, image: "veggi.jpg" },
    { name: "The Baker's Hub", category: "Bakery", address: "Central Street", rating: 4.8, image: "bakers.jpg" },
    { name: "Modern Hair Studio", category: "Salon", address: "Green Avenue", rating: 4.6, image: "hair.jpg" },
    { name: "Royal ", category: "Cafe", address: "City Square Mall", rating: 4.3, image: "Royal.jpg" },
    { name: "Tech", category: "Printing Services", address: "Business Park", rating: 4.2,image:"tech.jpg" },
    { name: "Dream Interiors", category: "Furniture Store", address: "Design District", rating: 4.3, image: "dream.jpg" },
    { name: "Mountain Trek ", category: "Supermarket", address: "Block A, Sector 3", rating: 4.4, image: "mountain.jpg"},

    { name: "GiorGio", category: "Vegetable Shop", address: "Market Lane", rating: 4.7, image: "giorgio.jpg" },
    { name: "Greeneary", category: "Bakery", address: "Central Street", rating: 4.8, image: "green.jpg" },
    { name: "Modern Hair Studio", category: "Salon", address: "Green Avenue", rating: 4.6, image: "hair.jpg" },
    { name: "Royal ", category: "Cafe", address: "City Square Mall", rating: 4.3, image: "Royal.jpg" },
    { name: "Delicious", category: "Printing Services", address: "Business Park", rating: 4.2,image:"delicious.jpg" },
    { name: "Dream Interiors", category: "Furniture Store", address: "Design District", rating: 4.3, image: "dream.jpg" },
    { name: "Flowers Market ", category: "Supermarket", address: "Block A, Sector 3", rating: 4.4, image: "flower.jpeg"}

    
];

// Business Cards Rendering
const businessCards = document.getElementById("businessCards");

function loadBusinesses() {
    businesses.forEach(business => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${business.image}" alt="${business.name}">
            <h3>${business.name}</h3>
            <p><strong>Category:</strong> ${business.category}</p>
            <p><strong>Address:</strong> ${business.address}</p>
            <p><strong>Rating:</strong> ${business.rating} ⭐</p>
        `;
        businessCards.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", loadBusinesses);

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent Page Reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for contacting us! We'll respond shortly.");
        document.getElementById("contactForm").reset(); // Clear the Form
    } else {
        alert("Please fill out all fields.");
    }
});

// Search Functionality
document.getElementById("searchButton").addEventListener("click", function () {
    const searchQuery = document.getElementById("searchBar").value.toLowerCase();
    const searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = ""; // Clear previous results

    const filteredBusinesses = businesses.filter(business =>
        business.name.toLowerCase().includes(searchQuery) || 
        business.category.toLowerCase().includes(searchQuery)
    );

    if (filteredBusinesses.length > 0) {
        filteredBusinesses.forEach(business => {
            const resultItem = document.createElement("div");
            resultItem.className = "search-result";
            resultItem.innerHTML = `
                <h3>${business.name}</h3>
                <p><strong>Category:</strong> ${business.category}</p>
                <p><strong>Address:</strong> ${business.address}</p>
                <p><strong>Rating:</strong> ${business.rating} ⭐</p>
            `;
            searchResultsContainer.appendChild(resultItem);
        });
    } else {
        searchResultsContainer.innerHTML = "<p>No businesses found matching your search query.</p>";
    }
});


// Add active class to the current link when clicked
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Remove the active class from all links
            navLinks.forEach(link => link.classList.remove("active"));
            // Add the active class to the clicked link
            this.classList.add("active");
        });
    });

    // Smooth scrolling for anchor links
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
