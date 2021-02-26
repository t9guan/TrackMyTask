const form = document.getElementById("login-form");
form.addEventListener("submit", loginUser);

function loginUser(event) {
	event.preventDefault();
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

}

