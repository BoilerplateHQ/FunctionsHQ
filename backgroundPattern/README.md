# cn

Provides a background image URL based on a predefined pattern.
Patterns: ['blueprint', 'boxes-sm', 'boxes-md', 'boxes-lg', 'dotted', 'hearts']

## Usage

*Assuming you are collecting functions with an utils file.*

```tsx
import { backgroundPattern } from '@/lib/utils';

export default function SomeComponent(){
	return (
		<div className='w-48 h-48' style={{ backgroundImage: backgroundPattern('hearts') }}></div>
	)
}
```
