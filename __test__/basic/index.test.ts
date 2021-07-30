import { text } from '../../basic/index';

describe('Basic Jest Functionalities', () => {
	test('Validate Strings', () => {
		expect(text).toMatch(/World/);
	});

	test('Validate String Length', () => {
		expect(text.length).toBeGreaterThan(10);
	});
});
