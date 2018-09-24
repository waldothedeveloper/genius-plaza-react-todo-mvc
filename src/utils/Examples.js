const examplesOfTodos = [
	'ex: go to gym',
	'ex: go to the beach',
	'ex: make spaghetti',
	'ex: hug someone you love',
	'ex: learn anything new',
	'ex: eat healthy',
	'ex: dont worry be happy'
];

const randomExample = (r) => {
	return Math.floor(Math.random() * Math.floor(r));
};

export const result = examplesOfTodos[randomExample(examplesOfTodos.length)];
