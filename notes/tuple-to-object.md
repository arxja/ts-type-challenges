# tuple-to-object

- **Challenge**: [00011-easy-tuple-to-object](https://github.com/type-challenges/type-challenges/tree/main/questions/00011-easy-tuple-to-object)
- **Difficulty**: easy
- **Status**: done
- **Attempts**: 1
- **Key insight**: You must constrain `T` to `readonly (string | number | symbol)[]` so TypeScript knows the elements can legally be object keys. Without the constraint, `[K in T[number]]` errors because `T[number]` could be `object` or `boolean`, which aren’t valid keys.
- **Reuse**: Building object types from unions
