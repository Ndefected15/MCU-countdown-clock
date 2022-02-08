const sequelize = require('../config/connection');
const seedTVShows = require('./tvshowData');
const seedFilms = require('./films')
const seedPhase = require('./phase')

const seedAll = async() => {
    await sequelize.sync({ force: true });

    await seedTVShows();

    await seedFilms();

    await seedPhase();

    process.exit(0);
};

seedAll();