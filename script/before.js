// this code will be executed before page load
(function () {
	console.log("before.js / content.js executed");
})();

chrome.storage.sync.get("password", ({ password }) => {
	start_position: while (true) {
		let enteredPassword = prompt(
			"Enter the password to access the website:",
			""
		);
		if (enteredPassword === password) {
			enteredPassword = true;
			const interval = setInterval(() => {
				const divElements = document.querySelectorAll("._1AHcd"); // Replace with your class name

				if (divElements.length > 0) {
					clearInterval(interval); // Clear the interval when the class is found
					modifyCSS(); // Call the function to modify the CSS
				}
			}, 2000); // Check every 2 sec
			break;
		} else {
			alert("Incorrect password. Access denied.");
			continue start_position;
		}
	}
});

function modifyCSS() {
    console.log('called modify css');
	const divAvatarElement = document.querySelectorAll("._1AHcd");
	const divNameElement = document.querySelectorAll("._8nE1Y");

	divAvatarElement.forEach((e, idx) => {
		divAvatarElement[idx].style.filter = "blur(5px)";
		divNameElement[idx].style.filter = "blur(5px)";

		divAvatarElement[idx].addEventListener("mouseenter", () => {
			divAvatarElement[idx].style.filter = "none";
			divNameElement[idx].style.filter = "none";
		});
		divNameElement[idx].addEventListener("mouseenter", () => {
			divNameElement[idx].style.filter = "none";
			divAvatarElement[idx].style.filter = "none";
		});

		divAvatarElement[idx].addEventListener("mouseleave", () => {
			divAvatarElement[idx].style.filter = "blur(5px)";
			divNameElement[idx].style.filter = "blur(5px)";
		});
		divNameElement[idx].addEventListener("mouseleave", () => {
			divNameElement[idx].style.filter = "blur(5px)";
			divAvatarElement[idx].style.filter = "blur(5px)";
		});
	});
}
