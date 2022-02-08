const { PhaseTwo } = require('../models')

const phaseTwoData = [{
        id: 1,
        title: 'Iron Man 3',
        overview: 'Marvel\'s "Iron Man 3" pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy\'s hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man',
        release_date: new Date(2013, 4, 3),
        directed_by: 'Shane Black',
        poster_horizontal: 'PostersH/Iron_Man_3.jfif',
        background: 'Background/Iron_Man_3.jfif',
        logo: 'Logo/Iron_Man_3.png'
    },
    {
        id: 2,
        title: 'Thor: The Dark World',
        overview: 'In the aftermath of Marvel\'s "Thor" and "Marvel\'s The Avengers," Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.',
        release_date: new Date(2013, 10, 8),
        directed_by: 'Alan Taylor',
        poster_horizontal: 'PostersH/Thor_The_Dark_World.jfif',
        background: 'Background/Thor_The_Dark_World.jfif',
        logo: 'Logo/Thor_The_Dark_World.png'
    },
    {
        id: 3,
        title: 'Captain America: The Winter Soldier',
        overview: 'After the cataclysmic events in New York with The Avengers, Marvel\'s "Captain America: The Winter Soldier," finds Steve Rogers, aka Captain America, living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy--the Winter Soldier.',
        release_date: new Date(2014, 3, 4),
        directed_by: 'Anthony Russo, Joe Russo',
        poster_horizontal: 'PostersH/Captain_America_The_Winter_Soldier.jfif',
        background: 'Background/Captain_America_The_Winter_Soldier.jfif',
        logo: 'Logo/Captain_America_The_Winter_Soldier.png'
    },
    {
        id: 4,
        title: 'Guardians of the Galaxy',
        overview: 'An action-packed, epic space adventure, Marvel\'s "Guardians of the Galaxy," expands the Marvel Cinematic Universe into the cosmos, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe. To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits--Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora; and the revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand--with the galaxy\'s fate in the balance.',
        release_date: new Date(2014, 7, 1),
        directed_by: 'James Gunn',
        poster_horizontal: 'PostersH/GOTG.jfif',
        background: 'Background/GOTG.jfif',
        logo: 'Logo/GOTG.png'
    },
    {
        id: 5,
        title: 'Avengers: Age of Ultron',
        overview: "Marvel Studios presents 'Avengers: Age of Ultron', the epic follow-up to the biggest Super Hero movie of all time. When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth's Mightiest Heroes, including Iron Man, Captain America, Thor, The Incredible Hulk, Black Widow and Hawkeye, are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to the Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
        release_date: new Date(2015, 4, 1),
        directed_by: 'Joss Whedon',
        poster_horizontal: 'PostersH/Avengers_2.jfif',
        background: 'Background/Avengers_AoU.jfif',
        logo: 'Logo/Avengers_AoU.png'
    },
    {
        id: 6,
        title: 'Ant-Man',
        overview: 'The next evolution of the Marvel Cinematic Universe brings a founding member of The Avengers to the big screen for the first time with Marvel Studios\' "Ant-Man." Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.',
        release_date: new Date(2015, 6, 17),
        directed_by: 'Peyton Reed',
        poster_horizontal: 'PostersH/Ant-Man.jfif',
        background: 'Background/Ant-Man.jfif',
        logo: 'Logo/Ant-Man.png'
    },
];

const seedPhaseTwo = () => PhaseTwo.bulkCreate(phaseTwoData);

module.exports = seedPhaseTwo;