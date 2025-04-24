const Calculator = require('./test.js');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should add two numbers correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(-1, -1)).toBe(-2);
        expect(calculator.add(0, 5)).toBe(5);
    });

    test('should subtract two numbers correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(0, 5)).toBe(-5);
        expect(calculator.subtract(-3, -2)).toBe(-1);
    });

    test('should multiply two numbers correctly', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-2, 3)).toBe(-6);
        expect(calculator.multiply(0, 5)).toBe(0);
    });
    test('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow("Division by zero is not allowed.");
    });

    test('should handle floating-point addition correctly', () => {
        expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3, 5);
    });

    test('should handle floating-point subtraction correctly', () => {
        expect(calculator.subtract(0.3, 0.1)).toBeCloseTo(0.2, 5);
    });

    test('should handle floating-point multiplication correctly', () => {
        expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02, 5);
    });

    test('should handle floating-point division correctly', () => {
        expect(calculator.divide(0.3, 0.1)).toBeCloseTo(3, 5);
    });
    test('should divide two numbers correctly', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-6, 3)).toBe(-2);
        expect(calculator.divide