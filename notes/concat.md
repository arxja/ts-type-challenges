# concat

- **Challenge**: [00533-easy-concat](https://github.com/type-challenges/type-challenges/tree/main/questions/00533-easy-concat)
- **Difficulty**: easy
- **Status**: done
- **Attempts**: 2
- **Key insight**: **Tuple spread is literal string concatenation, but for arrays.** `[...T, ...U]` is the type-level equivalent of `[...arr1, ...arr2]`. Order is preserved, and the result is a tuple whose length is `T.length + U.length`. You can’t use `Array.concat`'s return type (`T[]`) because that loses the literal tuple structure. Spread preserves it. 
- **Reuse**: Merging tuples, function overloads
