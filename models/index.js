const Movies = require('./Movies');
const TvShow = require('./TvShow');
const PhaseOne = require('./PhaseOne');
const PhaseTwo = require('./PhaseTwo');
const PhaseThree = require('./PhaseThree');

Movies.hasMany(TvShow, {
    foreignKey: 'gallery_id',
});

TvShow.belongsTo(Movies, {
    foreignKey: 'gallery_id',
});

PhaseOne.hasMany(Movies, {
    foreignKey: 'gallery_id',
});

PhaseTwo.belongsTo(Movies, {
    foreignKey: 'gallery_id',
});

PhaseThree.belongsTo(Movies, {
    foreignKey: 'gallery_id',
});

module.exports = { Movies, TvShow, PhaseOne, PhaseTwo, PhaseThree };