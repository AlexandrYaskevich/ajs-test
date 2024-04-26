import sorthealth from '../listherois.js';

test('sort list heroes', () => {
  const herois = [
    { name: "Мечник", health: 10 },
    { name: "Маг", health: 100 },
    { name: "Лучник", health: 80 },
  ];
  const result = sorthealth(herois);
  const expected = [
    { name: "Маг", health: 100 },
    { name: "Лучник", health: 80 },
    { name: "Мечник", health: 10 },
  ];
  expect(result).toEqual(expected);
});