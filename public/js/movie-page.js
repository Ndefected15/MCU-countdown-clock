// Collapsible
var coll = document.getElementsByClassName('collapsible');

for (let i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function () {
		this.classList.toggle('active');

		var content = this.nextElementSibling;

		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + 'px';
		}
	});
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
	let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

	$('#textInput').val('');
	$('#chatbox').append(userHtml);
	document.getElementById('chat-bar-bottom').scrollIntoView(true);

	//Uncomment this if you want the bot to respond to this buttonSendText event
	// setTimeout(() => {
	//     getHardResponse(sampleText);
	// }, 1000)
}

function sendButton() {
	getResponse();
}

function heartButton() {
	buttonSendText('Heart clicked!');
}

// Press enter to send a message
$('#textInput').keypress(function (e) {
	if (e.which == 13) {
		getResponse();
	}
});

const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');
var sidetext = document.querySelectorAll('.side-text');

arrows.forEach((arrow, i) => {
	const itemNumber = movieLists[i].querySelectorAll('img').length;
	let clickCounter = 0;
	arrow.addEventListener('click', () => {
		const ratio = Math.floor(window.innerWidth / 270);
		clickCounter++;
		if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
			movieLists[i].style.transform = `translateX(${
				movieLists[i].computedStyleMap().get('transform')[0].x.value - 300
			}px)`;
		} else {
			movieLists[i].style.transform = 'translateX(0)';
			clickCounter = 0;
		}
	});

	console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll(
	'.container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle'
);

ball.addEventListener('click', () => {
	items.forEach((item) => {
		item.classList.toggle('active');
	});
	ball.classList.toggle('active');
});

// SIDEBAR
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
	document.querySelector('.sidebar').style.width = '200px';
	document.querySelector('.container').style.marginLeft = '200px';
	document.querySelector('.menu').style.display = 'none';
	sidetext.forEach((sidetext) => (sidetext.style.display = 'block'));
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
	document.querySelector('.sidebar').style.width = '50px';
	document.querySelector('.container').style.marginLeft = '0';
	sidetext.forEach((sidetext) => (sidetext.style.display = 'none'));
	document.querySelector('.menu').style.display = 'block';
}
