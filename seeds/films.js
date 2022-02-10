<<<<<<< HEAD
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
=======
const { Films } = require('../models');

const filmData = [{
        id: 1,
        title: 'Iron Man',
        overview: "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
        release_date: new Date(2008, 4, 2),
        directed_by: 'Jon Favreau',
        poster_horizontal: 'PostersH/Iron_Man.jfif',
        background: 'Background/Iron_Man_1.jfif',
        logo: 'Logo/Iron_Man.png',
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
    {
        id: 6,
        title: 'Iron Man 3',
        overview: 'Marvel\'s "Iron Man 3" pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy\'s hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man',
        release_date: new Date(2013, 4, 3),
        directed_by: 'Shane Black',
        poster_horizontal: 'PostersH/Iron_Man_3.jfif',
        background: 'Background/Iron_Man_3.jfif',
        logo: 'Logo/Iron_Man_3.png'
    },
    {
        id: 7,
        title: 'Thor: The Dark World',
        overview: 'In the aftermath of Marvel\'s "Thor" and "Marvel\'s The Avengers," Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.',
        release_date: new Date(2013, 10, 8),
        directed_by: 'Alan Taylor',
        poster_horizontal: 'PostersH/Thor_The_Dark_World.jfif',
        background: 'Background/Thor_The_Dark_World.jfif',
        logo: 'Logo/Thor_The_Dark_World.png'
    },
    {
        id: 8,
        title: 'Captain America: The Winter Soldier',
        overview: 'After the cataclysmic events in New York with The Avengers, Marvel\'s "Captain America: The Winter Soldier," finds Steve Rogers, aka Captain America, living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy--the Winter Soldier.',
        release_date: new Date(2014, 3, 4),
        directed_by: 'Anthony Russo, Joe Russo',
        poster_horizontal: 'PostersH/Captain_America_The_Winter_Soldier.jfif',
        background: 'Background/Captain_America_The_Winter_Soldier.jfif',
        logo: 'Logo/Captain_America_The_Winter_Soldier.png'
    },
    {
        id: 9,
        title: 'Guardians of the Galaxy',
        overview: 'An action-packed, epic space adventure, Marvel\'s "Guardians of the Galaxy," expands the Marvel Cinematic Universe into the cosmos, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe. To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits--Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora; and the revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand--with the galaxy\'s fate in the balance.',
        release_date: new Date(2014, 7, 1),
        directed_by: 'James Gunn',
        poster_horizontal: 'PostersH/GOTG.jfif',
        background: 'Background/GOTG.jfif',
        logo: 'Logo/GOTG.png'
    },
    {
        id: 10,
        title: 'Avengers: Age of Ultron',
        overview: "Marvel Studios presents 'Avengers: Age of Ultron', the epic follow-up to the biggest Super Hero movie of all time. When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth's Mightiest Heroes, including Iron Man, Captain America, Thor, The Incredible Hulk, Black Widow and Hawkeye, are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to the Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
        release_date: new Date(2015, 4, 1),
        directed_by: 'Joss Whedon',
        poster_horizontal: 'PostersH/Avengers_2.jfif',
        background: 'Background/Avengers_AoU.jfif',
        logo: 'Logo/Avengers_AoU.png'
    },
    {
        id: 11,
        title: 'Ant-Man',
        overview: 'The next evolution of the Marvel Cinematic Universe brings a founding member of The Avengers to the big screen for the first time with Marvel Studios\' "Ant-Man." Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.',
        release_date: new Date(2015, 6, 17),
        directed_by: 'Peyton Reed',
        poster_horizontal: 'PostersH/Ant-Man.jfif',
        background: 'Background/Ant-Man.jfif',
        logo: 'Logo/Ant-Man.png'
    },
    {
        id: 12,
        title: 'Captain America: Civil War',
        overview: "Marvel's 'Captain America: Civil War' finds Steve Rogers leading the newly formed team of Avengers in their continued efforts to safeguard humanity. But after another incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to oversee and direct the team. The new status quo fractures the Avengers, resulting in two campsÔÇöone led by Steve Rogers and his desire for the Avengers to remain free to defend humanity without government interference, and the other following Tony Stark's surprising decision to support government oversight and accountability.",
        release_date: new Date(2016, 4, 6),
        directed_by: 'Anthony Russo, Joe Russo',
        poster_horizontal: 'PostersH/Captain_America_Civil_War.jfif',
        background: 'Background/Captain_America_Civil_War.jfif',
        logo: 'Logo/Captain_America_Civil_War.png'
    },
    {
        id: 13,
        title: 'Doctor Strange',
        overview: 'From Marvel Studios comes "Doctor Strange", the story of world-famous neurosurgeon Dr. Stephen Strange whose life changes forever after a horrific car accident robs him of the use of his hands. When traditional medicine fails him, he is forced to look for healing, and hope, in an unlikely place - mysterious enclave known as Kamar-Taj. He quickly learns that this is not just a center for healing but also the front line of a battle against unseen dark forces bent on destroying our reality. Before long StrangeÔÇöarmed with newly acquired magical powers - is forced to choose whether to return to his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.',
        release_date: new Date(2016, 10, 4),
        directed_by: 'Scott Derrickson',
        poster_horizontal: 'PostersH/Doctor_Strange.jfif',
        background: 'Background/Doctor_Strange.jfif',
        logo: 'Logo/Doctor_Strange.png'
    },
    {
        id: 14,
        title: 'Guardians of the Galaxy Vol. 2',
        overview: "Set to the backdrop of 'Awesome Mixtape #2,' Marvel's Guardians of the Galaxy Vol. 2 continues the team's adventures as they traverse the outer reaches of the cosmos. The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage. Old foes become new allies and fan-favorite characters from the classic comics will come to our heroes' aid as the Marvel cinematic universe continues to expand.",
        release_date: new Date(2017, 4, 5),
        directed_by: 'James Gunn',
        poster_horizontal: 'PostersH/GOTG_2.jfif',
        background: 'Background/GOTG_2.jfif',
        logo: 'Logo/GOTG_2.png'
    },
    {
        id: 15,
        title: 'Thor: Ragnarok',
        overview: 'Thor is imprisoned on the other side of the universe without his mighty hammer and finds himself in a race against time to get back to Asgard to stop Ragnarok - the destruction of his homeworld and the end of Asgardian civilization - at the hands of an all-powerful new threat, the ruthless Hela. But first he must survive a deadly gladiatorial contest that pits him against his former ally and fellow Avenger - the Incredible Hulk!',
        release_date: new Date(2018, 1, 16),
        directed_by: 'Taika Waititi',
        poster_horizontal: 'PostersH/Thor_Ragnarok.jfif',
        background: 'Background/Thor_Ragnarok.jfif',
        logo: 'Logo/Thor_Ragnarok.png'
    },
    {
        id: 16,
        title: 'Black Panther',
        overview: "Marvel Studios' \"Black Panther\" follows T'Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T'Challa's mettle as king - and Black Panther - is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.",
        release_date: new Date(2015, 4, 1),
        directed_by: 'Ryan Coogler',
        poster_horizontal: 'PostersH/Black_Panther.jfif',
        background: 'Background/Black_Panther.jfif',
        logo: 'Logo/Black_Panther.png'
    },
    {
        id: 17,
        title: 'Avengers: Infinity War',
        overview: 'An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios\' "Avengers: Infinity War" brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
        release_date: new Date(2018, 3, 27),
        directed_by: 'Anthony Russo, Joe Russo',
        poster_horizontal: 'PostersH/Avengers_Infinity_War.jfif',
        background: 'Background/Avengers_Infinity_War.jfif',
        logo: 'Logo/Avengers_Infinity_War.png'
    },
    {
        id: 18,
        title: 'Ant-Man and The Wasp',
        overview: 'From the Marvel Cinematic Universe comes a new chapter featuring heroes with the astonishing ability to shrink: "Ant-Man and The Wasp.". In the aftermath of "Captain America: Civil War", Scott Lang (Paul Rudd) grapples with the consequences of his choices as both a Super Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he\'s confronted by Hope van Dyne (Evangeline Lilly) and Dr. Hank Pym (Michael Douglas) with an urgent new mission. Scott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past.',
        release_date: new Date(2018, 6, 6),
        directed_by: 'Peyton Reed',
        poster_horizontal: 'PostersH/Ant-Man_and_The_Wasp.jfif',
        background: 'Background/Ant-Man_and_The_Wasp.jfif',
        logo: 'Logo/Ant-Man_and_The_Wasp.png'
    },
    {
        id: 19,
        title: 'Captain Marvel',
        overview: 'Set in the 1990s, Marvel Studios\' "Captain Marvel" is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe\'s most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.',
        release_date: new Date(2019, 2, 8),
        directed_by: 'Anna Boden, Ryan Fleck',
        poster_horizontal: 'PostersH/Captain_Marvel.jfif',
        background: 'Background/Captain_Marvel.jfif',
        logo: 'Logo/Captain_Marvel.png'
    },
    {
        id: 20,
        title: 'Avengers: Endgame',
        overview: 'The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios\' grand conclusion to twenty-two films, "Avengers: Endgame."',
        release_date: new Date(2019, 3, 26),
        directed_by: 'Anthony Russo, Joe Russo',
        poster_horizontal: 'PostersH/Avengers_Endgame.jfif',
        background: 'Background/Avengers_Endgame.jfif',
        logo: 'Logo/Avenger_Endgame'
    },
    {
        id: 21,
        title: 'Black Widow',
        overview: "In Marvel Studios' action-packed spy thriller “Black Widow”, Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
        release_date: new Date(2021, 6, 9),
        directed_by: 'Cate Shortland',
        poster_horizontal: 'PostersH/Black_Widow.jfif',
        background: 'Background/Black_Widow.jfif',
        logo: 'Logo/Black_Widow.png'
    },
    {
        id: 22,
        title: 'Shang-Chi and The Legend of The Ten Rings',
        overview: "Marvel Studios' \"Shang-Chi and The Legend of The Ten Rings\" stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film also stars Tony Leung as Wenwu, Awkwafina as Shang-Chi's friend Katy and Michelle Yeoh as Jiang Nan, as well as Fala Chen, Meng'er Zhang, Florian Munteanu and Ronny Chieng.",
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
>>>>>>> feature/countdown
