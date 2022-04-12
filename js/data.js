let icons = [{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
//Cambio colore per categoria;
// let randomColorUser = getRandomColor()
// let randomColorVegetable = getRandomColor()
// let randomColorAnimal = getRandomColor()

// for (i = 0; i < icons.length; i++) {
// 	if (icons[i].color.includes('blue')){
// 		icons[i].color = randomColorUser
// 	}if (icons[i].color.includes('orange')){
// 		icons[i].color = randomColorAnimal
// 	}if (icons[i].color.includes('green')){
// 		icons[i].color = randomColorVegetable
// 	}
// }

icons.forEach((icona) => {
	icona.color = getRandomColor()
})

let typeForSelect = [];
icons.forEach((icon) => {
	if (!typeForSelect.includes(icon.type)) {
		typeForSelect.push(icon.type)
	}
})

const select = document.getElementById('select');
typeForSelect.forEach((type) => {
	const option = `<option value="${type}">${type.charAt(0).toUpperCase() + type.slice(1)}</option>`;
	select.innerHTML += option;
})

//////
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
/////////

function printCards(icone) {
	const row = document.getElementById('iconsRow');
	let item = '';
	for (let i = 0; i < icone.length; i++) {
		const iconCard = createCard(icone[i]);
		item += iconCard;
	}
	row.innerHTML = item;
}


onchange = function selectValue() {
	let select = document.getElementById('select').value;
	switch (select) {
		case 'animal':
			let animals = icons.filter((icons) => icons.type === 'animal');
			printCards(animals)
			break;
		case 'vegetable':
			let vegetable = icons.filter((icons) => icons.type === 'vegetable');
			printCards(vegetable)
			break;
		case 'user':
			let user = icons.filter((icons) => icons.type === 'user');
			printCards(user)
			break;
		default:
			printCards(icons);
			break
	}
}
printCards(icons);

function createCard(icona) {
	const card = `
	<div class="card d-flex align-items-center justify-content-center">
		<i style= "color:${icona.color}"
	 	class="${icona.family} ${icona.prefix}${icona.name} fs-1" aria-hidden="true">
	 	</i>
		<p class="m-0">${(icona.name).toUpperCase()}</p>
  	</div>
	`
	return card;
}