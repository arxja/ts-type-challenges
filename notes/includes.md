# includes

- **Challenge**: [00898-easy-includes](https://github.com/type-challenges/type-challenges/tree/main/questions/00898-easy-includes)
- **Difficulty**: easy
- **Status**: done
- **Attempts**: 1
- **Key insight**: **`Includes` is a recursive walk down the tuple.** At each step, check the head against the target. If it matches, return `true`. If not, recurse on the tail. When the tuple is empty, return `false`. Using `First extends U` instead of `Equal<First, U>` gives wrong answers when types are _compatible but not identical_. For example, `any extends string` is `true`, but they aren’t the same type. `Equal` checks exact identity. 
- **Reuse**: 
