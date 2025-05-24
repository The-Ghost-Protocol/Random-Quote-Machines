const quoteText = document.querySelector(".quote"),
    authorName = document.querySelector(".name");

const quotes = [
    {
        content: "The way of the samurai is found in death.",
        author: "Yamamoto Tsunetomo, Hagakure"
    },
    {
        content: "Victory is reserved for those who are willing to pay its price.",
        author: "Sun Tzu"
    },
    {
        content: "A warrior lives so that he is always prepared to die.",
        author: "Daidōji Yūzan, Bushido Shoshinshu"
    },
    {
        content: "When the battle is imminent, break the enemy’s will before swords are drawn.",
        author: "Takeda Shingen (Legendary Daimyō)"
    },
    {
        content: "If you think of saving your life, you had better not go to war at all.",
        author: "Morihei Ueshiba (Founder of Aikido, reflecting samurai philosophy)"
    },
    {
        content: "The sword is the soul of the warrior. If any forget or lose it, they will not be forgiven.",
        author: "Tokugawa Ieyasu (Unifier of Japan)"
    },
    {
        content: "Die rather than disgrace yourself.",
        author: "Samurai Maxim"
    },
    {
        content: "A leader must have both a fierce heart and a compassionate mind.",
        author: "Uesugi Kenshin (Rival of Takeda Shingen)"
    },
    {
        content: "The bow is strung loosely when not in use; the mind must remain flexible.",
        author: "Miyamoto Musashi, The Book of Five Rings"
    },
    {
        content: "Fall seven times, stand up eight.",
        author: "Japanese Proverb"
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