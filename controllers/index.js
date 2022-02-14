const router = require('express').Router();

const apiRoutes = require('./api');
const moviepageRoutes = require('./moviepage-routes');
const tvshowRoutes = require('./tvshow-routes');
const homeRoutes = require('./homepage-routes');
const chatboxRoutes = require('./chatbox-routes');
const upcomingRoutes = require('./upcoming-routes');
const tvshowPageRoutes = require('./tvshowpage-routes');

router.use('/', homeRoutes);
router.use('/dashboard', chatboxRoutes);
router.use('/api', apiRoutes);
router.use('/movie-page', moviepageRoutes);
router.use('/tvshow', tvshowRoutes);
router.use('/upcoming', upcomingRoutes);
router.use('/tvshow-page', tvshowPageRoutes);

router.use((req, res) => {
	res.status(404).end();
});

module.exports = router;
