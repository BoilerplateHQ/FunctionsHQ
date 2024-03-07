# isBase64

The isBase64.ts file contains a single function, isBase64, which checks if a given string is a valid base64 encoded string.

## Usage

*Assuming you are collecting functions with an utils file.*

```js
import { isBase64 } from '@/lib/utils'; // 

const encodedString = 'SGVsbG8gd29ybGQ=';
console.log(isBase64(encodedString)); // Outputs: true
```

## Use Cases

### URL Params Check

```tsx
import { isBase64 } from '@/lib/utils';

export default function Page() {
    const searchParams = useSearchParams();
    const hopefullyBase64EncodedParam = searchParams.get('q');

    if(!isBase64(hopefullyBase64EncodedParam)){
        //Do something
    }
    return({/*YOUR CODE*/})
}

```
