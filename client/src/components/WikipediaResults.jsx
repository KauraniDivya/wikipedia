import React from 'react';
import { BeatLoader } from 'react-spinners';

const WikipediaResults = ({ numberOfRequests, visitedPages, loading }) => {
  return (
    <div className="results-container">
      {loading ? (
        <div className="spinner">
          <BeatLoader color="#ffffff" loading={loading} size={15} />
        </div>
      ) : (
        <>
          <h2>Number of Requests: {numberOfRequests}</h2>
          <div className="visited-pages-list">
            {visitedPages.map((page, index) => (
              <div key={index} className="page-card">
                <a href={page} target="_blank" rel="noopener noreferrer">
                  {page}
                </a>
                {index < visitedPages.length - 1 && <div className="arrow">&#8594;</div>}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WikipediaResults;
