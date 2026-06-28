"""Базовые арифметические операции."""


def add(a, b):
    """Сложение двух чисел."""
    return a + b


def subtract(a, b):
    """Вычитание."""
    return a - b


def multiply(a, b):
    """Умножение."""
    return a * b


def divide(a, b):
    """Деление с проверкой деления на ноль."""
    if b == 0:
        raise ValueError("Нельзя делить на ноль")
    return a / b
