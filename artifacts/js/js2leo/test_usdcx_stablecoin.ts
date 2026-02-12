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
  js2leo
} from "@doko-js/core";


export function getTokenLeo(token: Token): TokenLeo {
  const result: TokenLeo = {
    owner: js2leo.privateField(js2leo.address(token.owner)),
    amount: js2leo.privateField(js2leo.u128(token.amount)),
    _nonce: js2leo.publicField(js2leo.group(token._nonce)),
    _version: js2leo.publicField(js2leo.u8(token._version)),
  }
  return result;
}

export function getComplianceRecordLeo(complianceRecord: ComplianceRecord): ComplianceRecordLeo {
  const result: ComplianceRecordLeo = {
    owner: js2leo.privateField(js2leo.address(complianceRecord.owner)),
    amount: js2leo.privateField(js2leo.u128(complianceRecord.amount)),
    sender: js2leo.privateField(js2leo.address(complianceRecord.sender)),
    recipient: js2leo.privateField(js2leo.address(complianceRecord.recipient)),
    _nonce: js2leo.publicField(js2leo.group(complianceRecord._nonce)),
    _version: js2leo.publicField(js2leo.u8(complianceRecord._version)),
  }
  return result;
}

export function getCredentialsLeo(credentials: Credentials): CredentialsLeo {
  const result: CredentialsLeo = {
    owner: js2leo.privateField(js2leo.address(credentials.owner)),
    freeze_list_root: js2leo.privateField(js2leo.field(credentials.freeze_list_root)),
    _nonce: js2leo.publicField(js2leo.group(credentials._nonce)),
    _version: js2leo.publicField(js2leo.u8(credentials._version)),
  }
  return result;
}

export function getChecksumEditionLeo(checksumEdition: ChecksumEdition): ChecksumEditionLeo {
  const result: ChecksumEditionLeo = {
    checksum: js2leo.array(checksumEdition.checksum, js2leo.u8),
    edition: js2leo.u16(checksumEdition.edition),
  }
  return result;
}

export function getTokenInfoLeo(tokenInfo: TokenInfo): TokenInfoLeo {
  const result: TokenInfoLeo = {
    name: js2leo.u128(tokenInfo.name),
    symbol: js2leo.u128(tokenInfo.symbol),
    decimals: js2leo.u8(tokenInfo.decimals),
    supply: js2leo.u128(tokenInfo.supply),
    max_supply: js2leo.u128(tokenInfo.max_supply),
  }
  return result;
}

export function getTokenAllowanceLeo(tokenAllowance: TokenAllowance): TokenAllowanceLeo {
  const result: TokenAllowanceLeo = {
    account: js2leo.address(tokenAllowance.account),
    spender: js2leo.address(tokenAllowance.spender),
  }
  return result;
}

export function getMerkleProofLeo(merkleProof: MerkleProof): MerkleProofLeo {
  const result: MerkleProofLeo = {
    siblings: js2leo.array(merkleProof.siblings, js2leo.field),
    leaf_index: js2leo.u32(merkleProof.leaf_index),
  }
  return result;
}

export function getWalletEcdsaSignerLeo(walletEcdsaSigner: WalletEcdsaSigner): WalletEcdsaSignerLeo {
  const result: WalletEcdsaSignerLeo = {
    wallet_id: js2leo.address(walletEcdsaSigner.wallet_id),
    ecdsa_signer: js2leo.array(walletEcdsaSigner.ecdsa_signer, js2leo.u8),
  }
  return result;
}

export function getWalletSigningOpIdLeo(walletSigningOpId: WalletSigningOpId): WalletSigningOpIdLeo {
  const result: WalletSigningOpIdLeo = {
    wallet_id: js2leo.address(walletSigningOpId.wallet_id),
    signing_op_id: js2leo.field(walletSigningOpId.signing_op_id),
  }
  return result;
}

export function getAdminOpLeo(adminOp: AdminOp): AdminOpLeo {
  const result: AdminOpLeo = {
    op: js2leo.u8(adminOp.op),
    threshold: js2leo.u8(adminOp.threshold),
    aleo_signer: js2leo.address(adminOp.aleo_signer),
    ecdsa_signer: js2leo.array(adminOp.ecdsa_signer, js2leo.u8),
  }
  return result;
}