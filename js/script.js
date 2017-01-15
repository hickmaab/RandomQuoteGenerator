!(function(){

	//Generate random number from length of quotes array, return random index from array with random number
	function getRandomQuote(){
		const randomNumber = Math.floor(Math.random() * quotes.length);
		return quotes[randomNumber];
	};

	function printQuote(){
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

		quoteBox.innerHTML = html;
	}

	//Print quote on page load
	printQuote();


	// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


}());