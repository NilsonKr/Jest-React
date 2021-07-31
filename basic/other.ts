export const animals = [
	'🐶',
	'🐱',
	'🐭',
	'🐹',
	'🐰',
	'🐻',
	'🐼',
	'🐨',
	'🐯',
	'🦁',
	'🐮',
	'🐷',
];

export const getRandomAnimal = () => {
	const randomIndex = Math.floor(Math.random() * animals.length);
	return animals[randomIndex];
};
