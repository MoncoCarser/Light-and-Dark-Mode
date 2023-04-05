const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function darkOrLightImages(color) {
	image1.src= `images/undraw_motherhood_${color}.svg`;
	image2.src= `images/undraw_family_${color}.svg`;
	image3.src= `images/undraw_fatherhood_${color}.svg`;
}

function toggleDarkLightMode(darkMode) {
	nav.style.backgroundColor = darkMode ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
	textBox.style.backgroundColor = darkMode ? "rgb(255 255 255 / 50%)" :  "rgb(0 0 0 / 50%)";
	toggleIcon.children[0].textContent = darkMode ? "Dark Mode" : "Light Mode";
	darkMode ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon") : 
		toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
	darkMode ? darkOrLightImages("dark") : darkOrLightImages("light");
}

// Switch Theme Dynamically
function switchTheme(event) {
	if (event.target.checked) {
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.setItem("theme", "dark");
		toggleDarkLightMode(true);
	} else {
		document.documentElement.setAttribute("data-theme", "light");
		localStorage.setItem("theme", "light");
		toggleDarkLightMode(false);
	}
}

toggleSwitch.addEventListener("change", switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
	document.documentElement.setAttribute("data-theme", currentTheme);

	if (currentTheme === "dark") {
		toggleSwitch.checked = true;
		toggleDarkLightMode(true);
	}
}