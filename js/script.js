let quotes = [
	{
		quote: "But as for me, give me liberty or give me death",
		source: "Patrick Henry",
		citation: "Second Virginia Convention",
		year: 1775
	},
	{
		quote: "We hold these truths to be self evident, that all men are created equal",
		source: "Thomas Jefferson",
		citation: "The Declaration of Independance",
		year: 1776
	},
	{
		quote: "I regret that I have but one life to lose for my country",
		source: "Nathan Hale",
		year: 1776
	},
	{
		quote: "We the People of the United States, in Order to form a more perfect Union",
		source: "James Madison",
		citation: "The Constitution of the United States",
		year: 1787
	},
	{
		quote: "Only a virtuous people are capable of freedom",
		source: "Benjamin Franklin",
		year: 1787
	},
	{
		quote: "Happiness and moral duty are inseparably connected",
		source: "George Washington",
		year: 1789
	},
	{
		quote: "Here once the embattled farmers stood, And fired the shot heard round the world",
		source: "Ralph Waldo Emerson",
		citation: "Concord Hymn",
		year: 1837
	},
	{
		quote: "Government of the people, by the people, for the people shall not perish",
		source: "Abraham Lincoln",
		citation: "Gettysburg Address",
		year: 1863
	}
];

function getRandomQuote() {
	let index = Math.floor(Math.random() * quotes.length);
	console.log(index);
	return quotes[index];
}

function printQuote() {
	let quote = getRandomQuote();
	let html = ''; 
	html +=	'<p class="quote">' + quote.quote + '</p>';
	html += '<p class="source">' + quote.source;
	if(quote.citation !== undefined) {
		html += '<span class="citation">' + quote.citation + '</span>';
	}
	if(quote.year !== undefined) {
		html += '<span class="year">' + quote.year + '</span>';
	}
	html += '</p>'
	document.getElementById('quote-box').innerHTML = html;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

