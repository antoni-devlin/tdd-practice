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
});
