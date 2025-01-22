import { jest } from "@jest/globals";
import fetchData from "./http";

jest.mock("./http");

describe("fetchData", () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules(); // Сбрасываем модули для правильной работы unmock
  });

  it("should be called with correct URL", () => {
    // Указываем поведение мока
    fetchData.mockImplementation((url) => `Fetched data from ${url}`);

    const url = "http://example.com";
    const result = fetchData(url);

    expect(fetchData).toHaveBeenCalledTimes(1);
    expect(fetchData).toHaveBeenCalledWith(url);
    expect(result).toBe(`Fetched data from ${url}`);
  });

  it("should throw an error when not mocked", async () => {
    jest.unmock("./http"); // Снимаем мокирование

    // Импортируем оригинальную функцию после снятия мокирования
    const originalFetchData = (await import("./http")).default;

    // Тестируем оригинальное поведение
    expect(() => originalFetchData("http://example.com")).toThrow("Mock this!");
  });
});
