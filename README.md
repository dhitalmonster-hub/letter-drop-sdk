# letter-drop-sdk

TypeScript SDK for daily letter-drop puzzles on the Stacks blockchain — submit letters, guess words, score chains.

## Install

```bash
npm install letter-drop-sdk
```

## Usage

```ts
import { buildReadOnlyUrl, parseContractId } from 'letter-drop-sdk';

const contract = parseContractId('SP20Z3WPE6PVN1B8APDQNDH5BR1AJNMR25QPCSGFT.letter-drop');
if (contract) {
  const url = buildReadOnlyUrl({ contract, functionName: 'get-letter-drop' });
  console.log(url);
}
```

## What's inside

- `constants` — network endpoints, project-specific defaults
- `utils` — address/contract-name validation, parsing, formatting, STX conversion
- `contract` — read-only call URL helpers
- `types` — `LetterDrop` and related shapes

## Scripts

```bash
npm test           # vitest run
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # tsup → dist/
```

## License

MIT
