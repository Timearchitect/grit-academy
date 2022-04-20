let cat = { alive: true, name: 'Gustav' };
let button = document.getElementById('click');
button.addEventListener('click', () => {
	alert(cat.name);
});
