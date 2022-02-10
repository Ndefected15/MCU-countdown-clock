const router = require('express').Router();
const sequelize = require('../config/connection');
const { Films, Phase, Post, User, Comment, Vote } = require('../models');

// get all posts for main
router.get('/', (req, res) => {
    console.log('======================');
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

            includes: [{
                model: Phase,
                attributes: ['phase_order'],
            }, ],
        })
        .then((dbPostData) => {
            const films = dbPostData.map((post) => post.get({ plain: true }));

            res.render('login', {
                films,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get single post
router.get('/:id', (req, res) => {
    console.log('======================');
    Films.findOne({
            attributes: [
                'id',
                'title',
                'overview',
                'release_date',
                'directed_by',
                'poster_horizontal',
                'background',
                'release_date',
                'logo'
            ],
            where: {
                id: req.params.id
            },
            includes: [{
                model: Phase,
                attributes: ['phase_order'],
            }, ],
        })
        .then((dbPostData) => {
            const films = dbPostData.map((post) => post.get({ plain: true }));

            res.render('login', {
                films,
            });
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