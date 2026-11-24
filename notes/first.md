# first

- **Challenge**: [00014-easy-first](https://github.com/type-challenges/type-challenges/tree/main/questions/00014-easy-first)
- **Difficulty**: easy
- **Status**: done
- **Attempts**: 2
- **Key insight**: A common wrong answer is T[0] — but on an empty tuple that gives undefined (or errors under noUncheckedIndexedAccess), not never. The infer pattern handles the empty case cleanly.
- **Reuse**: `Last`, `Pop`, recursive tuple utils
