// creates an array of quote objects
// properties available are quote, source, citation, year, and tags
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
		year: 1776,
		tags: "History"
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
		year: 1787,
		tags: "History"
	},
	{
		quote: "Only a virtuous people are capable of freedom",
		source: "Benjamin Franklin",
		year: 1787,
		tags: "Teaching"
	},
	{
		quote: "Happiness and moral duty are inseparably connected",
		source: "George Washington",
		tags: "Teaching"
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
		year: 1863,
		tags: "History"
	}
];

// background color options
let backgroundColor = [
	"#BE644B",
	"#4877E5",
	"#36b55c",
	"#3D3654",
	"#C0811B",
	"#9A49A7",
	"#7A7A7A",
	"#0AB2C7"
];

// returns a background color based on a randomly selected index of all the available colors
function getBackgroundColor()
{
	let index = Math.floor(Math.random() * backgroundColor.length);
	return backgroundColor[index];
}

// change the background and button colors a to new color value 
function changeBackgroundColor() {
	// get an available background color and set page's background to the new color
	let color = getBackgroundColor();
	document.body.style.backgroundColor = color;
	
	// change background color of button
	let quoteButton = document.getElementById('loadQuote');
	quoteButton.style.backgroundColor = color;
}

// returns a quote object based on a randomly selected index of all the quotes
function getRandomQuote() {
	let index = Math.floor(Math.random() * quotes.length);
	return quotes[index];
}

// retrieves a quote object and constructs an HTML string based on the quote object properties
// then it displays the final HTML string to the page
function printQuote() {
	let quote = getRandomQuote();
	let html = ''; 
	html +=	'<p class="quote">' + quote.quote + '</p>';
	html += '<p class="source">' + quote.source;

	// citation property is optional, only show if available
	if(quote.citation !== undefined) {
		html += '<span class="citation">' + quote.citation + '</span>';
	}
	
	// year property is optional, only show if available
	if(quote.year !== undefined) {
		html += '<span class="year">' + quote.year + '</span>';
	}
	
	html += '</p>'
	
	document.getElementById('quote-box').innerHTML = html;
	changeBackgroundColor();
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

