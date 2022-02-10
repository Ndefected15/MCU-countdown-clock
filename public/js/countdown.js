// Method to handle the countdown logic and making changes to front-end footer
let countdownHandler = (releaseDate, filmTitle) => {
	// Extracts film's release date
	const countdownDate = new Date(releaseDate).getTime();

	let footerText = document.querySelector('.footer');

	// Sets an interval to repeat instructions every second, thus creating the countdown
	setInterval(() => {
		const now = new Date().getTime();
		let distance;

		if (countdownDate >= now) {
			distance = countdownDate - now;
		} else {
			distance = now - countdownDate;
		}
		// Sets logic for timer and then calls function to format front-end
		setCountdown(distance, countdownDate, now, filmTitle, footerText);
	}, 1000); // Interval of 1 second
};

let setCountdown = (distance, countdownDate, now, filmTitle, footerText) => {
    // Offset prevents there being 0 seconds twice when countdown switches direction
	let timerOffset;
	if (countdownDate >= now) {
		timerOffset = 0;
	} else {
		timerOffset = 1;
	}
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000) + timerOffset;

	setCountdownDisplay(
		countdownDate,
		now,
		days,
		hours,
		minutes,
		seconds,
		filmTitle,
		footerText
	);
};

let setCountdownDisplay = (
	countdownDate,
	now,
	days,
	hours,
	minutes,
	seconds,
	filmTitle,
	footerText
) => {
	let operator = '';
	let message = '';

	if (countdownDate >= now) {
		operator = '';
		message = 'releases in...';
	} else {
		operator = '-';
		message = 'was released...';
	}

	if (days !== 0) {
		footerText.innerHTML =
			'<span>' +
			filmTitle +
			'&nbsp</span>' +
			message +
			'&nbsp<span>' +
			operator +
			days +
			'd ' +
			hours +
			'h ' +
			minutes +
			'm ' +
			seconds +
			's </span>';
	} else if ((days === 0) & (hours === 0) & (minutes === 0)) {
		footerText.innerHTML =
			'<span>' +
			filmTitle +
			'&nbsp</span>' +
			message +
			'&nbsp<span>' +
			operator +
			seconds +
			's </span>';
	} else if ((days === 0) & (hours === 0)) {
		footerText.innerHTML =
			'<span>' +
			filmTitle +
			'&nbsp</span>' +
			message +
			'&nbsp<span>' +
			operator +
			minutes +
			'm ' +
			seconds +
			's </span>';
	} else if (days === 0) {
		footerText.innerHTML =
			'<span>' +
			filmTitle +
			'&nbsp</span>' +
			message +
			'&nbsp<span>' +
			operator +
			hours +
			'h ' +
			minutes +
			'm ' +
			seconds +
			's </span>';
	}
};
