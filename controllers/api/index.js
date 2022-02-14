const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const filmsRoutes = require('./films');
const commentRoutes = require('./comment-routes');
const tvShowRoutes = require('./tvshow');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/films', filmsRoutes);
router.use('/tvshow', tvShowRoutes);

module.exports = router;
