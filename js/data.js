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

const row = document.getElementById('iconsRow');







function printCards() {
	let item = '';
	for (let i = 0; i < icons.length; i++) {

		onchange = function selectValue() {
			let select = document.getElementById('select').value;
			if (select === '1') {
				let animali = icons.filter((icons) => icons.type === 'animal');	
			}
			if (select === '2') {
				let vegetable = icons.filter((icons) => icons.type === 'vegetable');
				console.log(vegetable)
				console.log(select)

			}if (select === '3') {
				let user = icons.filter((icons) => icons.type === 'user');
				console.log(user)
				console.log(select)

			}if(select === '0'){
				console.log(select)
			}
		}
		const iconCard = createCard(icons[i]);
		item += iconCard;
		console.log(icons[i].type)
	}
	row.innerHTML = item;
}
printCards()


function createCard(icona) {
	const card = `
	<div class="card d-flex align-items-center justify-content-center">
		<i style= "color:${icona.color}"
	 	class="fa-solid ${icona.prefix}${icona.name} fs-1" aria-hidden="true">
	 	</i>
		<p class="m-0">${icona.name}</p>
  	</div>
	`
	
	return card;
}

