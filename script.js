// Function to fetch a random quote
async function getRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching random quote:', error);
    }
}

// Function to fetch multiple quotes
async function getQuotes(page = 1, limit = 20) {
    try {
        const response = await fetch(`https://api.quotable.io/quotes?page=${page}&limit=${limit}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching quotes:', error);
    }
}

// Function to fetch a specific quote by ID
async function getQuoteById(id) {
    try {
        const response = await fetch(`https://api.quotable.io/quotes/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching quote by ID:', error);
    }
}

// Example usage:
// getRandomQuote().then(quote => console.log('Random Quote:', quote));
// getQuotes(1, 10).then(quotes => console.log('Multiple Quotes:', quotes));
// getQuoteById('An5NAXPrbN').then(quote => console.log('Specific Quote:', quote));
