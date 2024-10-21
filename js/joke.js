const quotes = [
    "Code should be readable.",
    "Programming is one of the most useful ways to think.",
    "Bugs always hide in unexpected places.",
    "Good code is easy to read, and bad code is easy to write.",
    "Software is a translation of what humans do into something a machine can understand.",
    "Software is never perfect. The goal is to minimize the bad.",
    "The problem is not finding the solution, but defining the problem correctly.",
    "Writing code is like solving a math problem. There’s an answer, but the process is different for everyone.",
    "The quality of code is not measured by the amount of code.",
    "Code should be simple. Complexity is a law of nature.",
    "The best way to predict the future is to invent it.",
    "Simplicity is the soul of efficiency.",
    "It’s not a bug; it’s an undocumented feature.",
    "First, solve the problem. Then, write the code.",
    "In programming, the hard part isn’t solving problems, but deciding what snacks to bring to the meeting.",
    "The most damaging phrase in the language is ‘We've always done it this way.’",
    "You can’t build a reputation on what you are going to do.",
    "Talk is cheap. Show me the code.",
    "A good programmer is someone who always looks both ways before crossing a one-way street.",
    "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "If you think your users are idiots, only idiots will use it.",
    "The only way to learn a new programming language is by writing programs in it.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Programmers are not bound by the laws of physics.",
    "The sooner you start to code, the longer the program will take.",
    "Good code is its own best documentation.",
    "The best code is no code at all."
];

const randomQuote = getRandomQuote();

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.getElementById('quote').textContent = randomQuote;
