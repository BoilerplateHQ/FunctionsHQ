# Capitalize

Capitalizes the first letter of a string.

## Usage

*Assuming you are collecting functions with an utils file.*

```tsx
import { capitalize } from '@/lib/utils';

export default function SomeComponent(){
	const lowercaseTitle = "title";

	return (
		<div>{capitalize(lowercaseTitle)}</div>
	)
}
```
