const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/', (req, res) => {
  res.send({ express: 'EXPRESS SERVER IS CONNECTED TO REACT' });
});