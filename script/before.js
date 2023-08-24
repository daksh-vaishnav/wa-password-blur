// this code will be executed before page load
(function () {
	console.log("before.js / content.js executed");
})();

chrome.storage.sync.get("password", ({ password }) => {
	function enterPassword() {
		let enteredPassword = prompt(
			"Enter the password to access the website:",
			""
		);
		if (enteredPassword === password) {
			const interval = setInterval(() => {
				const divElements = document.querySelectorAll("._1AHcd"); // Replace with your class name
				if (divElements.length > 0) {
					clearInterval(interval); // Clear the interval when the class is found
					addCSS();
					blurContactCSS(); // Call the function to modify the CSS
					// blurChat();
				}
			}, 2000); // Check every 2 sec
			return;
		} else {
			alert("Incorrect password. Access denied.");
			enterPassword();
		}
	}
	enterPassword();
});

// function blurChat() {
// 	const interval = setInterval(() => {
// 		const divElements = document.querySelectorAll(".CzM4m"); // Replace with your class name
// 		if (divElements.length > 0) {
// 			clearInterval(interval); // Clear the interval when the class is found
// 			blurChatCSS(); // Call the function to modify the CSS
// 			return;
// 		} else blurChat();
// 	}, 2000); // Check every 2 sec
// }

function blurContactCSS() {
	console.log("called modify css contact");
	const divAvatarElement = document.querySelectorAll("._1AHcd");
	const divNameElement = document.querySelectorAll("._8nE1Y");

	divAvatarElement.forEach((item, idx) => {
		divAvatarElement[idx].classList.add("blur-css");
		divNameElement[idx].classList.add("blur-css");

		divAvatarElement[idx].addEventListener("mouseenter", () => {
			divAvatarElement[idx].classList.remove("blur-css"); // Remove blur class
			divNameElement[idx].classList.remove("blur-css"); // Remove blur class
		});

		divAvatarElement[idx].addEventListener("mouseleave", () => {
			divAvatarElement[idx].classList.add("blur-css"); // Add blur class
			divNameElement[idx].classList.add("blur-css"); // Add blur class
		});

		divAvatarElement[idx].addEventListener("click", blurChatCSS);

		divNameElement[idx].addEventListener("mouseenter", () => {
			divNameElement[idx].classList.remove("blur-css"); // Remove blur class
			divAvatarElement[idx].classList.remove("blur-css"); // Remove blur class
		});

		divNameElement[idx].addEventListener("mouseleave", () => {
			divNameElement[idx].classList.add("blur-css"); // Add blur class
			divAvatarElement[idx].classList.add("blur-css"); // Add blur class
		});
		divNameElement[idx].addEventListener("click", blurChatCSS);
	});
}

function blurChatCSS() {
	setInterval(() => {
		console.log("called modify css chat");
		const divElement = document.querySelectorAll(".CzM4m");
		divElement.forEach((e) => {
			e.classList.add("blur-css");
			e.addEventListener("mouseenter", () => {
				e.classList.remove("blur-css");
			});
			e.addEventListener("mouseleave", () => {
				e.classList.add("blur-css");
			});
		});
	}, 1000); // Check every 2 sec
}

function addCSS() {
	// Step 1: Create new CSS rules
	var newRules = [
		".blur-css { filter:blur(3px); }",
		".blur-none { filter:none; }",
	];

	// Step 2: Create a <style> element and append the new rules to it
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";

	if (styleElement.styleSheet) {
		// For IE (older versions)
		styleElement.styleSheet.cssText = newRules.join(" ");
	} else {
		// For other browsers
		newRules.forEach(function (rule) {
			styleElement.appendChild(document.createTextNode(rule));
		});
	}

	// Step 3: Append the <style> element to the <head> of the document
	document.head.appendChild(styleElement);
}
