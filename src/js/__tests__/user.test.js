import { userNpc } from '../user';
import { user } from '../user';

test("healsUser", () => {
  const result = userNpc(user);
  expect(result).toBe("healthy");
});

/* не понял как создать 100% покрытие 
const healthList = [
  [90, "healthy"],
  [43, "wounded"],
  [13, "critical"]
];

const handler = test.each(healthList);

handler(healthTest, (_, amount, expected) => {
  const result = userNpc(amount);
  expect(result).toBe(expected);
});   */
