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

export interface ChecksumEdition {
  checksum: Array < number > ;
  edition: number;
}

export const leoChecksumEditionSchema = z.object({
  checksum: z.array(leoU8Schema).length(32),
  edition: leoU16Schema,
});
export type ChecksumEditionLeo = z.infer < typeof leoChecksumEditionSchema > ;

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