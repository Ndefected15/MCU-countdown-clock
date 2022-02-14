const router = require('express').Router();
const sequelize = require('../config/connection');
const { Films, Phase, Post, User, Comment, Vote } = require('../models');

// get all posts for main
router.get('/', (req, res) => {
    // find all products
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
        .then((dbFilmData) => res.json(dbFilmData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    // be sure to include its associated Category and Tag data
});

// get single post
router.get('/:id', (req, res) => {
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
                'logo',
            ],
            where: {
                id: req.params.id,
            },
            includes: [{
                model: Phase,
                attributes: ['phase_order'],
            }, ],
        })
        .then((dbFilmData) => res.json(dbFilmData))
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

    res.render('login', { layout: false });
});

module.exports = router;