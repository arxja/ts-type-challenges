# tuple-length

- **Challenge**: [00018-easy-tuple-length](https://github.com/type-challenges/type-challenges/tree/main/questions/00018-easy-tuple-length)
- **Difficulty**: easy
- **Status**: done
- **Attempts**: 1
- **Key insight**: If you constrain `T extends any[]` instead of `readonly any[]`, you’ll reject `as const` tuples. Use `readonly any[]` to accept both mutable and readonly tuples.
- **Reuse**: Recursion termination, counted types
