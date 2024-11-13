console.log("The extension is up and running");

const inputValue = document.getElementsByName(
	"ctl00$ContentPlaceHolder$txtEstimateCost"
);
const inputAssist = document.getElementsByName(
	"ctl00$ContentPlaceHolder$txtFile"
);
const td = document.getElementsByTagName("td");

var totalValue = 0;

function calculate(value) {
	const floatValue = convertToFloatFormat(value);
	totalValue += floatValue;
	console.log("value fn - " + totalValue + " - " + value + floatValue);
	return totalValue;
}

function addCustomButton() {
	const button = document.createElement("button");
	const buttonClear = document.createElement("button");
	const span = document.createElement("span");

	buttonClear.id = "btnClear";
	buttonClear.textContent = "Limpar Valor";

	button.id = "btnAdd";
	button.textContent = "Adicionar Valor";
	button.style =
		'style="color:White;background-color:#red;width:100px;height: 20px"';
	td[84].appendChild(button);
	td[84].appendChild(buttonClear);
	td[83].appendChild(span);

	button.addEventListener("click", function (e) {
		span.textContent = parseFloat(calculate(inputValue[0].value));
		e.preventDefault();
	});

	buttonClear.addEventListener("click", (e) => {
		totalValue = 0;
		span.textContent = "0";
		e.preventDefault();
	});
}

function convertToFloatFormat(input) {
	// Remove dots as thousand separators and replace comma with dot as decimal separator
	const cleanedInput = input.replace(/\./g, "").replace(",", ".");

	// Convert the cleaned input to a float
	const floatValue = parseFloat(cleanedInput);

	return floatValue;
}

const checkButtonSpanInterval = setInterval(() => {
	const existingButton = document.getElementById("btnAdd");
	if (!existingButton) {
		// If the button doesn't exist, add it
		addCustomButton();
	}
}, 500);
