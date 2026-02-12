import {
  tx
} from "@doko-js/core";
import * as records from "../types/test_usdcx_stablecoin";


export type Test_usdcx_stablecoinGet_signing_op_id_for_deployTransition = tx.ExecutionReceipt < [tx.Transition < [tx.PrivateOutput], 'test_usdcx_stablecoin', 'get_signing_op_id_for_deploy' > , ] >
  export type Test_usdcx_stablecoinUpdate_roleTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_stablecoin', 'update_role' > , ] >
  export type Test_usdcx_stablecoinInitializeTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_stablecoin', 'initialize' > , ] >
  export type Test_usdcx_stablecoinGet_credentialsTransition = tx.ExecutionReceipt < [tx.Transition < [tx.RecordOutput < records.Credentials > , tx.FutureOutput], 'test_usdcx_stablecoin', 'get_credentials' > , ] >
  export type Test_usdcx_stablecoinMint_publicTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_stablecoin', 'mint_public' > , ] >
  export type Test_usdcx_stablecoinMint_privateTransition = tx.ExecutionReceipt < [tx.Transition < [tx.RecordOutput < records.ComplianceRecord > , tx.RecordOutput < records.Token > , tx.FutureOutput], 'test_usdcx_stablecoin', 'mint_private' > , ] >
  export type Test_usdcx_stablecoinBurn_publicTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_stablecoin', 'burn_public' > , ] >
  export type Test_usdcx_stablecoinBurn_privateTransition = tx.ExecutionReceipt < [tx.Transition < [tx.RecordOutput < records.ComplianceRecord > , tx.RecordOutput < records.Token > , tx.FutureOutput], 'test_usdcx_stablecoin', 'burn_private' > , ] >
  export type Test_usdcx_stablecoinTransfer_publicTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_stablecoin', 'transfer_public' > , ] >
  export type Test_usdcx_stablecoinTransfer_public_as_signerTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_stablecoin', 'transfer_public_as_signer' > , ] >
  export type Test_usdcx_stablecoinApprove_publicTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_stablecoin', 'approve_public' > , ] >
  export type Test_usdcx_stablecoinUnapprove_publicTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_stablecoin', 'unapprove_public' > , ] >
  export type Test_usdcx_stablecoinTransfer_from_publicTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_stablecoin', 'transfer_from_public' > , ] >
  export type Test_usdcx_stablecoinTransfer_public_to_privateTransition = tx.ExecutionReceipt < [tx.Transition < [tx.RecordOutput < records.ComplianceRecord > , tx.RecordOutput < records.Token > , tx.FutureOutput], 'test_usdcx_stablecoin', 'transfer_public_to_private' > , ] >
  export type Test_usdcx_stablecoinTransfer_from_public_to_privateTransition = tx.ExecutionReceipt < [tx.Transition < [tx.RecordOutput < records.ComplianceRecord > , tx.RecordOutput < records.Token > , tx.FutureOutput], 'test_usdcx_stablecoin', 'transfer_from_public_to_private' > , ] >
  export type Test_usdcx_stablecoinTransfer_privateTransition = tx.ExecutionReceipt < [tx.Transition < [tx.RecordOutput < records.ComplianceRecord > , tx.RecordOutput < records.Token > , tx.RecordOutput < records.Token > , tx.FutureOutput], 'test_usdcx_stablecoin', 'transfer_private' > , ] >
  export type Test_usdcx_stablecoinTransfer_private_to_publicTransition = tx.ExecutionReceipt < [tx.Transition < [tx.RecordOutput < records.ComplianceRecord > , tx.RecordOutput < records.Token > , tx.FutureOutput], 'test_usdcx_stablecoin', 'transfer_private_to_public' > , ] >
  export type Test_usdcx_stablecoinSet_pause_statusTransition = tx.ExecutionReceipt < [tx.Transition < [tx.FutureOutput], 'test_usdcx_stablecoin', 'set_pause_status' > , ] >
  export type Test_usdcx_stablecoinJoinTransition = tx.ExecutionReceipt < [tx.Transition < [tx.RecordOutput < records.Token > ], 'test_usdcx_stablecoin', 'join' > , ] >
  export type Test_usdcx_stablecoinSplitTransition = tx.ExecutionReceipt < [tx.Transition < [tx.RecordOutput < records.Token > , tx.RecordOutput < records.Token > ], 'test_usdcx_stablecoin', 'split' > , ] >
  export type Test_usdcx_stablecoinTransfer_private_with_credsTransition = tx.ExecutionReceipt < [tx.Transition < [tx.RecordOutput < records.ComplianceRecord > , tx.RecordOutput < records.Token > , tx.RecordOutput < records.Token > , tx.RecordOutput < records.Credentials > , tx.FutureOutput], 'test_usdcx_stablecoin', 'transfer_private_with_creds' > , ] >