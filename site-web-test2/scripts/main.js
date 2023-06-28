let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'image/dbz.jpg') {
		myImage.setAttribute('src', 'image/figurine-goku-rosé.jpg');
	} else {
		myImage.setAttribute('src', 'image/dbz.jpg');
	}
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('veuillez saisir votre nom');
	localStorage.setItem('nom', myName);
	myHeading.textContent = 'Bienvenue, chez Manga Fever, ' + myName;
}

if (!localStorage.getItem('nom')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('nom');
	myHeading.textContent = 'Bienvenue, chez Manga Fever, ' + storedName;
}

myButton.addEventListener('click', function() {
	setUserName();
});