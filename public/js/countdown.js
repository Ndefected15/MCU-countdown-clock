// Global variable to hold the existing interval for the countdown
let countdownInterval;

// Method to handle the countdown logic and making changes to front-end footer
const countdownHandler = (releaseDate, filmTitle) => {
	// Clears previous countdown
	if (countdownInterval != null) {
		clearInterval(countdownInterval);
	}
    // Extracts film's release date
    const countdownDate = new Date(releaseDate).getTime();

    // Initializing constant for changing footer text according to the movie chosen
    const footerText = document.querySelector('.footer');

    // Sets an interval to repeat instructions every second, thus creating the countdown
    countdownInterval = setInterval(() => {
        const now = new Date().getTime(); // Current date/time

        let distance; // Distance between release date and current time
        let isReleased; // Boolean to facilitate creating logic and minimizing parameters

        if (countdownDate >= now) {
            distance = countdownDate - now;
            isReleased = false;
        } else {
            distance = now - countdownDate;
            isReleased = true;
        }
        // Sets logic for timer and stores info in array
        const timerData = setCountdownTimer(distance, isReleased);

        // Method call for creating countdown display
        setCountdownDisplay(isReleased, timerData, filmTitle, footerText);
    }, 1000); // Interval of 1 second
};

// Initializes timer and calls method to create front-end
const setCountdownTimer = (distance, isReleased) => {
    // Offset prevents there being 0 seconds twice when countdown switches direction
    let timerOffset;

    if (!isReleased) {
        timerOffset = 0;
    } else {
        timerOffset = 1;
    }

    // Initializing timer values
	const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000) + timerOffset;

    return { years, days, hours, minutes, seconds };
};

// Creates and formats countdown display
const setCountdownDisplay = (isReleased, timerData, filmTitle, footerText) => {
    // Deconstructs timerData for easy usage
    const { years, days, hours, minutes, seconds } = timerData;

    // Operator refers to minus sign when countdown is negative, message changes depending on release date
    let operator;
    let message;

    // Changes way countdown is displayed depending on if the film was released or not
    if (!isReleased) {
        operator = '';
        message = 'releases in...';
    } else {
        operator = '-';
        message = 'was released...';
    }

    // Dynamically formats countdown by removing obsolete information
    if (years !== 0) {
        footerText.innerHTML = `<span>${filmTitle} </span>${message} <span>${operator}${years}y ${days}d ${hours}h ${minutes}m ${seconds}s</span>`;
    } else if ((days === 0) & (hours === 0) & (minutes === 0)) {
        footerText.innerHTML = `<span>${filmTitle} </span>${message} <span>${operator}${seconds}s</span>`;
    } else if ((days === 0) & (hours === 0)) {
        footerText.innerHTML = `<span>${filmTitle} </span>${message} <span>${operator}${minutes}m ${seconds}s</span>`;
    } else if ((days === 0)) {
        footerText.innerHTML = `<span>${filmTitle} </span>${message} <span>${operator}${hours}h ${minutes}m ${seconds}s</span>`;
    } else {
		footerText.innerHTML = `<span>${filmTitle} </span>${message} <span>${operator}${days}d ${hours}h ${minutes}m ${seconds}s</span>`;
	}
};

// Fetches from API to get film information
const getFilmData = async (id) => {
	const response = await fetch(`/api/films/${id}`, {
		method: 'GET'
	});
	const film = await response.json();
	return film;
}

// TODO: Implement countdown functionality for tv shows
// Fetches from API to get tv show information
const getTvShowData = async (id) => {
    const response = await fetch(`/api/tvshow/${id}`, {
        method: 'GET',
    });
	const tvshow = await response.json();
	return tvshow;
}

const countdownSelectionListener = () => {
	// TODO: Add functionality for tv shows in case they are added to the homepage
    //  Click event listener for every title
    const titles = document.querySelectorAll('.movie-list-item');

    if (titles.length !== 0) {
        for (let i = 0; i < titles.length; i++) {
			// Gets ID of title that was clicked
            titles[i].onclick = async () => {
				// Stores selection id into filmId
                let filmId = titles[i].id;

				// Extracts release date and title from fetch call to films
                getFilmData(filmId).then((film) => {
					// Calls new countdown
                    countdownHandler(film.release_date, film.title);
                });
            };
        }
    }
};

countdownSelectionListener();