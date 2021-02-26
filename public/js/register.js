const form = document.getElementById("register-form");
form.addEventListener("submit", registerUser);

function registerUser(event) {
	event.preventDefault();
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

}


