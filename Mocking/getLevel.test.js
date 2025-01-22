// getLevel.test.js
import { getLevel } from "./getLevel";
import fetchData from "./http";
import { jest } from "@jest/globals";

jest.mock("./http"); // Мокаем модуль http

test("should return level when status is ok", () => {
  fetchData.mockReturnValue({ status: "ok", level: 42 });
  expect(getLevel(1)).toBe("Ваш текущий уровень: 42");
});

test("should return unavailable message when status is not ok", () => {
  fetchData.mockReturnValue({ status: "error" });
  expect(getLevel(1)).toBe("Информация об уровне временно недоступна");
});
