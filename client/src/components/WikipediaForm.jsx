// WikipediaForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WikipediaForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Validate the Wikipedia URL
      if (!isValidWikipediaUrl(url)) {
        toast.error('Invalid Wikipedia URL. Please enter a valid Wikipedia link.');
        return;
      }

      const response = await axios.post('/api/wikipedia/getToPhilosophy', { url });

      // Log the response to see if the infiniteLoop flag is present
      console.log('Server Response:', response.data);

      // Check if the response indicates an infinite loop
      if (response.data.infiniteLoop) {
        toast.warning('The provided Wikipedia URL may lead to an infinite loop.');
      } else {
        // Handle the result as usual
        onSubmit(response.data);
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const isValidWikipediaUrl = (url) => {
    // Your validation logic for a Wikipedia URL
    // For simplicity, you can check if the URL starts with "https://en.wikipedia.org/wiki/"
    return url.startsWith('https://en.wikipedia.org/wiki/');
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', fontFamily: 'Montserrat' }}>
      <label className="label">
        Wikipedia URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="input"
          placeholder="Enter Wikipedia URL"
        />
      </label>
      <button type="submit" className="button">
       
          Get to Philosophy
        
      </button>
    </form>
  );
};

export default WikipediaForm;
