/**
 * BigInt is an arbitrary-precision integer. What this means is that variables can now represent 2⁵³ numbers. And not just max out at 9007199254740992.
 */

const b = 1n;

// const limit = Number.MAX_SAFE_INTEGER;
// limit + 1;
// limit + 2;
// const integer = BigInt(9007199254740991);

// Math operators only work within its own type
// Error: 200n / 20

// Cannot convert to number
// Error: +100n
