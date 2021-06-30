const projectName = 'random-quote-machine';
// FreeCodeCamp Project Test Bundle: DO NOT MODIFY ABOVE //

// Quotes List
const quotes = [
        ["Start writing, no matter what. The water does not flow until the faucet is turned on.", "Louis L’Amour"],
        ["Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.", "William Faulkner"],
        ["You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it", "Octavia E. Butler"],
        ["Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.", "Michelle Obama"],
        ["You can always edit a bad page. You can’t edit a blank page", "Jodi Picoult"],
        ["Emotional empathy is what motivates us to help others.", "Brian Goldman"],
        ["I have never started a poem yet whose end I knew. Writing a poem is discovering.", "Robert Frost"],
        ["We must balance conspicuous consumption with conscious capitalism.", "Kevin Kruse"],
        ["If there's a book that you want to read, but it hasn't been written yet, then you must write it.", "Toni Morrison"],
        ["To love your neighbor as yourself, after all, is the great injunction of every religion.", "Marc Ian Barasch"]
    ] // End of Quotes List
    // Function to produce random quotes
const randomQuote = () => {
    const i = parseInt(Math.random() * quotes.length);
    const author = quotes[i][1];
    const quote = quotes[i][0];
    document.getElementById("text").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
$(document).ready(function() {
    randomQuote();
});