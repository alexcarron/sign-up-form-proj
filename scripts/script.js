function checkConfirmPassword() {
	let password_input = document.querySelector("input#password"),
		confirm_password_input = document.querySelector("input#confirm_password");
		confirm_password_invalid_text = document.querySelector("p#confirm_password_invalid_text");
		
		console.log(password_input.value)
		console.log(confirm_password_input.value)
		console.log(password_input.classList)
		
	if (password_input.value != confirm_password_input.value) {
		password_input.classList.add("invalid")
		confirm_password.classList.add("invalid")
		confirm_password_invalid_text.style.display = "block";
	} 
	else {
		password_input.classList.remove("invalid")
		confirm_password.classList.remove("invalid")
		confirm_password_invalid_text.style.display = "none";
	}
}