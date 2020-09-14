const quote = document.getElementById('text');
const author = document.getElementById('author');
const quoteButton = document.getElementById('new-quote');
quoteButton.addEventListener('click', generateRandomQuote);
window.onload = generateRandomQuote;

function generateRandomQuote() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://quotes.stormconsultancy.co.uk/random.json', true);

    request.onload = function()  {
        if (this.status === 200) {
            var quoteObject = JSON.parse(this.responseText);
            quote.innerHTML = quoteObject.quote;
            author.innerHTML = quoteObject.author;
        }
    }
    request.send();
}




