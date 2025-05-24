const quoteText = document.querySelector(".quote"),
    authorName = document.querySelector(".name");

const quotes = [
    {
        content: "Cattle die, kinsmen die, you yourself will die; I know one thing which never dies: the judgment of a dead man's life.",
        author: "Hávamál"
    },
    {
        content: "A man should be loyal through life to friends, and return gift for gift. Laugh when they laugh, but with lies repay a false foe.",
        author: "Hávamál"
    },
    {
        content: "Better to fight and fall than to live without hope.",
        author: "The Saga of the Volsungs"
    },
    {
        content: "No man is totally wretched, unless his heart is broken by a woman.",
        author: "Grettir’s Saga"
    },
    {
        content: "He who is not bold enough to take risks will never accomplish anything in life.",
        author: "Saga of the Jomsvikings"
    },
    {
        content: "A coward thinks he will live forever if he avoids battle, but old age will give him no peace, even if spears do.",
        author: "Hávamál"
    },
    {
        content: "Many are the joys of men, but all too soon they pass away.",
        author: "The Saga of King Heidrek the Wise"
    },
    {
        content: "The unwise man thinks he will live forever if he keeps away from fighting, but old age won’t grant him a truce, even if the spears do.",
        author: "Hávamál"
    },
    {
        content: "A man is happy if he gains praise and friendship. No man is entirely wretched, unless the Norns have wholly forsaken him.",
        author: "Gisli’s Saga"
    },
    {
        content: "A man should stand on his own two feet and not be dependent on others.",
        author: "Egils Saga"
    }  
];

function randomQuote() {
    // First, hide the quote and author
    quoteText.classList.remove("visible");
    authorName.classList.remove("visible");
    
    // Wait for fade out to complete
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        
        // Update the content while it's hidden
        quoteText.innerText = quote.content;
        authorName.innerText = quote.author;
        
        // Trigger reflow to ensure the browser recognizes the content change
        void quoteText.offsetWidth;
        
        // Make visible again
        quoteText.classList.add("visible");
        authorName.classList.add("visible");
    }, 500);
}

// Display initial quote immediately
setTimeout(() => {
    // Set initial quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    quoteText.innerText = quote.content;
    authorName.innerText = quote.author;
    
    // Make visible
    quoteText.classList.add("visible");
    authorName.classList.add("visible");
}, 100);

// Then set up the interval for future quotes
setInterval(randomQuote, 10000);
