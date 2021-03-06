import { text, testArray, reverseString, fetchApi } from '../../basic/index';

describe('Basic Jest Functionalities', () => {
	test('Validate Strings', () => {
		expect(text).toMatch(/World/);
	});

	test('Validate String Length', () => {
		expect(text.length).toBeGreaterThan(10);
	});

	test('Validate Array contain', () => {
		expect(testArray).toContain('Kiwi');
	});

	test('Callback Function', done => {
		reverseString('Hello', (s: string) => {
			expect(s).toBe('olleH');
			done();
		});
	});

	test('Promise Fetch', () => {
		return expect(fetchApi()).resolves.toHaveProperty('results');
	});

	test('Fetching data with Async/Await ', async () => {
		await expect(fetchApi()).resolves.toHaveProperty('info');
	});
});

beforeEach(() => console.log('Before Each Test'));
beforeAll(() => console.log('Before All Tests'));

afterEach(() => console.log('After Each Test'));
afterAll(() => console.log('After All Tests'));
