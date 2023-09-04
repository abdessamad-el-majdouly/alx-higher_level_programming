#!/usr/bin/python3
def nqueens(n):
  """
  Solves the N queens problem.

  Args:
    n: The number of queens.

  Returns:
    A list of all possible solutions.
  """

  if n < 4:
    raise ValueError("N must be at least 4")

  solutions = []

  def backtrack(queens, row):
    if row == n:
      solutions.append(queens)
      return

    for col in range(n):
      if is_safe(queens, row, col):
        queens[row] = col
        backtrack(queens, row + 1)

  queens = [-1] * n
  backtrack(queens, 0)

  return solutions

def is_safe(queens, row, col):
  """
  Checks if a queen can be placed at (row, col) without being attacked by any other queen.

  Args:
    queens: The list of queens that have already been placed.
    row: The row of the queen to be placed.
    col: The column of the queen to be placed.

  Returns:
    True if the queen can be placed at (row, col), False otherwise.
  """

  for i in range(row):
    if queens[i] == col or abs(queens[i] - col) == row - i:
      return False

  return True

