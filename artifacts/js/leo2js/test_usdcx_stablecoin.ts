import {
  Token,
  TokenLeo,
  ComplianceRecord,
  ComplianceRecordLeo,
  Credentials,
  CredentialsLeo,
  ChecksumEdition,
  ChecksumEditionLeo,
  TokenInfo,
  TokenInfoLeo,
  TokenAllowance,
  TokenAllowanceLeo,
  MerkleProof,
  MerkleProofLeo,
  WalletEcdsaSigner,
  WalletEcdsaSignerLeo,
  WalletSigningOpId,
  WalletSigningOpIdLeo,
  AdminOp,
  AdminOpLeo
} from "../types/test_usdcx_stablecoin";
import {
  leo2js,
  tx,
  parseJSONLikeString
} from "@doko-js/core";
import {
  PrivateKey,
  Account,
  RecordCiphertext
} from "@provablehq/sdk"


export function getToken(token: TokenLeo): Token {
  const result: Token = {
    owner: leo2js.address(token.owner),
    amount: leo2js.u128(token.amount),
    _nonce: leo2js.group(token._nonce),
    _version: leo2js.u8(token._version),
  }
  return result;
}


export function decryptToken(token: tx.RecordOutput < Token > | string, privateKey: string): Token {
  const encodedRecord: string = typeof token === 'string' ? token : token.value;
  const decodedRecord: string = RecordCiphertext.fromString(encodedRecord).decrypt(new Account({
    privateKey
  }).viewKey()).toString();
  const result: Token = getToken(parseJSONLikeString(decodedRecord) as TokenLeo);

  return result;
}

export function getComplianceRecord(complianceRecord: ComplianceRecordLeo): ComplianceRecord {
  const result: ComplianceRecord = {
    owner: leo2js.address(complianceRecord.owner),
    amount: leo2js.u128(complianceRecord.amount),
    sender: leo2js.address(complianceRecord.sender),
    recipient: leo2js.address(complianceRecord.recipient),
    _nonce: leo2js.group(complianceRecord._nonce),
    _version: leo2js.u8(complianceRecord._version),
  }
  return result;
}


export function decryptComplianceRecord(complianceRecord: tx.RecordOutput < ComplianceRecord > | string, privateKey: string): ComplianceRecord {
  const encodedRecord: string = typeof complianceRecord === 'string' ? complianceRecord : complianceRecord.value;
  const decodedRecord: string = RecordCiphertext.fromString(encodedRecord).decrypt(new Account({
    privateKey
  }).viewKey()).toString();
  const result: ComplianceRecord = getComplianceRecord(parseJSONLikeString(decodedRecord) as ComplianceRecordLeo);

  return result;
}

export function getCredentials(credentials: CredentialsLeo): Credentials {
  const result: Credentials = {
    owner: leo2js.address(credentials.owner),
    freeze_list_root: leo2js.field(credentials.freeze_list_root),
    _nonce: leo2js.group(credentials._nonce),
    _version: leo2js.u8(credentials._version),
  }
  return result;
}


export function decryptCredentials(credentials: tx.RecordOutput < Credentials > | string, privateKey: string): Credentials {
  const encodedRecord: string = typeof credentials === 'string' ? credentials : credentials.value;
  const decodedRecord: string = RecordCiphertext.fromString(encodedRecord).decrypt(new Account({
    privateKey
  }).viewKey()).toString();
  const result: Credentials = getCredentials(parseJSONLikeString(decodedRecord) as CredentialsLeo);

  return result;
}

export function getChecksumEdition(checksumEdition: ChecksumEditionLeo): ChecksumEdition {
  const result: ChecksumEdition = {
    checksum: leo2js.array(checksumEdition.checksum, leo2js.u8),
    edition: leo2js.u16(checksumEdition.edition),
  }
  return result;
}

export function getTokenInfo(tokenInfo: TokenInfoLeo): TokenInfo {
  const result: TokenInfo = {
    name: leo2js.u128(tokenInfo.name),
    symbol: leo2js.u128(tokenInfo.symbol),
    decimals: leo2js.u8(tokenInfo.decimals),
    supply: leo2js.u128(tokenInfo.supply),
    max_supply: leo2js.u128(tokenInfo.max_supply),
  }
  return result;
}

export function getTokenAllowance(tokenAllowance: TokenAllowanceLeo): TokenAllowance {
  const result: TokenAllowance = {
    account: leo2js.address(tokenAllowance.account),
    spender: leo2js.address(tokenAllowance.spender),
  }
  return result;
}

export function getMerkleProof(merkleProof: MerkleProofLeo): MerkleProof {
  const result: MerkleProof = {
    siblings: leo2js.array(merkleProof.siblings, leo2js.field),
    leaf_index: leo2js.u32(merkleProof.leaf_index),
  }
  return result;
}

export function getWalletEcdsaSigner(walletEcdsaSigner: WalletEcdsaSignerLeo): WalletEcdsaSigner {
  const result: WalletEcdsaSigner = {
    wallet_id: leo2js.address(walletEcdsaSigner.wallet_id),
    ecdsa_signer: leo2js.array(walletEcdsaSigner.ecdsa_signer, leo2js.u8),
  }
  return result;
}

export function getWalletSigningOpId(walletSigningOpId: WalletSigningOpIdLeo): WalletSigningOpId {
  const result: WalletSigningOpId = {
    wallet_id: leo2js.address(walletSigningOpId.wallet_id),
    signing_op_id: leo2js.field(walletSigningOpId.signing_op_id),
  }
  return result;
}

export function getAdminOp(adminOp: AdminOpLeo): AdminOp {
  const result: AdminOp = {
    op: leo2js.u8(adminOp.op),
    threshold: leo2js.u8(adminOp.threshold),
    aleo_signer: leo2js.address(adminOp.aleo_signer),
    ecdsa_signer: leo2js.array(adminOp.ecdsa_signer, leo2js.u8),
  }
  return result;
}