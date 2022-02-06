const sequelize = require('../config/connection');
const seedTVShows = require('./tvshowData');
const seedMovies = require('./movieData');
const seedPhaseOne = require('./phaseOne');
const seedPhaseTwo = require('./phaseTwo');
const seedPhaseThree = require('./phaseThree');

const seedAll = async() => {
    await sequelize.sync({ force: true });

    await seedTVShows();

    await seedMovies();

    await seedPhaseOne();

    await seedPhaseTwo();

    await seedPhaseThree();

    process.exit(0);
};

seedAll();