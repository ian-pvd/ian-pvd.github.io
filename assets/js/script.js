/**
 * Theme Scripts
 */

/* Import Utils */
import { debounce, isMobile } from "./utils.js";

const setViewportWidth = () => {

	const updateViewportWidth = () => {
		const scrollbarWidth =
			window.innerWidth - document.documentElement.clientWidth;
		document.documentElement.style.setProperty(
			"--viewport-width",
			`calc(100vw - ${scrollbarWidth}px)`
		);
	};

	updateViewportWidth();
	window.addEventListener("resize", debounce(updateViewportWidth), 150);
};

/**
 * Toggle Navigation Menu
 * Show & hide the mobile menu on desktop, or when clicked.
 *
 * @return {void}
 */
const toggleNavMenu = () => {
	// Get menu elements.
	const menuToggle = document.getElementById("site-header-nav-toggle");
	const menu = document.getElementById("site-header-nav");

	// Show & hide the menu aria values based on viewport width.
	const toggleViewportAria = () => {
		if (!isMobile()) {
			menuToggle.setAttribute("aria-expanded", "true");
			menu.setAttribute("aria-hidden", "false");
			document.body.setAttribute("data-nav-hidden", "false");
		} else {
			menuToggle.setAttribute("aria-expanded", "false");
			menu.setAttribute("aria-hidden", "true");
			document.body.setAttribute("data-nav-hidden", "true");
		}
	};
	// Set initial states for desktop.
	toggleViewportAria();
	// Toggle menu display on viewport resize.
	window.addEventListener("resize", debounce(toggleViewportAria, 150));

	// Show & hide the mobile menu on click.
	// TODO: Toggle doesn't close now.
	menuToggle.addEventListener("click", function () {
		const expanded =
			menuToggle.getAttribute("aria-expanded") === "true" || false;
		menuToggle.setAttribute("aria-expanded", !expanded);
		menu.setAttribute("aria-hidden", String(expanded));
		document.body.setAttribute("data-nav-hidden", String(expanded));
	});
};

const toggleSocialMenu = () => {
	// Get menu elements.
	const menuToggle = document.querySelector(
		".site-header #social-links-toggle"
	);
	const menu = document.querySelector(".site-header #social-links-menu");

	// Show & hide the menu aria values based on viewport width.
	const toggleViewportAria = () => {
		if (!isMobile()) {
			menuToggle.setAttribute("aria-expanded", "false");
			menu.setAttribute("aria-hidden", "true");
		} else {
			menuToggle.setAttribute("aria-expanded", "true");
			menu.setAttribute("aria-hidden", "false");
		}
	};
	// Set initial states for desktop.
	toggleViewportAria();
	// Toggle menu display on viewport resize.
	window.addEventListener("resize", debounce(toggleViewportAria, 150));

	// Show & hide the mobile menu on click.
	menuToggle.addEventListener("click", function () {
		const expanded =
			menuToggle.getAttribute("aria-expanded") === "true" || false;
		menuToggle.setAttribute("aria-expanded", !expanded);
		menu.setAttribute("aria-hidden", String(expanded));
	});
};

/* Initialize Scripts */
document.addEventListener("DOMContentLoaded", function () {
	setViewportWidth();
	toggleNavMenu();
	toggleSocialMenu();
});
