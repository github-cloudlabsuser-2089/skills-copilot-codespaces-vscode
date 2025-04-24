// A simple calculator program
class Calculator {
    // Method to add two numbers
    add(a, b) {
        return a + b;
    }

    // Method to subtract two numbers
    subtract(a, b) {
        return a - b;
    }

    // Method to multiply two numbers
    multiply(a, b) {
        return a * b;
    }

    // Method to divide two numbers
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Main program
function main() {
    const calculator = new Calculator();
    const prompt = require('prompt-sync')();

    console.log("Welcome to the Calculator!");
    console.log("Options:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");

    while (true) {
        const choice = prompt("Enter your choice (1/2/3/4/5): ");

        if (choice === '5') {
            console.log("Thank you for using the calculator. Goodbye!");
            break;
        }

        const num1 = parseFloat(prompt("Enter the first number: "));
        const num2 = parseFloat(prompt("Enter the second number: "));

        try {
            let result;
            switch (choice) {
                case '1':
                    result = calculator.add(num1, num2);
                    console.log(`Result: ${result}`);
                    break;
                case '2':
                    result = calculator.subtract(num1, num2);
                    console.log(`Result: ${result}`);
                    break;
                case '3':
                    result = calculator.multiply(num1, num2);
                    console.log(`Result: ${result}`);
                    break;
                case '4':
                    result = calculator.divide(num1, num2);
                    console.log(`Result: ${result}`);
                    break;
                default:
                    console.log("Invalid choice. Please try again.");
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }
}

// Run the main program
main();