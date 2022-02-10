const router = require('express').Router();
// const homeRoutes = require('./home-routes');

const apiRoutes = require('./api');
const homeRoutes = require('./homepage-routes');
const dashboardRoutes = require('./chatbox-routes');
// router.use('/', homeRoutes);

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

// router.use((req, res) => {
// 	res.status(404).end();
// });

module.exports = router;
