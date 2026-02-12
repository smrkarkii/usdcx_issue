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

export interface ProgramSettings {
  allow_upgrades: boolean;
  upgrader_address: LeoAddress;
  guard_create_wallet: boolean;
}

export const leoProgramSettingsSchema = z.object({
  allow_upgrades: leoBooleanSchema,
  upgrader_address: leoAddressSchema,
  guard_create_wallet: leoBooleanSchema,
});
export type ProgramSettingsLeo = z.infer < typeof leoProgramSettingsSchema > ;

export interface GuardedCreateWalletOp {
  wallet_id: LeoAddress;
  threshold: number;
  aleo_signers: Array < LeoAddress > ;
  ecdsa_signers: Array < Array < number >> ;
}

export const leoGuardedCreateWalletOpSchema = z.object({
  wallet_id: leoAddressSchema,
  threshold: leoU8Schema,
  aleo_signers: z.array(leoAddressSchema).length(4),
  ecdsa_signers: z.array(z.array(leoU8Schema).length(20)).length(4),
});
export type GuardedCreateWalletOpLeo = z.infer < typeof leoGuardedCreateWalletOpSchema > ;

export interface WalletAleoSigner {
  wallet_id: LeoAddress;
  aleo_signer: LeoAddress;
}

export const leoWalletAleoSignerSchema = z.object({
  wallet_id: leoAddressSchema,
  aleo_signer: leoAddressSchema,
});
export type WalletAleoSignerLeo = z.infer < typeof leoWalletAleoSignerSchema > ;

export interface WalletEcdsaSigner {
  wallet_id: LeoAddress;
  ecdsa_signer: Array < number > ;
}

export const leoWalletEcdsaSignerSchema = z.object({
  wallet_id: leoAddressSchema,
  ecdsa_signer: z.array(leoU8Schema).length(20),
});
export type WalletEcdsaSignerLeo = z.infer < typeof leoWalletEcdsaSignerSchema > ;

export interface WalletSettings {
  threshold: number;
  num_signers: number;
}

export const leoWalletSettingsSchema = z.object({
  threshold: leoU8Schema,
  num_signers: leoU8Schema,
});
export type WalletSettingsLeo = z.infer < typeof leoWalletSettingsSchema > ;

export interface WalletSigningOpId {
  wallet_id: LeoAddress;
  signing_op_id: bigint;
}

export const leoWalletSigningOpIdSchema = z.object({
  wallet_id: leoAddressSchema,
  signing_op_id: leoFieldSchema,
});
export type WalletSigningOpIdLeo = z.infer < typeof leoWalletSigningOpIdSchema > ;

export interface WalletSigningOpIdNonce {
  wallet_id: LeoAddress;
  signing_op_id: bigint;
  nonce: bigint;
}

export const leoWalletSigningOpIdNonceSchema = z.object({
  wallet_id: leoAddressSchema,
  signing_op_id: leoFieldSchema,
  nonce: leoU64Schema,
});
export type WalletSigningOpIdNonceLeo = z.infer < typeof leoWalletSigningOpIdNonceSchema > ;

export interface WalletSigningOp {
  confirmations: number;
  initiated_at_block: number;
  expires_at_block: number;
  round: number;
}

export const leoWalletSigningOpSchema = z.object({
  confirmations: leoU8Schema,
  initiated_at_block: leoU32Schema,
  expires_at_block: leoU32Schema,
  round: leoU32Schema,
});
export type WalletSigningOpLeo = z.infer < typeof leoWalletSigningOpSchema > ;

export interface SigningOpConfirmation {
  wallet_signing_op_id_hash: bigint;
  wallet_signer_hash: bigint;
}

export const leoSigningOpConfirmationSchema = z.object({
  wallet_signing_op_id_hash: leoFieldSchema,
  wallet_signer_hash: leoFieldSchema,
});
export type SigningOpConfirmationLeo = z.infer < typeof leoSigningOpConfirmationSchema > ;

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