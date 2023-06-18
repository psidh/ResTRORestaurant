
// Dummy data for restaurant listing
const restaurants = [
    {
    name: "Dolphin",
    cuisine: "Indian | Continental | Chinese | SeaFood | Middle Eastern",
    location: "Visakhapatnam",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    image: "dolphin.jpg"
    },
    {
    name: "Paradise",
    cuisine: "Indian | Chinese",
    location: "Vizianagaram",
    rating: "⭐️⭐️⭐️⭐️",
    image: "para.avif"


    },
    {
    name: "JW Marriott Hotel",
    cuisine: "Indian | American | Continental | Mexican",
    location: "Bengaluru",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    image: "okhla.webp"
    },
    {
    name: "Taj Krishna",
    cuisine: "Tandoori | Biryani",
    location: "Hyderabad",
    rating: "⭐️⭐️⭐️",
    image: "char.jpg"
    },
    {
    name: "Novotel",
    cuisine: "Indian | Coastal | Mexican | Chinese",
    location: "Visakhapatnam",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    image: "novotel.jpg"
    },
    {
    name: "SVN Palace",
    cuisine: "Indian | Chinese | Mexican",
    location: "Vizianagaram",
    rating: "⭐️⭐️⭐️",
    image: "svn.avif"
    },
    {
    name: "Krishna Kutira",
    cuisine: "Pure Vegetarian | Indian",
    location: "Bengaluru",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    image: "hare.jpg"
    },
    {
    name: "Leela Hotel",
    cuisine: "Indian | American | Continental | Mexican | Chinese",
    location: "Hyderabad",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    image: "leela.jpg"
    }
];
// Populate the restaurant select options
function populateRestaurantOptions(restaurants) {
    const restaurantSelect = document.getElementById("restaurant");
    restaurantSelect.innerHTML = ""; // Clear previous options

    restaurants.forEach((restaurant) => {
    const option = document.createElement("option");
    option.value = restaurant.name;
    option.textContent = restaurant.name;
    restaurantSelect.appendChild(option);
    });
}

populateRestaurantOptions(restaurants);

// Filter restaurants by city
function filterRestaurantsByCity(city) {
    const restaurantsContainer = document.getElementById("restaurants-container");
    restaurantsContainer.innerHTML = ""; // Clear previous restaurant listing

    const filteredRestaurants = restaurants.filter((restaurant) => {
    return city === "" || restaurant.location === city;
    });

    if (filteredRestaurants.length === 0) {
    const noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "No restaurants available in the selected city.";
    restaurantsContainer.appendChild(noResultsMessage);
    return;
    }
    
    filteredRestaurants.forEach((restaurant) => {

    const restaurantCard = document.createElement("li");
    restaurantCard.className = "bg-white rounded shadow-lg p-4 flex-grow";

    const restaurantImage = document.createElement("img");
    restaurantImage.className = "w-24 h-24 rounded-full p-4 flex-grow";
    restaurantImage.src = restaurant.image;
    restaurantImage.alt = restaurant.name;
    restaurantCard.appendChild(restaurantImage);


    const restaurantName = document.createElement("h3");
    restaurantName.className = "text-xl font-semibold mb-2 flex-grow";
    restaurantName.textContent = restaurant.name;
    
    const cuisine = document.createElement("p");
    cuisine.className = "mb-2";
    cuisine.innerHTML = `<span class="font-semibold flex-grow">Cuisine:</span> ${restaurant.cuisine}`;

    
    const location = document.createElement("p");
    location.className = "mb-2";
    location.innerHTML = `<span class="font-semibold flex-grow">Location:</span> ${restaurant.location}`;

    const restaurantRating = document.createElement("p");
    restaurantRating.innerHTML = `<span class="mb-2 font-semibold">Rating:</span> ${restaurant.rating}`;
    

    const viewDetailsButton = document.createElement("button");
    viewDetailsButton.className = "bg-blue-500 text-white rounded-full px-4 py-2 flex-grow";
    viewDetailsButton.textContent = "Search ";

    viewDetailsButton.addEventListener("click", () => {
    const searchQuery = encodeURIComponent(restaurant.name);
    const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;
    window.open(googleSearchUrl, "_blank");

    });


    restaurantCard.appendChild(restaurantName);
    restaurantCard.appendChild(cuisine);
    restaurantCard.appendChild(location);
    restaurantCard.appendChild(restaurantRating);
    restaurantCard.appendChild(viewDetailsButton);
    restaurantsContainer.appendChild(restaurantCard);
    });

}

// Handle city selection change
const citySelect = document.getElementById("city-select");
citySelect.addEventListener("change", (event) => {
    const selectedCity = event.target.value;
    filterRestaurantsByCity(selectedCity);
    document.getElementById("reservation-booking").classList.remove("hidden");
});

// Handle form submission
const form = document.getElementById("reservation-form");
form.addEventListener("submit", (event) => {
event.preventDefault();
// Process the form data and handle the booking
const restaurantSelect = document.getElementById("restaurant");
const restaurant = restaurantSelect.value;
const date = document.getElementById("date").value;
const time = document.getElementById("time").value;
const partySizeInput = document.getElementById("party-size");
const partySize = parseInt(partySizeInput.value); // Parse the party size as an integer

// Validate form values
if (!restaurant || !date || !time || !partySize) {
    alert("Please fill in all the required fields.");
    return;
}

    // Validate party size
if (partySize < 1) {
    alert("The Party Size must be greater than 1.");
    return;
}

if (partySize > 1000) {
    alert("The Party Size must be less or equal to 1000.");
    return;
}

// Perform additional validation
const currentDate = new Date();
const selectedDate = new Date(date);
if (selectedDate <= currentDate) {
    alert("Please select a future date.");
    return;
}



// Display booking confirmation
const confirmationSection = document.getElementById("confirmation");
confirmationSection.classList.remove("hidden");
const reservationDetails = document.getElementById("reservation-details");
reservationDetails.textContent = `Restaurant: ${restaurant}\nDate: ${date}\nTime: ${time}\nParty Size: ${partySize}`;

// Scroll to the confirmation section
confirmationSection.scrollIntoView({ behavior: "smooth" });
});
