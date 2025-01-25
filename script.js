const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = "Toggle Theme";
toggleThemeButton.style.position = "fixed";
toggleThemeButton.style.top = "10px";
toggleThemeButton.style.right = "10px";
toggleThemeButton.style.padding = "10px";
toggleThemeButton.style.border = "none";
toggleThemeButton.style.backgroundColor = "#0077ff";
toggleThemeButton.style.color = "#fff";
toggleThemeButton.style.cursor = "pointer";
toggleThemeButton.style.borderRadius = "5px";

// Append button to the body
document.body.appendChild(toggleThemeButton);

// Toggle theme function
let isDark = true;
toggleThemeButton.addEventListener('click', () => {
    if (isDark) {
        document.body.style.backgroundColor = "#f4f4f4"; // Light theme background
        document.body.style.color = "#ee9b16"; // Change text color to #ee9b16
        toggleThemeButton.style.backgroundColor = "#333";
        toggleThemeButton.style.color = "#fff";

        // Update name and bio text colors to #ee9b16
        document.querySelector('.name').style.color = "#ee9b16";
        document.querySelector('.bio').style.color = "#ee9b16";

        // Change link colors to #ee9b16
        document.querySelectorAll('a').forEach(link => {
            link.style.color = "#ee9b16";
        });

        isDark = false;
    } else {
        document.body.style.backgroundColor = "#122b42"; // Dark theme background
        document.body.style.color = "#fff"; // Default text color
        toggleThemeButton.style.backgroundColor = "#0077ff";
        toggleThemeButton.style.color = "#fff";

        // Revert name and bio text colors to default (white)
        document.querySelector('.name').style.color = "#fff";
        document.querySelector('.bio').style.color = "#fff";

        // Change link colors to navy blue
        document.querySelectorAll('a').forEach(link => {
            link.style.color = "navy"; // Navy blue for dark theme
        });

        isDark = true;
    }
});

