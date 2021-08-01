import getData from '../../src/utils/getData';

describe('getData fetch util', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Return data correctly', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 'mockData' }));

    getData('https://someapi.com').then(info =>
      expect(info.data).toBe('mockData')
    );

    //Access to mock calls wich is an array within another array
    expect(fetch.mock.calls[0][0]).toBe('https://someapi.com');
  });
});
