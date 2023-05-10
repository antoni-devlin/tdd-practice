import { fizzbuzz } from ".";

describe("functions", () => {
  test("fizzbuzz(1) is 1", () => {
    // Setup
    // no setup needed here

    // Execution
    const result = fizzbuzz(1);

    // Assertions
    expect(result).toBe(1);
  });

  test("fizzbuzz(3) is fizz", () => {
    const result = fizzbuzz(3);

    expect(result).toBe("fizz");
  });

  test("fizzbuzz(5) is buzz", () => {
    const result = fizzbuzz(5);

    expect(result).toBe("buzz");
  });

  test("fizzbuzz(45) is fizzbuzz", () => {
    const result = fizzbuzz(45);

    expect(result).toBe("fizzbuzz");
  });

  test("fizzbuzz(7) is fizzbuzz", () => {
    const result = fizzbuzz(7);

    expect(result).toBe(7);
  });

  test('fizzbuzz("string") throws a TypeError', () => {
    const result = fizzbuzz("string");

    expect(result).toThrow(TypeError);
  });
});
