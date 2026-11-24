# parameters

- **Challenge**: [03312-easy-parameters](https://github.com/type-challenges/type-challenges/tree/main/questions/03312-easy-parameters)
- **Difficulty**: easy
- **Status**: done
- **Attempts**: 3 
- **Key insight**: **`infer` can capture an entire parameter list.** Just like `infer F` captured one element in `First`, `infer P` captures the **whole tuple of parameters**. The `extends (...args: any[]) => any` constraint ensures `T` is actually a function before you try to infer from it. Using `Function` instead of `(...args: any[]) => any` is too loose — `Function` doesn’t have callable signatures TypeScript can infer from. The explicit function-type constraint is what makes `infer P` work.
- **Reuse**: 
