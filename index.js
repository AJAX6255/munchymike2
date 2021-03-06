const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const handleIndex = require('./routes/index');
const handleStart = require('./routes/start');
const handleMove = require('./routes/move');
const handleEnd = require('./routes/end');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.enable('verbose errors');
app.use(morgan('dev'));

// ROUTES
app.get('/', handleIndex);
app.post('/start', handleStart);
app.post('/move', handleMove);
app.post('/end', handleEnd);

app.listen(PORT, () =>
  console.log(`Server listening at http://127.0.0.1:${PORT}`),
);
