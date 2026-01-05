# rspack-inline-exports-bug

This repo demonstrates a bug in Rspack's inline exports features, where the injected comment sometimes result in syntax errors:

```javascript
// Before:
if (minutes/minutesInDay) {}

// After: syntax error! (two forward slashes turns into a single-line comment)
if (minutes//* inlined export .minutesInDay */ (1440)) {}

// Potential fixes:
if (minutes/ /* inlined export .minutesInDay */ (1440)) {}
if (minutes/(/* inlined export .minutesInDay */ (1440))) {}
if (minutes/(/* inlined export .minutesInDay */ 1440)) {}
```

## Usages

`node --run build` runs Rspack build
