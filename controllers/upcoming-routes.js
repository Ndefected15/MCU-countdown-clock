const router = require('express').Router();
const sequelize = require('../config/connection');
const { Films, Phase, TvShow } = require('../models');

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

            res.render('upcoming', { layout: false });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;