// selection of necessary elements for DOM manipluation
const quote = document.getElementById('text');
const author = document.getElementById('author');
const twitterButton = document.getElementById('btn-twitter');
const tumblrButton = document.getElementById('btn-tumblr');
const body = document.querySelector('body');
const quoteBox = document.getElementById('quote-box');
const quoteButton = document.getElementById('new-quote');
const icons = document.getElementsByClassName('fa');
quoteButton.addEventListener('click', generateRandomQuote);
// generate random quote as soon as the window is loaded with all the assets
window.onload = generateRandomQuote;

// generate random quote function
function generateRandomQuote() {
	let request = new XMLHttpRequest();
	request.open('GET', 'http://quotes.stormconsultancy.co.uk/random.json', true);

	request.onload = function () {
		if (this.status === 200) {
			var quoteObject = JSON.parse(this.responseText);
			quote.innerHTML = quoteObject.quote;
			author.innerHTML = quoteObject.author;
		}
	};
	request.send();
	const currentColour = generateRandomColour();
	setColour(currentColour);
}

// generate random colour function
const generateRandomColour = () => {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

// setColour function
const setColour = (currentColour) => {
	quote.style.color = currentColour;
	author.style.color = currentColour;
	twitterButton.style.backgroundColor = currentColour;
	tumblrButton.style.backgroundColor = currentColour;
	quoteBox.style.backgroundColor = currentColour;
	body.style.backgroundColor = currentColour;
	for (let i = 0; i < icons.length; i++) {
		icons[i].style.color = currentColour;
	}
};
