export interface ContractIdentifier {
  address: string;
  name: string;
}

export interface LetterDrop {
  id: number;
  letter: string;
  droppedBy: string;
  droppedAt: number;
}

export interface TxOptions {
  fee?: number;
  nonce?: number;
  postConditions?: unknown[];
}
