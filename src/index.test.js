const Calculator = require("./calculator");

describe("Calculator Tests", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test.each([[100, 0, 100]])(
    "Addition_Returns_ExpectedResult(%i, %i) = %i",
    (a, b, expectedResult) => {
      const result = calculator.add(a, b);
      expect(result).toBe(expectedResult);
    }
  );

  test.each([[30, 0, 30]])(
    "Subtraction_Returns_ExpectedResult(%i, %i) = %i",
    (a, b, expectedResult) => {
      const result = calculator.subtract(a, b);
      expect(result).toBe(expectedResult);
    }
  );

  test.each([
    [1, 1, 1],
    [2, 1, 2],
  ])("Multiply_Returns_ExpectedResult(%i, %i) = %i", (a, b, expectedResult) => {
    const result = calculator.multiply(a, b);
    expect(result).toBe(expectedResult);
  });
});
