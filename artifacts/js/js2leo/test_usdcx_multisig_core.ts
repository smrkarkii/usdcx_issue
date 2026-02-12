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
  js2leo
} from "@doko-js/core";


export function getProgramSettingsLeo(programSettings: ProgramSettings): ProgramSettingsLeo {
  const result: ProgramSettingsLeo = {
    allow_upgrades: js2leo.boolean(programSettings.allow_upgrades),
    upgrader_address: js2leo.address(programSettings.upgrader_address),
    guard_create_wallet: js2leo.boolean(programSettings.guard_create_wallet),
  }
  return result;
}

export function getGuardedCreateWalletOpLeo(guardedCreateWalletOp: GuardedCreateWalletOp): GuardedCreateWalletOpLeo {
  const result: GuardedCreateWalletOpLeo = {
    wallet_id: js2leo.address(guardedCreateWalletOp.wallet_id),
    threshold: js2leo.u8(guardedCreateWalletOp.threshold),
    aleo_signers: js2leo.array(guardedCreateWalletOp.aleo_signers, js2leo.address),
    ecdsa_signers: guardedCreateWalletOp.ecdsa_signers.map(element1 => js2leo.array(element1, js2leo.u8)),
  }
  return result;
}

export function getWalletAleoSignerLeo(walletAleoSigner: WalletAleoSigner): WalletAleoSignerLeo {
  const result: WalletAleoSignerLeo = {
    wallet_id: js2leo.address(walletAleoSigner.wallet_id),
    aleo_signer: js2leo.address(walletAleoSigner.aleo_signer),
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

export function getWalletSettingsLeo(walletSettings: WalletSettings): WalletSettingsLeo {
  const result: WalletSettingsLeo = {
    threshold: js2leo.u8(walletSettings.threshold),
    num_signers: js2leo.u8(walletSettings.num_signers),
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

export function getWalletSigningOpIdNonceLeo(walletSigningOpIdNonce: WalletSigningOpIdNonce): WalletSigningOpIdNonceLeo {
  const result: WalletSigningOpIdNonceLeo = {
    wallet_id: js2leo.address(walletSigningOpIdNonce.wallet_id),
    signing_op_id: js2leo.field(walletSigningOpIdNonce.signing_op_id),
    nonce: js2leo.u64(walletSigningOpIdNonce.nonce),
  }
  return result;
}

export function getWalletSigningOpLeo(walletSigningOp: WalletSigningOp): WalletSigningOpLeo {
  const result: WalletSigningOpLeo = {
    confirmations: js2leo.u8(walletSigningOp.confirmations),
    initiated_at_block: js2leo.u32(walletSigningOp.initiated_at_block),
    expires_at_block: js2leo.u32(walletSigningOp.expires_at_block),
    round: js2leo.u32(walletSigningOp.round),
  }
  return result;
}

export function getSigningOpConfirmationLeo(signingOpConfirmation: SigningOpConfirmation): SigningOpConfirmationLeo {
  const result: SigningOpConfirmationLeo = {
    wallet_signing_op_id_hash: js2leo.field(signingOpConfirmation.wallet_signing_op_id_hash),
    wallet_signer_hash: js2leo.field(signingOpConfirmation.wallet_signer_hash),
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