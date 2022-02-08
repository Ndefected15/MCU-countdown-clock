const { PhaseFour } = require('../models')

const phaseFourData = [{
        id: 1,
        title: 'Black Widow',
        overview: "In Marvel Studios' action-packed spy thriller “Black Widow”, Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
        release_date: new Date(2021, 6, 9),
        directed_by: 'Cate Shortland',
        poster_horizontal: 'PostersH/Black_Widow.jfif',
        background: 'Background/Black_Widow.jfif',
        logo: 'Logo/Black_Widow.png'
    },
    {
        id: 2,
        title: 'Shang-Chi and The Legend of The Ten Rings',
        overview: "Marvel Studios' \"Shang-Chi and The Legend of The Ten Rings\" stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film also stars Tony Leung as Wenwu, Awkwafina as Shang-Chi's friend Katy and Michelle Yeoh as Jiang Nan, as well as Fala Chen, Meng'er Zhang, Florian Munteanu and Ronny Chieng.",
        release_date: new Date(2021, 8, 3),
        directed_by: 'Destin Daniel Cretton',
        poster_horizontal: 'PostersH/Shang-Chi.jfif',
        background: 'Background/Shang_Chi.jfif',
        logo: 'Logo/Shang_Chi.png'
    },
    {
        id: 3,
        title: 'Eternals',
        overview: "Marvel Studios' Eternals features an exciting new team of Super Heroes in the Marvel Cinematic Universe, ancient aliens who have been living on Earth in secret for thousands of years. Following the events of Avengers: Endgame, an unexpected tragedy forces them out of the shadows to reunite against mankind's most ancient enemy, The Deviants.",
        release_date: new Date(2021, 10, 5),
        directed_by: 'Chloé Zhao',
        poster_horizontal: 'PostersH/Eternals.jfif',
        background: 'Background/Eternals.jfif',
        logo: 'Logo/Eternals.png'
    },
];

const seedPhaseFour = () => PhaseFour.bulkCreate(phaseFourData);

module.exports = seedPhaseFour;