
	function validatefunction() {
		var name = document.forms["FormReg"]["name"];
		let email = document.forms["FormReg"]["email"];
		let age = document.forms["FormReg"]["age"];
		var phone = document.forms["FormReg"]["Telephone"];
		var impact = document.forms["FormReg"]["slct"];
		let lang = document.forms["FormReg"]["inp"];


		if (name.value == "") {
			window.alert("Please enter your name.");
			name.focus();
			return false;
		}

		if (email.value == "") {
			window.alert("Please enter a valid email address.");
			email.focus();
			return false;
		}

		if (age.value == "") {
			window.alert("Please enter your age.");
			age.focus();
			return false;
		}

		if (phone.value == "") {
			window.alert("Please enter your telephone number.");
			phone.focus();
			return false;
		}
		if (impact.value == "") {
			window.alert("Please select your impact.");
			impact.focus();
			return false;
		}
		if (lang.selectedIndex < 1) {
			window.alert("Please choose any language or framework.");
			lang.focus();
			return false;
		}

		document.getElementsById("title").innerHTML = "Thank you! Form successfully Submitted";
	}

