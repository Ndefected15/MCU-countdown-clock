const { TvShow } = require('../models')

const tvshowData = [{
        id: 1,
        title: 'WandaVision',
        overview: 'Marvel Studios captivating new series "WandaVision" which premieres in early 2021 on Disney+. Starring Elizabeth Olsen and Paul Bettany, "WandaVision" marks the first series from Marvel Studios streaming exclusively on Disney+. The series is a blend of classic television and the Marvel Cinematic Universe in which Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems',
        release_date: new Date(2021, 0, 15),
        directed_by: 'Matt Shakman',
        phase: 4,
    },
    {
        id: 2,
        title: 'The Falcon and The Winter Soldier',
        overview: 'Following the events of "Avengers: Endgame" Sam Wilson/Falcon (Anthony Mackie) and Bucky Barnes/Winter Soldier (Sebastian Stan) team up in a global adventure that tests their abilities—and their patience—in Marvel Studios’ “The Falcon and The Winter Soldier.” The all-new series is directed by Kari Skogland; Malcolm Spellman is the head writer. Streaming exclusively on Disney+.',
        release_date: new Date(2021, 2, 19),
        directed_by: 'Kari Skogland',
        phase: 4,
    },
    {
        id: 3,
        title: 'Loki',
        overview: 'In Marvel Studios’ "Loki" the mercurial villain Loki (Tom Hiddleston) resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.” Kate Herron directs and Michael Waldron is head writer. Debuts on Disney+ in June 9, 2021.',
        release_date: new Date(2021, 5, 9),
        directed_by: 'Kate Herron',
        phase: 4,
    },
    {
        id: 4,
        title: 'What If...?',
        overview: '"What If…?" flips the script on the MCU, reimagining famous events from the films in unexpected ways. Marvel Studios’ first animated series focuses on different heroes from the MCU, featuring a voice cast that includes a host of stars who reprise their roles. Directed by Bryan Andrews with AC Bradley as head writer, “What If…?" launches exclusively on Disney+ on August 11, 2021.',
        release_date: new Date(2021, 7, 11),
        directed_by: 'Bryan Andrew',
        phase: 4,
    },
    {
        id: 5,
        title: 'Hawkeye',
        overview: 'Marvel Studios’ "Hawkeye" stars Jeremy Renner as Hawkeye, who teams up with another well-known archer from the Marvel comics, Kate Bishop, played by Hailee Steinfeld. The cast also includes Vera Farmiga, Fra Fee, Tony Dalton, Zahn McClarnon, Brian d’Arcy James and newcomer Alaqua Cox as Maya Lopez. “Hawkeye” is helmed by Rhys Thomas and directing duo Bert and Bertie.',
        release_date: new Date(2021, 10, 24),
        directed_by: 'Rhys Thomas, Bert and Bertie',
        phase: 4,
    },
    {
        id: 6,
        title: 'Moon Knight',
        overview: "Moon Knight follows Steven Grant, a mild-mannered gift-shop employee, who becomes plagued with blackouts and memories of another life. Steven discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As Steven/Marc's enemies converge upon them, they must navigate their complex identities while thrust into a deadly mystery among the powerful gods of Egypt.",
        release_date: new Date(2022, 2, 30),
        directed_by: 'Mohamed Diab',
        phase: 4,
    },
];

const seedTVShows = () => TvShow.bulkCreate(tvshowData);

module.exports = seedTVShows;