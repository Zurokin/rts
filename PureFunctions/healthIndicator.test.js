import { healthIndicator } from './healthIndicator';

test('health > 50 (healthy)', () => {
  expect(healthIndicator({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('15 <= health <= 50 (wounded)', () => {
  expect(healthIndicator({ name: 'Маг', health: 30 })).toBe('wounded');
});

test('health < 15 (critical)', () => {
  expect(healthIndicator({ name: 'Маг', health: 10 })).toBe('critical');
});
