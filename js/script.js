!(function(){

	//Generate Random Quote
	const getRandomQuote = () => {
		//generate random number from length of quotes array
		const randomNumber = Math.floor(Math.random() * quotes.length);

		const quote = quotes[randomNumber];

		//return quote based on random index
		return quote;
	};

	//Print Quote To Document
	const printQuote = () => {
		const quote = getRandomQuote();
		const quoteBox = document.getElementById("quote-box");

		//define markup for quote and source
		let html = '<p class="quote">' + quote.quote + '</p>';
		html += '<p class="source">' + quote.source;

		//add citation if not omitted or empty
		if (quote.citation !== undefined && quote.citation !== ""){
			html += '<span class="citation">' + quote.citation + '</span>';
		}

		//add year if not omitted or empty
		if (quote.year !== undefined && quote.year !== ""){
			html += '<span class="year">' + quote.year + '</span>';
		}

		/*add tags if not omitted or empty
		if (quote.tags !== undefined && quote.tags !== ""){
			html += '<span class="tags">' + quote.tags + '</span>';
		}*/
		
		//close source paragraph
		html += '</p>';

		//Print to document
		quoteBox.innerHTML = html;

	}

	//Generate Random Background Color When Button Is Clicked
	const generateBackgroundColor = () => {

		//Generate random number between 0 and 255
		const getRandomNumber = () => {
			const randomNumber = Math.floor(Math.random() * 255) + 1;
			return randomNumber;
		}

		//Generate RGB string
		const generateRGB = () => {return 'rgb(' + getRandomNumber() + ', ' + getRandomNumber() + ', ' + getRandomNumber() + ')';};

		//set background color of page and button with random rgb
		const color = generateRGB();
		document.body.style.backgroundColor = color;
		document.getElementById("loadQuote").style.background = color;
		}

	//Print quote on page load
	printQuote();


	// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" and "generateBackgroundColor" functions are called
document.getElementById('loadQuote').addEventListener("click", function(){
	printQuote();
	generateBackgroundColor();
}, false);


}());