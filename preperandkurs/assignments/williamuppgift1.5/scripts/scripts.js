const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click', () => {
	let age = document.querySelector('#age').value;
	let vip = document.querySelector('#vip');
	if (age >= 18) {
		alert('access granted');
	} else if (vip.checked == true && age < 18) {
		alert('Welcome in my best VIP customer :)');
	} else {
		alert('access denied');
	}
	console.log(age);
});
