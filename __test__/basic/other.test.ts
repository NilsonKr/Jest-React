import { getRandomAnimal, animals } from '../../basic/other';

describe('Random Animals', () => {
	test('Animal Random be a Emoji', () => {
		expect(typeof getRandomAnimal()).toBe('string');
	});

	test('Contains Certain Animal', () => {
		expect(animals).toContain('🦁');
	});

	test('Contains Enough Animals', () => {
		expect(animals.length).toBeGreaterThanOrEqual(10);
	});
});
