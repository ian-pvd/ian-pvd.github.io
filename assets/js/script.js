const maybeReduceMotion = () => {
	const menuToggle = document.getElementById("site-header-menu-toggle");
	const navbar = document.getElementById("site-header-nav");

	menuToggle.addEventListener("click", function () {
		const expanded =
			menuToggle.getAttribute("aria-expanded") === "true" || false;
		menuToggle.setAttribute("aria-expanded", !expanded);
		navbar.setAttribute("aria-hidden", String(expanded));
	});
}

document.addEventListener("DOMContentLoaded", function () {
	maybeReduceMotion();
});
