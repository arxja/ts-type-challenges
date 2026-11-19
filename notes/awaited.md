# awaited

- **Challenge**: [00189-easy-awaited](https://github.com/type-challenges/type-challenges/tree/main/questions/00189-easy-awaited)
- **Difficulty**: easy
- **Status**: done
- **Attempts**: 2
- **Key insight**: Recursively unwraps nested promises using `infer` to extract the resolved type. PromiseLike vs Promise -> if you use the Promise the test number 5 would fail because it's a fake promise with `then()` method and promise requires 5, but PromiseLike just requires `then()`
- **Reuse**: -
