import {
  ProgramSettings,
  ProgramSettingsLeo,
  GuardedCreateWalletOp,
  GuardedCreateWalletOpLeo,
  WalletAleoSigner,
  WalletAleoSignerLeo,
  WalletEcdsaSigner,
  WalletEcdsaSignerLeo,
  WalletSettings,
  WalletSettingsLeo,
  WalletSigningOpId,
  WalletSigningOpIdLeo,
  WalletSigningOpIdNonce,
  WalletSigningOpIdNonceLeo,
  WalletSigningOp,
  WalletSigningOpLeo,
  SigningOpConfirmation,
  SigningOpConfirmationLeo,
  AdminOp,
  AdminOpLeo
} from "../types/test_usdcx_multisig_core";
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


export function getProgramSettings(programSettings: ProgramSettingsLeo): ProgramSettings {
  const result: ProgramSettings = {
    allow_upgrades: leo2js.boolean(programSettings.allow_upgrades),
    upgrader_address: leo2js.address(programSettings.upgrader_address),
    guard_create_wallet: leo2js.boolean(programSettings.guard_create_wallet),
  }
  return result;
}

export function getGuardedCreateWalletOp(guardedCreateWalletOp: GuardedCreateWalletOpLeo): GuardedCreateWalletOp {
  const result: GuardedCreateWalletOp = {
    wallet_id: leo2js.address(guardedCreateWalletOp.wallet_id),
    threshold: leo2js.u8(guardedCreateWalletOp.threshold),
    aleo_signers: leo2js.array(guardedCreateWalletOp.aleo_signers, leo2js.address),
    ecdsa_signers: guardedCreateWalletOp.ecdsa_signers.map(element1 => leo2js.array(element1, leo2js.u8)),
  }
  return result;
}

export function getWalletAleoSigner(walletAleoSigner: WalletAleoSignerLeo): WalletAleoSigner {
  const result: WalletAleoSigner = {
    wallet_id: leo2js.address(walletAleoSigner.wallet_id),
    aleo_signer: leo2js.address(walletAleoSigner.aleo_signer),
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

export function getWalletSettings(walletSettings: WalletSettingsLeo): WalletSettings {
  const result: WalletSettings = {
    threshold: leo2js.u8(walletSettings.threshold),
    num_signers: leo2js.u8(walletSettings.num_signers),
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

export function getWalletSigningOpIdNonce(walletSigningOpIdNonce: WalletSigningOpIdNonceLeo): WalletSigningOpIdNonce {
  const result: WalletSigningOpIdNonce = {
    wallet_id: leo2js.address(walletSigningOpIdNonce.wallet_id),
    signing_op_id: leo2js.field(walletSigningOpIdNonce.signing_op_id),
    nonce: leo2js.u64(walletSigningOpIdNonce.nonce),
  }
  return result;
}

export function getWalletSigningOp(walletSigningOp: WalletSigningOpLeo): WalletSigningOp {
  const result: WalletSigningOp = {
    confirmations: leo2js.u8(walletSigningOp.confirmations),
    initiated_at_block: leo2js.u32(walletSigningOp.initiated_at_block),
    expires_at_block: leo2js.u32(walletSigningOp.expires_at_block),
    round: leo2js.u32(walletSigningOp.round),
  }
  return result;
}

export function getSigningOpConfirmation(signingOpConfirmation: SigningOpConfirmationLeo): SigningOpConfirmation {
  const result: SigningOpConfirmation = {
    wallet_signing_op_id_hash: leo2js.field(signingOpConfirmation.wallet_signing_op_id_hash),
    wallet_signer_hash: leo2js.field(signingOpConfirmation.wallet_signer_hash),
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