import {
  tx
} from "@doko-js/core";
import * as records from "../types/merkle_tree";


export type Merkle_treeVerify_inclusionTransition = tx.ExecutionReceipt < [tx.Transition < [tx.PrivateOutput], 'merkle_tree', 'verify_inclusion' > , ] >
  export type Merkle_treeVerify_non_inclusionTransition = tx.ExecutionReceipt < [tx.Transition < [tx.PrivateOutput], 'merkle_tree', 'verify_non_inclusion' > , ] >