import { userNpc } from '../user';

test("healsUser", () => {
  const result = userNpc({
    name: 'Маг', 
    health: 90
  });
  expect(result).toBe("healthy");
});

test("healsUser", () => {
  const result = userNpc({
    name: 'Лучник', 
    health: 10
  });
  expect(result).toBe("critical");
});

test("healsUser", () => {
  const result = userNpc({
    name: 'Мечник', 
    health: 35
  });
  expect(result).toBe("wounded");
});