// script.js

// Predefined quote lists with 20+ quotes each
const quotes = {
    fun: [
        "Ashik is known as chatAashik and vodai",
      "Why don’t scientists trust atoms? Because they make up everything!",
      "I’m reading a book about anti-gravity. It’s impossible to put down!",
      "I told my wife she should embrace her mistakes. She gave me a hug.",
      "What’s orange and sounds like a parrot? A carrot!",
      "I used to play piano by ear, but now I use my hands.",
      "Why did the scarecrow win an award? He was outstanding in his field.",
      "Parallel lines have so much in common. It’s a shame they’ll never meet.",
      "I once ate a watch. It was time-consuming.",
      "Why don’t skeletons fight each other? They don’t have the guts.",
      "I’m on a seafood diet. I see food, and I eat it.",
      "What do you call fake spaghetti? An impasta.",
      "I’m terrified of elevators, so I’m going to start taking steps to avoid them.",
      "Why don’t oysters share their pearls? Because they’re shellfish!",
      "Why was the math book sad? It had too many problems.",
      "I used to hate facial hair, but then it grew on me.",
      "Why did the bicycle fall over? It was two-tired.",
      "What did one wall say to the other? I’ll meet you at the corner.",
      "Why are ghosts bad liars? Because you can see right through them.",
      "I told my computer I needed a break, and now it won’t stop sending me cookies.",
      "What do you call a bear with no teeth? A gummy bear!"
    ],
    motivational: [
      "Your limitation—it’s only your imagination.",
      "Push yourself, because no one else is going to do it for you.",
      "Dream it. Believe it. Build it.",
      "Hard work beats talent when talent doesn’t work hard.",
      "Don’t stop when you’re tired. Stop when you’re done.",
      "It always seems impossible until it’s done.",
      "Don’t wait for opportunity. Create it.",
      "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
      "Dream bigger. Do bigger.",
      "The key to success is to focus on goals, not obstacles.",
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      "Great things never come from comfort zones.",
      "Don’t wish it were easier; wish you were better.",
      "Believe you can, and you’re halfway there.",
      "The only way to do great work is to love what you do.",
      "Don’t limit your challenges. Challenge your limits.",
      "Failure is not the opposite of success; it’s part of success.",
      "Act as if what you do makes a difference. It does.",
      "It’s not whether you get knocked down; it’s whether you get up.",
      "Start where you are. Use what you have. Do what you can."
    ],
    random: [] // This will combine all quotes dynamically
  };
  
  // Combine all quotes into the "random" category
  quotes.random = [...quotes.fun, ...quotes.motivational];
  
  // Track already shown quotes for each category
  const shownQuotes = {
    fun: [],
    motivational: [],
    random: []
  };
  
  // Elements
  const quoteTypeSelect = document.getElementById('quoteType');
  const generateBtn = document.getElementById('generateBtn');
  const quoteDisplay = document.getElementById('quoteDisplay');
  const copyBtn = document.getElementById('copyBtn');
  const shareBtn = document.getElementById('shareBtn');
  const anotherBtn = document.getElementById('anotherBtn');
  
  // State
  let currentQuote = "";
  
  // Function to generate a quote based on selected type
  const generateQuote = (type) => {
    const selectedQuotes = quotes[type];
    const alreadyShown = shownQuotes[type];
  
    // Reset shown quotes if all have been displayed
    if (alreadyShown.length === selectedQuotes.length) {
      shownQuotes[type] = [];
    }
  
    // Find a new quote that hasn't been shown yet
    let newQuote;
    do {
      newQuote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
    } while (alreadyShown.includes(newQuote));
  
    // Add the quote to the "already shown" list
    alreadyShown.push(newQuote);
  
    // Display the quote
    currentQuote = newQuote;
    quoteDisplay.textContent = currentQuote;
  
    // Enable buttons
    copyBtn.disabled = false;
    shareBtn.disabled = false;
    anotherBtn.disabled = false;
  };
  
  // Generate a quote when "Generate Quote" button is clicked
  generateBtn.addEventListener('click', () => {
    const quoteType = quoteTypeSelect.value || "random";
    generateQuote(quoteType);
  });
  
  // Generate a new quote when "Make Another Quote" button is clicked
  anotherBtn.addEventListener('click', () => {
    const quoteType = quoteTypeSelect.value || "random";
    generateQuote(quoteType);
  });
  
  // Copy quote to clipboard
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(currentQuote).then(() => {
      alert('Quote copied to clipboard!');
    });
  });
  
  // Simulate sharing options
  // Updated share options with icons
shareBtn.addEventListener('click', () => {
    const shareOptions = `
      <div id="shareModal" class="modal">
        <div class="modal-content">
          <h2>Share Your Quote</h2>
          <div class="share-buttons">
            <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(currentQuote)}" target="_blank" class="share-link">
              <i class="fab fa-twitter"></i> Share on X
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentQuote)}" target="_blank" class="share-link">
              <i class="fab fa-facebook-f"></i> Share on Facebook
            </a>
            <a href="https://www.instagram.com/" target="_blank" class="share-link">
              <i class="fab fa-instagram"></i> Share on Instagram
            </a>
          </div>
          <button onclick="closeModal()">Close</button>
        </div>
      </div>
    `;
  
    // Append the modal to the body
    document.body.insertAdjacentHTML('beforeend', shareOptions);
  
    // Close the modal on button click
    window.closeModal = () => {
      document.getElementById('shareModal').remove();
    };
  });
  
  