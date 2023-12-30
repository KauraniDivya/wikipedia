// App.jsx

import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WikipediaForm from './components/WikipediaForm';
import WikipediaResults from './components/WikipediaResults';
import './App.css';

const App = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (data) => {
    setLoading(true);

    // Simulate an API call (replace this with your actual API call)
    // In this example, we're using setTimeout to simulate a delay
    setTimeout(() => {
      setResults(data);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container">
      <div className="background-overlay"></div>
      <h1>Getting to Philosophy</h1>
      <WikipediaForm onSubmit={handleFormSubmit} />

      {/* Conditionally render WikipediaResults or loading spinner */}
      {loading ? (
        <div className="spinner"></div>
      ) : (
        results && <WikipediaResults {...results} />
      )}

      <ToastContainer />
    </div>
  );
};

export default App;
