const router = require('express').Router();
// const homeRoutes = require('./home-routes');

const apiRoutes = require('./api');
const moviepageRoutes = require('./moviepage-routes');
const homeRoutes = require('./homepage-routes');
const dashboardRoutes = require('./chatbox-routes');
// router.use('/', homeRoutes);

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/movie-page', moviepageRoutes);

// router.use((req, res) => {
// 	res.status(404).end();
// });

module.exports = router;