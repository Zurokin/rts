// jest.config.test.js
import config from "./jest.config.js";

describe("Jest Configuration", () => {
  test("should collect coverage", () => {
    expect(config.collectCoverage).toBe(true);
  });

  test("should exclude http.js from coverage", () => {
    expect(config.collectCoverageFrom).toContainEqual(
      expect.stringContaining("!http.js")
    );
  });

  test("should have a global coverage threshold of 100%", () => {
    const { branches, functions, lines, statements } =
      config.coverageThreshold.global;
    expect(branches).toBe(100);
    expect(functions).toBe(100);
    expect(lines).toBe(100);
    expect(statements).toBe(100);
  });
});
