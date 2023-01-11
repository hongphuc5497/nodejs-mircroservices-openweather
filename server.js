const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('client'));
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

const weatherRouter = require('./routes/weather.js');
const aboutRouter = require('./routes/about.js');

const HOST = 'localhost';
const PORT = 9999;

app.use('/weather', weatherRouter);
app.use('/about', aboutRouter);

app.listen(PORT, HOST, () => console.info(`Server running on ${HOST}:${PORT}`));
