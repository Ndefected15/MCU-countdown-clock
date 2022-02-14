const router = require('express').Router();
const sequelize = require('../config/connection');
const { Films, Phase } = require('../models');

// get all posts for main
router.get('/', (req, res) => {
	console.log('======================');
	console.log(req.session);
	Films.findAll({
		attributes: [
			'id',
			'title',
			'overview',
			'release_date',
			'directed_by',
			'poster_horizontal',
			'background',
			'release_date',
			'logo',
		],

		includes: [
			{
				model: Phase,
				attributes: ['phase_order'],
			},
		],
	})
		.then((dbPostData) => {
			const films = dbPostData.map((post) => post.get({ plain: true }));

			res.render('homepage', {
				films,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get('/films/:id', async (req, res) => {
	try {
		const dbFilmsData = await Films.findByPk(req.params.id);

		const films = dbFilmsData.get({ plain: true });

		res.render('movie-page', { films });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/');
		return;
	}

	res.render('login', { layout: false });
});

module.exports = router;
