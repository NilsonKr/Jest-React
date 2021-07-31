const fetch = require('node-fetch');

export const text = 'Hello Jest World';

export const testArray = ['Apple', 'Banana', 'Kiwi', 'Pineapple'];

export const reverseString = (str: string, callback: (s: string) => void) => {
	callback(str.split('').reverse().join(''));
};

export const fetchApi = () => {
	return new Promise((resolve, reject) => {
		fetch('https://rickandmortyapi.com/api/character')
			.then((response: any) => response.json())
			.then((data: any) => resolve(data))
			.catch((err: Error) => reject(err));
	});
};

// fetchApi().then(console.log);
