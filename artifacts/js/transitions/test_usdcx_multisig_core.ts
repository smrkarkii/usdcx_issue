import {
  tx
} from "@doko-js/core";
import * as records from "../types/test_usdcx_multisig_core";


export type Test_usdcx_multisig_coreInitTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_multisig_core', 'init' > , ] >
  export type Test_usdcx_multisig_coreDisallow_upgradesTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_multisig_core', 'disallow_upgrades' > , ] >
  export type Test_usdcx_multisig_coreSet_upgrader_addressTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_multisig_core', 'set_upgrader_address' > , ] >
  export type Test_usdcx_multisig_coreCreate_walletTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_multisig_core', 'create_wallet' > , ] >
  export type Test_usdcx_multisig_coreInitiate_signing_opTransition = tx.ExecutionReceipt < [tx.Transition < [tx.PrivateOutput, tx.FutureOutput], 'test_usdcx_multisig_core', 'initiate_signing_op' > , ] >
  export type Test_usdcx_multisig_coreSignTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_multisig_core', 'sign' > , ] >
  export type Test_usdcx_multisig_coreSign_for_roundTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_multisig_core', 'sign_for_round' > , ] >
  export type Test_usdcx_multisig_coreSign_ecdsaTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_multisig_core', 'sign_ecdsa' > , ] >
  export type Test_usdcx_multisig_coreSign_ecdsa_for_roundTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_multisig_core', 'sign_ecdsa_for_round' > , ] >
  export type Test_usdcx_multisig_coreInit_admin_opTransition = tx.ExecutionReceipt < [tx.Transition < [tx.PrivateOutput, tx.FutureOutput], 'test_usdcx_multisig_core', 'init_admin_op' > , ] >
  export type Test_usdcx_multisig_coreExec_admin_opTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_multisig_core', 'exec_admin_op' > , ] >
  export type Test_usdcx_multisig_coreGet_signing_op_id_hashTransition = tx.ExecutionReceipt < [tx.Transition < [tx.PrivateOutput], 'test_usdcx_multisig_core', 'get_signing_op_id_hash' > , ] >
  export type Test_usdcx_multisig_coreGuarded_create_wallet_op_hashTransition = tx.ExecutionReceipt < [tx.Transition < [tx.PrivateOutput], 'test_usdcx_multisig_core', 'guarded_create_wallet_op_hash' > , ] >
  export type Test_usdcx_multisig_coreAssert_signing_completedTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_multisig_core', 'assert_signing_completed' > , ] >