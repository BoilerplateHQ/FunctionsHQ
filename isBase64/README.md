# isBase64

The isBase64.ts file contains a single function, isBase64, which checks if a given string is a valid base64 encoded string.

## Usage

*Assuming you are collecting functions with an utils file.*

```js
import { isBase64 } from '@/lib/utils'; // 

const encodedString = 'SGVsbG8gd29ybGQ=';
console.log(isBase64(encodedString)); // Outputs: true
```

## Function Signature

```js
function isBase64(str: string): boolean;
```

This function takes a string as an argument and returns a boolean indicating whether the string is base64 encoded or not.

## Implementation

The function uses a regular expression to test if the input string matches the pattern of a base64 encoded string.
