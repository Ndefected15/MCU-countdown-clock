const { PhaseThree } = require('../models')

const phaseThreeData = [{
        id: 1,
        title: 'Captain America: Civil War',
        overview: "Marvel's 'Captain America: Civil War' finds Steve Rogers leading the newly formed team of Avengers in their continued efforts to safeguard humanity. But after another incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to oversee and direct the team. The new status quo fractures the Avengers, resulting in two campsÔÇöone led by Steve Rogers and his desire for the Avengers to remain free to defend humanity without government interference, and the other following Tony Stark's surprising decision to support government oversight and accountability.",
        release_date: new Date(2016, 4, 6),
        directed_by: 'Anthony Russo, Joe Russo',
        filename: 'PostersH/Captain_America_Civil_War.jfif'
    },
    {
        id: 2,
        title: 'Doctor Strange',
        overview: 'From Marvel Studios comes "Doctor Strange", the story of world-famous neurosurgeon Dr. Stephen Strange whose life changes forever after a horrific car accident robs him of the use of his hands. When traditional medicine fails him, he is forced to look for healing, and hope, in an unlikely place - mysterious enclave known as Kamar-Taj. He quickly learns that this is not just a center for healing but also the front line of a battle against unseen dark forces bent on destroying our reality. Before long StrangeÔÇöarmed with newly acquired magical powers - is forced to choose whether to return to his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.',
        release_date: new Date(2016, 10, 4),
        directed_by: 'Scott Derrickson',
        filename: 'PostersH/Doctor_Strange.jfif'
    },
    {
        id: 3,
        title: 'Guardians of the Galaxy Vol. 2',
        overview: "Set to the backdrop of 'Awesome Mixtape #2,' Marvel's Guardians of the Galaxy Vol. 2 continues the team's adventures as they traverse the outer reaches of the cosmos. The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage. Old foes become new allies and fan-favorite characters from the classic comics will come to our heroes' aid as the Marvel cinematic universe continues to expand.",
        release_date: new Date(2017, 4, 5),
        directed_by: 'James Gunn',
        filename: 'PostersH/GOTG_2.jfif'
    },
    {
        id: 4,
        title: 'Thor: Ragnarok',
        overview: 'Thor is imprisoned on the other side of the universe without his mighty hammer and finds himself in a race against time to get back to Asgard to stop Ragnarok - the destruction of his homeworld and the end of Asgardian civilization - at the hands of an all-powerful new threat, the ruthless Hela. But first he must survive a deadly gladiatorial contest that pits him against his former ally and fellow Avenger - the Incredible Hulk!',
        release_date: new Date(2018, 1, 16),
        directed_by: 'Taika Waititi',
        filename: 'PostersH/Thor_Ragnarok.jfif'
    },
    {
        id: 5,
        title: 'Black Panther',
        overview: "Marvel Studios' \"Black Panther\" follows T'Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T'Challa's mettle as king - and Black Panther - is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.",
        release_date: new Date(2015, 4, 1),
        directed_by: 'Ryan Coogler',
        filename: 'PostersH/Black_Panther.jfif',
    },
    {
        id: 6,
        title: 'Avengers: Infinity War',
        overview: 'An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios\' "Avengers: Infinity War" brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
        release_date: new Date(2018, 3, 27),
        directed_by: 'Anthony Russo, Joe Russo',
        filename: 'PostersH/Avengers_Infinity_War.jfif',
    },
    {
        id: 7,
        title: 'Ant-Man and The Wasp',
        overview: 'From the Marvel Cinematic Universe comes a new chapter featuring heroes with the astonishing ability to shrink: "Ant-Man and The Wasp.". In the aftermath of "Captain America: Civil War", Scott Lang (Paul Rudd) grapples with the consequences of his choices as both a Super Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he\'s confronted by Hope van Dyne (Evangeline Lilly) and Dr. Hank Pym (Michael Douglas) with an urgent new mission. Scott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past.',
        release_date: new Date(2018, 6, 6),
        directed_by: 'Peyton Reed',
        filename: 'PostersH/Ant-Man_and_The_Wasp.jfif',
    },
    {
        id: 8,
        title: 'Captain Marvel',
        overview: 'Set in the 1990s, Marvel Studios\' "Captain Marvel" is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe\'s most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.',
        release_date: new Date(2019, 2, 8),
        directed_by: 'Anna Boden, Ryan Fleck',
        filename: 'PostersH/Captain_Marvel.jfif',
    },
    {
        id: 9,
        title: 'Avengers: Endgame',
        overview: 'The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios\' grand conclusion to twenty-two films, "Avengers: Endgame."',
        release_date: new Date(2019, 3, 26),
        directed_by: 'Anthony Russo, Joe Russo',
        filename: 'PostersH/Avengers_Endgame.jfif',
    },
];

const seedPhaseThree = () => PhaseThree.bulkCreate(phaseThreeData);

module.exports = seedPhaseThree;