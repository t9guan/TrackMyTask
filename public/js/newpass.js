const form = document.getElementById("resetpass-form");
form.addEventListener("reset", resetPass);

function resetPass(event) {
	event.preventDefault();
	const newpass = document.getElementById("newpass").value;
	const confirmpass = document.getElementById("confirmpass").value;
}

function toggle() {
	var pass = document.getElementById("newpass-field");
	var on = document.getElementById("toggleNewPass");
	var off = document.getElementById("toggleOffNewPass");

	if(pass.type === 'password') {
		pass.type = "text";
		on.style.display = "block";
		off.style.display = "none";
	}
	else {
		pass.type = "password";
		on.style.display = "none";
		off.style.display = "block";
	}
}

function toggle2() {
	var pass2 = document.getElementById("confirmpass-field");
	var on2 = document.getElementById("toggleConfirmPass");
	var off2 = document.getElementById("toggleOffConfirmPass");

	if(pass2.type === 'password') {
		pass2.type = "text";
		on2.style.display = "block";
		off2.style.display = "none";
	}
	else {
		pass2.type = "password";
		on2.style.display = "none";
		off2.style.display = "block";
	}
}