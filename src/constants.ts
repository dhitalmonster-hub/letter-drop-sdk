export const STACKS_MAINNET = 'https://api.mainnet.hiro.so';
export const STACKS_TESTNET = 'https://api.testnet.hiro.so';

export const DEFAULT_FEE_USTX = 5_000;
export const MICROSTX_PER_STX = 1_000_000;

export const CLARITY_VERSION = 4;

export const MAX_WORD_LENGTH = 16;
export const LETTERS_PER_DROP = 1;
export const SCORE_PER_VALID_WORD = 10;

export const NETWORKS = {
  mainnet: STACKS_MAINNET,
  testnet: STACKS_TESTNET,
} as const;

export type NetworkName = keyof typeof NETWORKS;
