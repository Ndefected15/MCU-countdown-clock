// Global variable to hold the current interval for the countdown
let countdownInterval;

// Method to handle the countdown logic and making changes to front-end footer
const countdownHandler = (releaseDate, filmTitle) => {
    // Extracts film's release date
    const countdownDate = new Date(releaseDate).getTime();

    // Initializing variable for changing footer text according to the movie chosen
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

    // Initializing variables for timer
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000) + timerOffset;

    return { days, hours, minutes, seconds };
};

// Creates and formats countdown display
const setCountdownDisplay = (isReleased, timerData, filmTitle, footerText) => {
    // Deconstructs timerData for easy usage
    const { days, hours, minutes, seconds } = timerData;

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
    if (days !== 0) {
        footerText.innerHTML = `<span>${filmTitle} </span>${message} <span>${operator}${days}d ${hours}h ${minutes}m ${seconds}s</span>`;
    } else if ((days === 0) & (hours === 0) & (minutes === 0)) {
        footerText.innerHTML = `<span>${filmTitle} </span>${message} <span>${operator}${seconds}s</span>`;
    } else if ((days === 0) & (hours === 0)) {
        footerText.innerHTML = `<span>${filmTitle} </span>${message} <span>${operator}${minutes}m ${seconds}s</span>`;
    } else if (days === 0) {
        footerText.innerHTML = `<span>${filmTitle} </span>${message} <span>${operator}${hours}h ${minutes}m ${seconds}s</span>`;
    }
};

// Fetches from API to get film information
const getFilmData = (id) =>
    fetch(`/api/films/${id}`, {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) => data);

// Fetches from API to get tv show information
const getTvShowData = (id) =>
    fetch(`/api/tvshow/${id}`, {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) => data);

const countdownSelectionListener = () => {
    //  Click event listener for every title
    const titles = document.querySelectorAll('.movie-list-item');

    if (titles.length !== 0) {
        for (let i = 0; i < titles.length; i++) {
			// Gets ID of title that was clicked
            titles[i].onclick = () => {
				// Parses string to int and stores into filmId
                let filmId = parseInt(titles[i].id);

                getFilmData(filmId).then((film) => {
                    let releaseDate = film.release_date;
                    let filmTitle = film.title;
                    clearInterval(countdownInterval); // Clears previous countdown
                    countdownHandler(releaseDate, filmTitle); // Calls new countdown
                });
            };
        }
    }
};

countdownSelectionListener();