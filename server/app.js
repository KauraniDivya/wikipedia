const express = require('express');
const bodyParser = require('body-parser');
const wikipediaRoutes = require('./routes/wikipedia');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/wikipedia', wikipediaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
