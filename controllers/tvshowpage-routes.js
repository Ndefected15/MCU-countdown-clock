const router = require('express').Router();
const sequelize = require('../config/connection');
const { TvShow } = require('../models');

// get all posts for main
router.get('/', (req, res) => {
	console.log('======================');
	TvShow.findAll({
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
	})
		.then((dbPostData) => {
			const tvshows = dbPostData.map((post) => post.get({ plain: true }));

			res.render('tvshow', {
				tvshows,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get('/tvshow/:id', async (req, res) => {
	try {
		const dbTVData = await TvShow.findByPk(req.params.id);

		const tvshows = dbTVData.get({ plain: true });

		res.render('tvshow-page', { tvshows });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
