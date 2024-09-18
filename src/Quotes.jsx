import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quote.css'
import { MDBBtn } from 'mdb-react-ui-kit';

function Quotes() {
    const [quote, setQuote] = useState(''); // State to store the quote
  const [author, setAuthor] = useState(''); // State to store the author

  // Function to fetch a random quote
  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/quotes');
      const randomIndex = Math.floor(Math.random() * response.data.quotes.length);
      const randomQuote = response.data.quotes[randomIndex];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };

  // Fetch an initial quote when the component loads
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center', padding: '2rem' }} className='border border-3 rounded-9 bg-white '>
      <h1>Random Quote Generator</h1>
      <div style={{ fontSize: '1.5rem', margin: '1rem 0' }}>
        <p>"{quote}"</p>
        <p><strong>- {author}</strong></p>
      </div>
     <MDBBtn color='info' onClick={fetchRandomQuote}>
      Get Another Quote
      </MDBBtn>
    </div>



    </>
  )
}

export default Quotes
