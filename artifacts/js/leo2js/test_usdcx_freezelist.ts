import {
  ChecksumEdition,
  ChecksumEditionLeo,
  MerkleProof,
  MerkleProofLeo,
  WalletEcdsaSigner,
  WalletEcdsaSignerLeo,
  WalletSigningOpId,
  WalletSigningOpIdLeo,
  AdminOp,
  AdminOpLeo
} from "../types/test_usdcx_freezelist";
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


export function getChecksumEdition(checksumEdition: ChecksumEditionLeo): ChecksumEdition {
  const result: ChecksumEdition = {
    checksum: leo2js.array(checksumEdition.checksum, leo2js.u8),
    edition: leo2js.u16(checksumEdition.edition),
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