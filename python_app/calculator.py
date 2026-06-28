"""Калькулятор, использующий модуль операций."""

from operations import add, subtract, multiply, divide

OPERATIONS = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
}


def calculate(a, op, b):
    """Выполнить операцию op над числами a и b."""
    if op not in OPERATIONS:
        raise ValueError(f"Неизвестная операция: {op}")
    return OPERATIONS[op](a, b)
