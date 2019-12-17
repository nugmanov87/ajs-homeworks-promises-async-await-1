import GameSavingLoader from '../app';
import readGameSaving from '../readGameSaving';

jest.mock('../readGameSaving.js');

beforeEach(() => {
  jest.resetAllMocks();
});

jest.setTimeout(5000);

test('load data', () => {
  readGameSaving.mockResolvedValue();
  const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';

  GameSavingLoader.load().then((res) => {
    expect(res).toBe(expected);
  });
});

test('load error', () => {
  readGameSaving.mockRejectedValue('error');

  GameSavingLoader.load().catch((err) => {
    expect(err).toThrow();
  });
});
