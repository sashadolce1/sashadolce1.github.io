(function() {
    emailjs.init("b549Pg33I-aqZnAoU");
  })();

function sendMail() {
	var tempParams = {
		from_name: document.getElementById("name").value,
		user_email: document.getElementById("email").value,
		message: document.getElementById("message").value
	};

	if (!document.getElementById("name").value || !document.getElementById("email").value || !document.getElementById("message").value) {
		document.getElementById("error").style.display = "block";
	} else { emailjs.send("service_xb4xi8j","template_ihfif5l",tempParams)
	.then(function(res) {
		document.getElementById("error").style.display = "none";
		document.getElementById("success").style.display = "block";
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";
	})
}}