async function newFormHandler(event) {
	event.preventDefault();

	const title = document.querySelector('input[name="post-title"]').value;
	const post_comment = document.querySelector(
		'input[name="post-comment"]'
	).value;

	// IMPORTANT TO FIGURING THIS OUT
	const response = await fetch(`/api/posts`, {
		method: 'POST',
		body: JSON.stringify({
			title,
			post_comment,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.ok) {
		document.location.replace('/dashboard');
		console.log('it worked!');
	} else {
		alert(response.statusText);
	}
}

document
	.querySelector('.new-post-form')
	.addEventListener('submit', newFormHandler);
