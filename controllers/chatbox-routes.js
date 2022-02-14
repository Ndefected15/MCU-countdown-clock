const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for chatbox
router.get('/', withAuth, (req, res) => {
	console.log(req.session);
	console.log('======================');
	Post.findAll({
		where: {
			user_id: req.session.user_id,
		},
		attributes: [
			'id',
			'post_comment',
			'title',
			'created_at',
			[
				sequelize.literal(
					'(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'
				),
				'vote_count',
			],
		],
		include: [
			{
				model: Comment,
				attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
				include: {
					model: User,
					attributes: ['email'],
				},
			},
			{
				model: User,
				attributes: ['email'],
			},
		],
	})
		.then((dbPostData) => {
			const posts = dbPostData.map((post) => post.get({ plain: true }));
			res.render('./partials/chatbox.handlebars', { posts, loggedIn: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get('/post/:id', (req, res) => {
	Post.findOne({
		where: {
			id: req.params.id,
		},
		attributes: [
			'id',
			'post_comment',
			'title',
			'created_at',
			[
				sequelize.literal(
					'(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'
				),
				'vote_count',
			],
		],
		include: [
			{
				model: Comment,
				attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
				include: {
					model: User,
					attributes: ['email'],
				},
			},
			{
				model: User,
				attributes: ['email'],
			},
		],
	})
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: 'No post found with this id' });
				return;
			}

			const post = dbPostData.get({ plain: true });

			res.render('./partials/chatbox.handlebars', {
				post,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get('/edit/:id', withAuth, (req, res) => {
	Post.findByPk(req.params.id, {
		attributes: [
			'id',
			'post_comment',
			'title',
			'created_at',
			[
				sequelize.literal(
					'(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'
				),
				'vote_count',
			],
		],
		include: [
			{
				model: Comment,
				attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
				include: {
					model: User,
					attributes: ['email'],
				},
			},
			{
				model: User,
				attributes: ['email'],
			},
		],
	})
		.then((dbPostData) => {
			if (dbPostData) {
				const post = dbPostData.get({ plain: true });

				res.render('edit-post', {
					post,
					loggedIn: true,
				});
			} else {
				res.status(404).end();
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
