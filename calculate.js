let display_section = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

// console.log(buttons);

buttons.map((button) => {
	button.addEventListener("click", (el) => {
		doCalculate(el);
	});
});

function doCalculate(e) {
	// console.log(e.target);

	if (display_section.innerText == "0") {
		display_section.innerText = "";
	}

	switch (e.target.innerText) {
		case "AC":
			display_section.innerText = "0";
			break;

		case "DEL":
			if (display_section.innerText != "Error") {
				display_section.innerText = display_section.innerText.slice(0, -1);
			}
			if (display_section.innerText == "") {
				display_section.innerText = "0";
			}

			break;

		case "=":
			try {
				display_section.innerText = eval(display_section.innerText);
			} catch {
				display_section.innerText = "Error";
			}
			break;

		default:
			if (display_section.innerText != "Error") {
				display_section.innerHTML += e.target.innerText;
			}
			break;
	}
}
