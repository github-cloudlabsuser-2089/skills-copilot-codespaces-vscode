def calculator():
    """
    A simple calculator function that allows the user to perform basic arithmetic operations.

    The function provides the following operations:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    5. Percentage calculation

    The user is prompted to select an operation and input two numeric values. The function then performs
    the selected operation and displays the result. It also includes error handling for invalid inputs
    and division by zero.

    Returns:
        None
    """
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")

    # Take input from the user
    choice = input("Enter choice (1/2/3/4/5): ")

    if choice in ['1', '2', '3', '4', '5']:
        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))
        except ValueError:
            print("Error: Please enter valid numeric values.")
            return

        if choice == '1':
            print(f"The result is: {num1 + num2}")
        elif choice == '2':
            print(f"The result is: {num1 - num2}")
        elif choice == '3':
            print(f"The result is: {num1 * num2}")
        elif choice == '4':
            if num2 != 0:
                print(f"The result is: {num1 / num2}")
            else:
                print("Error: Division by zero is not allowed.")
        elif choice == '5':
            print(f"The result is: {(num1 / num2) * 100}%")
    else:
        print("Invalid input. Please select a valid operation.")

if __name__ == "__main__":
    calculator()