# copyToClipboard

Copies the given string to the clipboard. Let's users past them.

## Usage

*Assuming you are collecting functions with an utils file.*

```js
import { copyToClipboard } from '@/lib/utils'; // 

const toBeCopiedString = 'SGVsbG8gd29ybGQ=';
copyToClipboard(encodedString); 
```

## Use Cases

### Let users copy a text by clicking a button

```tsx
import { CopyToClipboard } from '@/lib/utils';
import { ClipboardCopy } from 'lucide-react';

export default function Button_CopyToClipboard({
	text,
	className,
}: {
	text: string | undefined;
	className?: string;
}) {
	return (
		<button onClick={() => CopyToClipboard(text)}>
            <span className="sr-only">Copy to Clipboard</span>
			<ClipboardCopy size={22} />
		</button>
	);
}
```
