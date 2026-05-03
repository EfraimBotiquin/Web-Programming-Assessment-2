// Function to show a fact based on the selected planet
function showFact(planet) {

    // Object storing planet facts
    const facts = {
        mercury: "Mercury is the closest planet to the Sun.",
        venus: "Venus is the hottest planet in our solar system.",
        earth: "Earth is the only planet that supports life.",
        mars: "Mars is called the Red Planet because of its color.",
        jupiter: "Jupiter is the largest planet in the solar system.",
        saturn: "Saturn is famous for its beautiful rings.",
        uranus: "Uranus rotates sideways compared to other planets.",
        neptune: "Neptune has the strongest winds in the solar system."
    };

    // Get fact for selected planet
    const fact = facts[planet];

    // Check if fact exists
    if (fact !== undefined) {
        alert(fact); // Show fact
    } else {
        alert("Invalid planet selected."); // Error message
    }
}

// List of theme classes
const themes = [
    "theme-default",
    "theme-midnight",
    "theme-nebula",
    "theme-cosmic",
    "theme-red"
];

// Get saved theme index from localStorage
let currentTheme = parseInt(localStorage.getItem("themeIndex"));

// If no saved theme, use default (0)
if (isNaN(currentTheme)) {
    currentTheme = 0;
}

// Apply saved theme on page load
document.body.classList.add(themes[currentTheme]);

// Function to change theme
function toggleTheme() {

    // Remove current theme
    document.body.classList.remove(themes[currentTheme]);

    // Move to next theme
    currentTheme = (currentTheme + 1) % themes.length;

    // Apply new theme
    document.body.classList.add(themes[currentTheme]);

    // Save selected theme
    localStorage.setItem("themeIndex", currentTheme);
}