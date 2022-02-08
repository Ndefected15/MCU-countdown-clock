const { PhaseOne } = require('../models')

const phaseOneData = [{
        id: 1,
        title: 'Iron Man',
        overview: "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
        release_date: new Date(2008, 4, 2),
        directed_by: 'Jon Favreau',
        poster_horizontal: 'PostersH/Iron_Man.jfif',
        background: 'Background/Iron_Man_1.jfif',
        logo: 'Logo/Iron_Man.png'
    },
    {
        id: 2,
        title: 'Iron Man 2',
        overview: 'With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and "Rhodey" Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.',
        release_date: new Date(2010, 4, 7),
        directed_by: 'Jon Favreau',
        poster_horizontal: 'PostersH/Iron_Man_2.jfif',
        background: 'Background/Iron_Man_2.jfif',
        logo: 'Logo/Iron_Man_2.png'
    },
    {
        id: 3,
        title: 'Thor',
        overview: "As the son of Odin, king of the Norse gods, Thor will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki, Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
        release_date: new Date(2011, 4, 6),
        directed_by: 'Kenneth Branagh',
        poster_horizontal: 'PostersH/Thor.jfif',
        background: 'Background/Thor.jfif',
        logo: 'Logo/Thor.png'
    },
    {
        id: 4,
        title: 'Captain America: The First Avenger',
        overview: "Marvel's 'Captain America: The First Avenger' focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America.",
        release_date: new Date(2011, 6, 22),
        directed_by: 'Joe Johnston',
        poster_horizontal: 'PostersH/Captain_America.jfif',
        background: 'Background/Captain_America.jfif',
        logo: 'Logo/Captain_America_First_Avenger.png'
    },
    {
        id: 5,
        title: 'The Avengers',
        overview: 'Marvel Studios presents in association with Paramount Pictures "Marvel\'s The Avengers"--the super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.',
        release_date: new Date(2012, 4, 4),
        directed_by: 'Joss Whedon',
        poster_horizontal: 'PostersH/Avengers.jfif',
        background: 'Background/Avengers.jfif',
        logo: 'Logo/Avengers.png'
    },
];

const seedPhaseOne = () => PhaseOne.bulkCreate(phaseOneData);

module.exports = seedPhaseOne;