import {
  tx
} from "@doko-js/core";
import * as records from "../types/test_usdcx_freezelist";
import {
  Merkle_treeVerify_non_inclusionTransition
} from "./merkle_tree";

export type Test_usdcx_freezelistInitializeTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_freezelist', 'initialize' > , ] >
  export type Test_usdcx_freezelistUpdate_roleTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_freezelist', 'update_role' > , ] >
  export type Test_usdcx_freezelistUpdate_block_height_windowTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_freezelist', 'update_block_height_window' > , ] >
  export type Test_usdcx_freezelistUpdate_freeze_listTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_freezelist', 'update_freeze_list' > , ] >
  export type Test_usdcx_freezelistVerify_non_inclusion_pubTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_freezelist', 'verify_non_inclusion_pub' > , ] >
  export type Test_usdcx_freezelistVerify_non_inclusion_privTransition = tx.ExecutionReceipt < [...Merkle_treeVerify_non_inclusionTransition['execution']['transitions'],
    tx.Transition < [tx.FutureOutput], 'test_usdcx_freezelist', 'verify_non_inclusion_priv' > ,
  ] >