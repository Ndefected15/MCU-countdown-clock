// Temporary test values for demo
// const futureDate = '2022, 3, 8';
// const pastDate = '2021, 9, 2';

// Method to handle the countdown logic and making changes to front-end footer
let countdownHandler = (releaseDate, filmTitle) => {
    // Extracts film's release date
    const countdownDate = new Date(releaseDate).getTime();

    let footerText = document.querySelector('.footer');

    // Sets an interval to repeat instructions every second, thus creating the countdown
    setInterval(() => {
        const now = new Date().getTime();

        let distance = countdownDate - now;

        // Logic for timer
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Logic for displaying dynamic countdown data
        if (days !== 0) {
            footerText.innerHTML =
            '<span>' + filmTitle + '&nbsp</span>releases in...&nbsp<span>' +
            days +
            'd ' +
            hours +
            'h ' +
            minutes +
            'm ' +
            seconds +
            's </span>';
        } else if (days === 0 & hours === 0 & minutes === 0) {
            footerText.innerHTML =
            '<span>' + filmTitle + '&nbsp</span>releases in...&nbsp<span>' +
            seconds +
            's </span>';
        } else if (days === 0 & hours === 0) {
            footerText.innerHTML =
            '<span>' + filmTitle + '&nbsp</span>releases in...&nbsp<span>' +
            minutes +
            'm ' +
            seconds +
            's </span>';
        } else if (days === 0) {
            footerText.innerHTML =
            '<span>' + filmTitle + '&nbsp</span>releases in...&nbsp<span>' +
            hours +
            'h ' +
            minutes +
            'm ' +
            seconds +
            's </span>';
        }
        
        // Logic for films that have already been released
        if (distance < 0) {
            distance = now - countdownDate;

            // Updating logic for timer
            days = Math.floor(distance / (1000 * 60 * 60 * 24));
            hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000) + 1;

            // Logic for displaying dynamic countown data
            if (days !== 0) {
                footerText.innerHTML =
                '<span>' + filmTitle + '&nbsp</span>was released...&nbsp<span>-' +
                days +
                'd ' +
                hours +
                'h ' +
                minutes +
                'm ' +
                seconds +
                's </span>';
            } else if (days === 0 & hours === 0 & minutes === 0) {
                footerText.innerHTML =
                '<span>' + filmTitle + '&nbsp</span>was released...&nbsp<span>-' +
                seconds +
                's </span>';
            } else if (days === 0 & hours === 0) {
                footerText.innerHTML =
                '<span>' + filmTitle + '&nbsp</span>was released...&nbsp<span>-' +
                minutes +
                'm ' +
                seconds +
                's </span>';
            } else if (days === 0) {
                footerText.innerHTML =
                '<span>' + filmTitle + '&nbsp</span>was released...&nbsp<span>-' +
                hours +
                'h ' +
                minutes +
                'm ' +
                seconds +
                's </span>';
            }
        }
    }, 1000); // Interval of 1 second
}

//  Click event listener for every title
// const titles = document.querySelectorAll('.movie-list-item');
// if (titles.length !== 0) {
//   for (let i = 0; i < titles.length; i++) {
//       titles[i].onclick = () => {
//           let filmId = titles[i].id;
//           console.log(filmId);
//           countdownHandler(releaseDate, filmTitle)
//       };
//   }
// }