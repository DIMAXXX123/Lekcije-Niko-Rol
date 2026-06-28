"""Точка входа в приложение."""

from calculator import calculate


def main():
    examples = [
        (10, "+", 5),
        (10, "-", 5),
        (10, "*", 5),
        (10, "/", 5),
    ]

    print("=== Простой калькулятор ===")
    for a, op, b in examples:
        result = calculate(a, op, b)
        print(f"{a} {op} {b} = {result}")


if __name__ == "__main__":
    main()
