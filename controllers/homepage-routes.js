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

// get single post
router.get('/post/:id', (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: [
                'id',
                'post_url',
                'title',
                'created_at', [
                    sequelize.literal(
                        '(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'
                    ),
                    'vote_count',
                ],
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        })
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const post = dbPostData.get({ plain: true });

            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/films/:id', async(req, res) => {
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

    res.render('login');
});

module.exports = router;