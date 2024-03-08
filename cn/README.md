# cn

Combines multiple class names into a single string.

## Prerequisites

```bash
npm install clsx, tailwind-merge
```

```bash
pnpm install clsx, tailwind-merge
```

```bash
bun install clsx, tailwind-merge
```

## Usage

*Assuming you are collecting functions with an utils file.*

```tsx
import { cn } from '@/lib/utils';

export default function SomeComponent(){
	return (
		<div className={cn('w-48 bg-rose-400', true&&'h-48')}></div>
	)
}
```

## Use Cases

### Pass down classname props from a high level component

```tsx
import { cn } from '@/lib/utils';

export default function SomeComponent({className}:{className?:string}){
	return (
		<div className={cn('py-2', className)}></div>
	)
}
```

### Toggle classes conditionally

```tsx
'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function SomeComponent() {
	const [bgIsRose, setBgIsRose] = useState(true);

	return (
		<button
			className={cn('py-2 w-48 h-48', bgIsRose && 'bg-rose-500')}
			onClick={() => setBgIsRose(!bgIsRose)}
		>
			{bgIsRose ? 'Remove Rose' : 'Add Rose'}
		</button>
	);
}
```
