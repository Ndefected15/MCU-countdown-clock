const sequelize = require('../config/connection');
const seedTVShows = require('./tvshowData');
const seedMovies = require('./movieData');
const seedPhaseOne = require('./phaseOne');
const seedPhaseTwo = require('./phaseTwo');
const seedPhaseThree = require('./phaseThree');
const seedPhaseFour = require('./phaseFour');

const seedAll = async() => {
    await sequelize.sync({ force: true });

    await seedTVShows();

    await seedMovies();

    await seedPhaseOne();

    await seedPhaseTwo();

    await seedPhaseThree();

    await seedPhaseFour();

    process.exit(0);
};

seedAll();