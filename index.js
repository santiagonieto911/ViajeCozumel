const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', require('./routes/index'));

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});