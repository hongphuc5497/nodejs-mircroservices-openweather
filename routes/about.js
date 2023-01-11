const router = require('express').Router();
const { description, author } = require('../package.json');

router.get('/', (req, res) => {
	res.json({
		description,
		...author,
	});
});

module.exports = router;
