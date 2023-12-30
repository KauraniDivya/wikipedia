
# Wikipedia Philosophy Tracker

Track the fascinating journey from any Wikipedia page to the ultimate destination - the "Philosophy" page.

![Wikipedia Philosophy Tracker](https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/wikipedia-fall-fundraiser-a-virtual-gathering_processed_5320bc570f2587f299142f06c298de3d697a5912145a454a31c310378291a9c7_background_image.png?alt=media&token=9e12dd93-0083-46fa-b908-6a4d67a93784)

## Overview

Wikipedia Philosophy Tracker is a web application that navigates through Wikipedia articles by following the first non-italicized link in each article until it reaches the "Philosophy" page. This project is built with a sleek React frontend, a robust Express backend, and delightful toast notifications.

## Project Structure

```plaintext
Wikipedia/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
|   |   |   ├── images/
│   │   |   ├── WikipediaForm.jsx
│   │   |   └── WikipediaResult.jsx
│   │   ├── App.js
│   │   └── App.css
│   ├── package.json
│   └── ...
├── server/
│   ├── routes/
│   │   ├── wikipedia.js
│   │   └── ...
│   ├── app.js
│   ├── package.json
│   └── ...
├── package.json
├── README.md
└── ...
```

## Features

- **Interactive UI**: A user-friendly interface that allows users to initiate the Wikipedia philosophy tracking journey.
- **Backend Tracking**: The Express backend handles the logic of traversing Wikipedia pages and prevents infinite loops.
- **Spinner for Loading**: A visually pleasing spinner that appears during the loading of results or when making requests to enhance user experience.
- **Toast Notifications**: Informative and visually appealing toast notifications using React-Toastify library.
- **Validation Checks**:
  - **Invalid URL Handling**: Notifies the user and prevents tracking if an invalid Wikipedia URL is provided.
  - **Infinite Loop Detection**: Warns the user when the provided Wikipedia URL may lead to an infinite loop.
- **Optimized Performance**: Efficient code and logic to ensure optimal performance.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KauraniDivya/wikipedia.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd wikipedia
   ```

3. **Install dependencies:**

   ```bash
   cd client 
   npm install
  
   cd server 
   npm install
   ```
## Getting Started

1. **Start the Express server:**

   ```bash
   cd server
   nodemon app
   ```

2. **Start the React app:**

   ```bash
   cd client 
   npm start
   ```

The application will be accessible at [http://localhost:3000](http://localhost:3000).


## Contact

Your Name - Divya Kaurani (https://www.linkedin.com/in/divyakaurani/)

Project Link: [https://github.com/your-username/wikipedia-philosophy-tracker](https://github.com/KauraniDivya/wikipedia/)


