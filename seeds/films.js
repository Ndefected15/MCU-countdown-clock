const { Films } = require('../models');

const filmData = [{
        id: 1,
        title: 'Iron Man',
        overview: "After surviving an unexpected attack in enemy territory, jet-setting industrialist Tony Stark builds a high-tech suit of armor and vows to protect the world as Iron Man.",
        release_date: new Date(2008, 4, 2),
        directed_by: 'Jon Favreau',
        poster_horizontal: 'PostersH/Iron_Man.jfif',
        background: 'Background/Iron_Man_1.jfif',
        logo: 'Logo/Iron_Man.png',
    },
    {
        id: 2,
        title: 'Iron Man 2',
        overview: 'Tony Stark has declared himself Iron Man and installed world peace...or so he thinks. He soon realizes that not only is there a madman out to destroy him, but the very technology designed to save his life is slowly killing him.',
        release_date: new Date(2010, 4, 7),
        directed_by: 'Jon Favreau',
        poster_horizontal: 'PostersH/Iron_Man_2.jfif',
        background: 'Background/Iron_Man_2.jfif',
        logo: 'Logo/Iron_Man_2.png'
    },
    {
        id: 3,
        title: 'Thor',
        overview: "The Mighty Thor is set to ascend to the throne of the fantastic realm of Asgard, until his reckless arrogance reignites an ancient war. As a result, Thor is banished to Earth to live among humans. From Earth, Thor must make preparations to stop his evil brother Loki from dethroning Odin, seizing power and imposing his villainous rule on all of Asgard.",
        release_date: new Date(2011, 4, 6),
        directed_by: 'Kenneth Branagh',
        poster_horizontal: 'PostersH/Thor.jfif',
        background: 'Background/Thor.jfif',
        logo: 'Logo/Thor.png'
    },
    {
        id: 4,
        title: 'Captain America: The First Avenger',
        overview: "After being deemed unfit for military service, Steve Rogers volunteers for a top- secret research project that turns him into Captain America.",
        release_date: new Date(2011, 6, 22),
        directed_by: 'Joe Johnston',
        poster_horizontal: 'PostersH/Captain_America.jfif',
        background: 'Background/Captain_America_First_Avenger.jfif',
        logo: 'Logo/Captain_America_First_Avenger.png'
    },
    {
        id: 5,
        title: 'The Avengers',
        overview: 'When an unexpected enemy threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.',
        release_date: new Date(2012, 4, 4),
        directed_by: 'Joss Whedon',
        poster_horizontal: 'PostersH/Avengers.jfif',
        background: 'Background/Avengers.jfif',
        logo: 'Logo/Avengers.png'
    },
    {
        id: 6,
        title: 'Iron Man 3',
        overview: 'When Tony Stark/Iron Man finds his world reduced to rubble, one question haunts him: Does the man make the suit, or does the suit make the man?',
        release_date: new Date(2013, 4, 3),
        directed_by: 'Shane Black',
        poster_horizontal: 'PostersH/Iron_Man_3.jfif',
        background: 'Background/Iron_Man_3.jfif',
        logo: 'Logo/Iron_Man_3.png'
    },
    {
        id: 7,
        title: 'Thor: The Dark World',
        overview: 'While Thor fights to restore order across the cosmos, an ancient race led by vengeful Malekith returns to plunge the universe back into darkness.  Setting out on his most dangerous and personal journey yet, Thor is forced into an alliance with the treacherous Loki to save his people and those he loves...and our universe itself.',
        release_date: new Date(2013, 10, 8),
        directed_by: 'Alan Taylor',
        poster_horizontal: 'PostersH/Thor_The_Dark_World.jfif',
        background: 'Background/Thor_The_Dark_World.jfif',
        logo: 'Logo/Thor_The_Dark_World.png'
    },
    {
        id: 8,
        title: 'Captain America: The Winter Soldier',
        overview: 'In present-day Washington, D.C., Steve Rogers, aka Captain America, teams up with Black Widow and new ally the Falcon to battle a powerful yet shadowy enemy.',
        release_date: new Date(2014, 3, 4),
        directed_by: 'Anthony Russo, Joe Russo',
        poster_horizontal: 'PostersH/Captain_America_The_Winter_Soldier.jfif',
        background: 'Background/Captain_America_The_Winter_Soldier.jfif',
        logo: 'Logo/Captain_America_The_Winter_Soldier.png'
    },
    {
        id: 9,
        title: 'Guardians of the Galaxy',
        overview: 'Brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by a powerful villain with ambitions that threaten the entire universe. To evade capture, Quill joins with a quartet of disparate misfits: Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora; and revenge-driven Drax the Destroyer.',
        release_date: new Date(2014, 7, 1),
        directed_by: 'James Gunn',
        poster_horizontal: 'PostersH/GOTG.jfif',
        background: 'Background/GOTG.jfif',
        logo: 'Logo/GOTG.png'
    },
    {
        id: 10,
        title: 'Avengers: Age of Ultron',
        overview: "Good intentions wreak havoc when Tony Stark (Robert Downey Jr.) unwittingly creates Ultron, an A.I. monster who vows to achieve “world peace” via mass extinction. Now, the Avengers must reassemble to defeat him and save mankind.",
        release_date: new Date(2015, 4, 1),
        directed_by: 'Joss Whedon',
        poster_horizontal: 'PostersH/Avengers_2.jfif',
        background: 'Background/Avengers_AoU.jfif',
        logo: 'Logo/Avengers_AoU.png'
    },
    {
        id: 11,
        title: 'Ant-Man',
        overview: 'Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, to plan and pull off a heist that will save the world in Marvel Studios’ Ant-Man.',
        release_date: new Date(2015, 6, 17),
        directed_by: 'Peyton Reed',
        poster_horizontal: 'PostersH/Ant-Man.jfif',
        background: 'Background/Ant-Man.jfif',
        logo: 'Logo/Ant-Man.png'
    },
    {
        id: 12,
        title: 'Captain America: Civil War',
        overview: "Pressure mounts to hold the Avengers accountable for the destruction left in their wake after battling Ultron. When Captain America and Iron Man find themselves with opposing views, the Avengers take sides, leading to the ultimate battle between Earth's mightiest heroes.",
        release_date: new Date(2016, 4, 6),
        directed_by: 'Anthony Russo, Joe Russo',
        poster_horizontal: 'PostersH/Captain_America_Civil_War.jfif',
        background: 'Background/Captain_America_Civil_War.jfif',
        logo: 'Logo/Captain_America_Civil_War.png'
    },
    {
        id: 13,
        title: 'Doctor Strange',
        overview: 'In Marvel Studios’ Doctor Strange, a world-famous neurosurgeon loses the use of his hands in a horrific car accident. Seeking a cure, he finds powerful magic in a mysterious place known as Kamar-Taj, the front line of a battle against unseen dark forces bent on destroying our reality.',
        release_date: new Date(2016, 10, 4),
        directed_by: 'Scott Derrickson',
        poster_horizontal: 'PostersH/Doctor_Strange.jfif',
        background: 'Background/Doctor_Strange.jfif',
        logo: 'Logo/Doctor_Strange.png'
    },
    {
        id: 14,
        title: 'Guardians of the Galaxy Vol. 2',
        overview: "Set to the sounds of Awesome Mixtape #2, Marvel Studios’ Guardians of the Galaxy Vol. 2 continues the team’s adventures as they unravel the mystery of Star-Lord’s parentage.",
        release_date: new Date(2017, 4, 5),
        directed_by: 'James Gunn',
        poster_horizontal: 'PostersH/GOTG_2.jfif',
        background: 'Background/GOTG_2.jfif',
        logo: 'Logo/GOTG_2.png'
    },
    {
        id: 15,
        title: 'Thor: Ragnarok',
        overview: 'Thor must race against time to stop the seemingly imminent Ragnarok, a cataclysmic event that could end all of Asgardian civilization. Imprisoned on the other side of the universe and without his mighty hammer, Thor must overcome the odds to ensure that Asgard does not fall into the hands of the ruthless Hela. But first, he must face off against a fellow Avenger in a gladiatorial contest.',
        release_date: new Date(2018, 1, 16),
        directed_by: 'Taika Waititi',
        poster_horizontal: 'PostersH/Thor_Ragnarok.jfif',
        background: 'Background/Thor_Ragnarok.jfif',
        logo: 'Logo/Thor_Ragnarok.png'
    },
    {
        id: 16,
        title: 'Black Panther',
        overview: "When an old foe puts his homeland of Wakanda and the entire world at risk, young king T'Challa must release Black Panther’s full power to save them.",
        release_date: new Date(2015, 4, 1),
        directed_by: 'Ryan Coogler',
        poster_horizontal: 'PostersH/Black_Panther.jfif',
        background: 'Background/Black_Panther.jfif',
        logo: 'Logo/Black_Panther.png'
    },
    {
        id: 17,
        title: 'Avengers: Infinity War',
        overview: 'With the powerful Thanos on the verge of raining destruction upon the universe, the Avengers and their Super Hero allies risk everything in the ultimate showdown of all time.',
        release_date: new Date(2018, 3, 27),
        directed_by: 'Anthony Russo, Joe Russo',
        poster_horizontal: 'PostersH/Avengers_Infinity_War.jfif',
        background: 'Background/Avengers_Infinity_War.jfif',
        logo: 'Logo/Avengers_Infinity_War.png'
    },
    {
        id: 18,
        title: 'Ant-Man and The Wasp',
        overview: 'Scott Lang grapples with his choices as both a Super Hero and a father. As he struggles to balance his home life with his responsibilities as Ant-Man, he’s confronted with an urgent new mission and must once again put on the suit and fight alongside the Wasp.',
        release_date: new Date(2018, 6, 6),
        directed_by: 'Peyton Reed',
        poster_horizontal: 'PostersH/Ant-Man_and_The_Wasp.jfif',
        background: 'Background/Ant-Man_and_The_Wasp.jfif',
        logo: 'Logo/Ant-Man_and_The_Wasp.png'
    },
    {
        id: 19,
        title: 'Captain Marvel',
        overview: 'Marvel Studios’ Captain Marvel takes you on a spectacular adventure from the 1990s, tracing the path of Carol Danvers (Brie Larson) as she becomes one of the universe’s most powerful heroes. When a galactic war reaches Earth, she meets young agent Nick Fury (Samuel L. Jackson) at the center of a maelstrom, leading to her ultimate destiny as an Avenger!',
        release_date: new Date(2019, 2, 8),
        directed_by: 'Anna Boden, Ryan Fleck',
        poster_horizontal: 'PostersH/Captain_Marvel.jfif',
        background: 'Background/Captain_Marvel.jfif',
        logo: 'Logo/Captain_Marvel.png'
    },
    {
        id: 20,
        title: 'Avengers: Endgame',
        overview: 'The epic conclusion to the Infinity Saga that became a critically acclaimed worldwide phenomenon, this dramatic showdown pits the Avengers against Thanos. After devastating events wiped out half the world’s population and fractured their ranks, the remaining heroes struggle to move forward. But they must come together to restore order and harmony in the universe and bring their loved ones back.',
        release_date: new Date(2019, 3, 26),
        directed_by: 'Anthony Russo, Joe Russo',
        poster_horizontal: 'PostersH/Avengers_Endgame.jfif',
        background: 'Background/Avengers_Endgame.jfif',
        logo: 'Logo/Avenger_Endgame'
    },
    {
        id: 21,
        title: 'Black Widow',
        overview: "Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
        release_date: new Date(2021, 6, 9),
        directed_by: 'Cate Shortland',
        poster_horizontal: 'PostersH/Black_Widow.jfif',
        background: 'Background/Black_Widow.jfif',
        logo: 'Logo/Black_Widow.png'
    },
    {
        id: 22,
        title: 'Shang-Chi and The Legend of The Ten Rings',
        overview: "Shang-Chi must face the past he thought he left behind and confront his father, leader of the dangerous Ten Rings organization.",
        release_date: new Date(2021, 8, 3),
        directed_by: 'Destin Daniel Cretton',
        poster_horizontal: 'PostersH/Shang-Chi.jfif',
        background: 'Background/Shang_Chi.jfif',
        logo: 'Logo/Shang_Chi.png'
    },
    {
        id: 23,
        title: 'Eternals',
        overview: "Marvel Studios' Eternals features an exciting new team of Super Heroes in the Marvel Cinematic Universe, ancient aliens who have been living on Earth in secret for thousands of years. Following the events of Avengers: Endgame, an unexpected tragedy forces them out of the shadows to reunite against mankind's most ancient enemy, The Deviants.",
        release_date: new Date(2021, 10, 5),
        directed_by: 'Chloé Zhao',
        poster_horizontal: 'PostersH/Eternals.jfif',
        background: 'Background/Eternals.jfif',
        logo: 'Logo/Eternals.png'
    }
]

const seedFilms = () => Films.bulkCreate(filmData);

module.exports = seedFilms;
