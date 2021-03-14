const form = document.getElementById("register-form");
form.addEventListener("submit", registerUser);

function registerUser(event) {
	event.preventDefault();
	const name = document.getElementById("name").value;
	const password = document.getElementById("password").value;

}


