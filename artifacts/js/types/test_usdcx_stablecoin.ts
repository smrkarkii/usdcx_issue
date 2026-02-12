import {
  z
} from "zod";
import {
  leoAddressSchema,
  leoPrivateKeySchema,
  leoViewKeySchema,
  leoTxIdSchema,
  leoScalarSchema,
  leoFieldSchema,
  leoBooleanSchema,
  leoU8Schema,
  leoU16Schema,
  leoU32Schema,
  leoU64Schema,
  leoU128Schema,
  leoGroupSchema,
  leoRecordSchema,
  leoTxSchema,
  leoSignatureSchema,
  LeoArray,
  LeoAddress,
  ExternalRecord,
  tx
} from "@doko-js/core";

export interface Token {
  owner: LeoAddress;
  amount: bigint;
  _nonce: bigint;
  _version: number;
}

export const leoTokenSchema = z.object({
  owner: leoAddressSchema,
  amount: leoU128Schema,
  _nonce: leoGroupSchema,
  _version: leoU8Schema,
});
export type TokenLeo = z.infer < typeof leoTokenSchema > ;

export interface ComplianceRecord {
  owner: LeoAddress;
  amount: bigint;
  sender: LeoAddress;
  recipient: LeoAddress;
  _nonce: bigint;
  _version: number;
}

export const leoComplianceRecordSchema = z.object({
  owner: leoAddressSchema,
  amount: leoU128Schema,
  sender: leoAddressSchema,
  recipient: leoAddressSchema,
  _nonce: leoGroupSchema,
  _version: leoU8Schema,
});
export type ComplianceRecordLeo = z.infer < typeof leoComplianceRecordSchema > ;

export interface Credentials {
  owner: LeoAddress;
  freeze_list_root: bigint;
  _nonce: bigint;
  _version: number;
}

export const leoCredentialsSchema = z.object({
  owner: leoAddressSchema,
  freeze_list_root: leoFieldSchema,
  _nonce: leoGroupSchema,
  _version: leoU8Schema,
});
export type CredentialsLeo = z.infer < typeof leoCredentialsSchema > ;

export interface ChecksumEdition {
  checksum: Array < number > ;
  edition: number;
}

export const leoChecksumEditionSchema = z.object({
  checksum: z.array(leoU8Schema).length(32),
  edition: leoU16Schema,
});
export type ChecksumEditionLeo = z.infer < typeof leoChecksumEditionSchema > ;

export interface TokenInfo {
  name: bigint;
  symbol: bigint;
  decimals: number;
  supply: bigint;
  max_supply: bigint;
}

export const leoTokenInfoSchema = z.object({
  name: leoU128Schema,
  symbol: leoU128Schema,
  decimals: leoU8Schema,
  supply: leoU128Schema,
  max_supply: leoU128Schema,
});
export type TokenInfoLeo = z.infer < typeof leoTokenInfoSchema > ;

export interface TokenAllowance {
  account: LeoAddress;
  spender: LeoAddress;
}

export const leoTokenAllowanceSchema = z.object({
  account: leoAddressSchema,
  spender: leoAddressSchema,
});
export type TokenAllowanceLeo = z.infer < typeof leoTokenAllowanceSchema > ;

export interface MerkleProof {
  siblings: Array < bigint > ;
  leaf_index: number;
}

export const leoMerkleProofSchema = z.object({
  siblings: z.array(leoFieldSchema).length(16),
  leaf_index: leoU32Schema,
});
export type MerkleProofLeo = z.infer < typeof leoMerkleProofSchema > ;

export interface WalletEcdsaSigner {
  wallet_id: LeoAddress;
  ecdsa_signer: Array < number > ;
}

export const leoWalletEcdsaSignerSchema = z.object({
  wallet_id: leoAddressSchema,
  ecdsa_signer: z.array(leoU8Schema).length(20),
});
export type WalletEcdsaSignerLeo = z.infer < typeof leoWalletEcdsaSignerSchema > ;

export interface WalletSigningOpId {
  wallet_id: LeoAddress;
  signing_op_id: bigint;
}

export const leoWalletSigningOpIdSchema = z.object({
  wallet_id: leoAddressSchema,
  signing_op_id: leoFieldSchema,
});
export type WalletSigningOpIdLeo = z.infer < typeof leoWalletSigningOpIdSchema > ;

export interface AdminOp {
  op: number;
  threshold: number;
  aleo_signer: LeoAddress;
  ecdsa_signer: Array < number > ;
}

export const leoAdminOpSchema = z.object({
  op: leoU8Schema,
  threshold: leoU8Schema,
  aleo_signer: leoAddressSchema,
  ecdsa_signer: z.array(leoU8Schema).length(20),
});
export type AdminOpLeo = z.infer < typeof leoAdminOpSchema > ;