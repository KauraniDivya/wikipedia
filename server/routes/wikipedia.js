const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');

router.post('/getToPhilosophy', async (req, res) => {
  const startUrl = req.body.url;
  const visitedPages = [];
  let currentUrl = startUrl;

  try {
    while (currentUrl !== 'https://en.wikipedia.org/wiki/Philosophy') {
      const response = await axios.get(currentUrl);
      const $ = cheerio.load(response.data);
      const nextLink = extractFirstNonItalicizedLink($);

      if (!nextLink || visitedPages.includes(nextLink) || checkForConsecutiveRepeats(visitedPages)) {
        // Handle dead-end or loop
        res.json({
          infiniteLoop: true,
        });
        return;
      }

      visitedPages.push(currentUrl);
      currentUrl = nextLink;
    }

    res.json({
      numberOfRequests: visitedPages.length,
      visitedPages,
      infiniteLoop: false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

function extractFirstNonItalicizedLink($) {
  const contentParagraphs = $('#mw-content-text p');
  
  for (let i = 0; i < contentParagraphs.length; i++) {
    const paragraph = contentParagraphs.eq(i);
    const links = paragraph.find('a:not(.external)');

    for (let j = 0; j < links.length; j++) {
      const link = links.eq(j);
      const href = link.attr('href');

      // Check if the link is a valid Wikipedia link
      if (href && href.startsWith('/wiki/') && !href.includes(':')) {
        return 'https://en.wikipedia.org' + href;
      }
    }
  }

  return null;
}

function checkForConsecutiveRepeats(visitedPages) {
  if (visitedPages.length < 2) {
    return false;
  }

  const lastPage = visitedPages[visitedPages.length - 1];
  const secondLastPage = visitedPages[visitedPages.length - 2];
  return lastPage === secondLastPage;
}


module.exports = router;
