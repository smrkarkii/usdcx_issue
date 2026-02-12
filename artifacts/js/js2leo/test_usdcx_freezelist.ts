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
  js2leo
} from "@doko-js/core";


export function getChecksumEditionLeo(checksumEdition: ChecksumEdition): ChecksumEditionLeo {
  const result: ChecksumEditionLeo = {
    checksum: js2leo.array(checksumEdition.checksum, js2leo.u8),
    edition: js2leo.u16(checksumEdition.edition),
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