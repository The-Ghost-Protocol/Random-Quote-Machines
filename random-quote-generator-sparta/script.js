const quoteText = document.querySelector(".quote"),
    authorName = document.querySelector(".name");

const quotes = [
    {
        content: "The more you sweat in training, the less you bleed in battle.",
        author: "Spartan Proverb"
    },
    {
        content: "Come back with your shield—or on it.",
        author: "Spartan Mother’s Farewell (Plutarch, Moralia)"
    },
    {
        content: "Either with this or upon this.",
        author: "Spartan Saying"
    },
    {
        content: "Sparta has no walls. Its men are its ramparts, and its borders are their spears.",
        author: "King Agesilaus II"
    },
    {
        content: "It is beautiful when a brave man dies fighting for his fatherland.",
        author: "Tyrtaeus (Spartan poet)"
    },
    {
        content: "If all the world were to rise against Sparta, we would fight them in the shade.",
        author: "Response when told Persian arrows would blot out the sun (Battle of Thermopylae)"
    },
    {
        content: "A Spartan’s true honor is not in never falling, but in rising every time we fall—sword in hand.",
        author: "Attributed to Leonidas I"
    },
    {
        content: "Only Spartan women give birth to real men.",
        author: "Gorgo, Queen of Sparta (Plutarch, Sayings of Spartan Women)"
    },
    {
        content: "If you are a man, fight. If you are a god, stand aside.",
        author: "Spartan warning to Persian envoys before Thermopylae"
    },
    {
        content: "Go tell the Spartans, stranger passing by, that here, obedient to their laws, we lie.",
        author: "Epitaph at Thermopylae (Simonides)"
    },   
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