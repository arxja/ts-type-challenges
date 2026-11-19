# exclude

- **Challenge**: [00043-easy-exclude](https://github.com/type-challenges/type-challenges/tree/main/questions/00043-easy-exclude)
- **Difficulty**: easy
- **Status**: done
- **Attempts**: 1
- **Key insight**: Conditional types distribute over unions. Each member of T is checked; if it extends U, it is replaced with never, which disappears from the union.
- **Reuse**: -
