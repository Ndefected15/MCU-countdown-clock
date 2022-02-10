const { Phase } = require('../models');

const phaseData = [{
        phase_order: 'Phase One',
    },
    {
        phase_order: 'Phase Two',
    },
    {
        phase_order: 'Phase Three',
    },
    {
        phase_order: 'Phase Four',
    },
];

const seedPhase = () => Phase.bulkCreate(phaseData);

module.exports = seedPhase;
