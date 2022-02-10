const router = require('express').Router();
const { Films, Phase } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
    // find all products
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
        .then((dbFilmData) => res.json(dbFilmData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    // be sure to include its associated Category and Tag data
});

//get one id
router.get('/:id', (req, res) => {
    Films.findOne({
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
            where: {
                id: req.params.id,
            },
            includes: [{
                model: Phase,
                attributes: ['phase_order'],
            }, ],
        })
        .then((dbFilmData) => res.json(dbFilmData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
