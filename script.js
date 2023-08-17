const quotes = [
    "The only way to do great work is to love what you do.",
    "In the middle of difficulty lies opportunity.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The best way to predict the future is to create it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Don't watch the clock; do what it does. Keep going.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall."
  ];
  
  
  
  const quoteContainer = document.getElementById("quote"); // Use getElementById
  const newQuoteButton = document.getElementById("new-quote");
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function displayRandomQuote() {
    const randomQuote = getRandomQuote();
    quoteContainer.textContent = randomQuote;
  }
  
  newQuoteButton.addEventListener("click", displayRandomQuote);
  
  // Display initial random quote
  displayRandomQuote();
  