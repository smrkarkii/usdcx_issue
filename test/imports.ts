import { ExecutionMode } from "@doko-js/core";
import { Test_usdcx_multisig_coreContract } from "../artifacts/js/test_usdcx_multisig_core";
import { Test_usdcx_freezelistContract } from "../artifacts/js/test_usdcx_freezelist";
import { Test_usdcx_stablecoinContract } from "../artifacts/js/test_usdcx_stablecoin";
import { Merkle_treeContract } from "../artifacts/js/merkle_tree";

export const multisig_usdcx = new Test_usdcx_multisig_coreContract({
    mode: ExecutionMode.SnarkExecute,
});
export const freezelist_usdcx  = new Test_usdcx_freezelistContract({
    mode: ExecutionMode.SnarkExecute,
});
export const usdcx_stable  = new Test_usdcx_stablecoinContract({
    mode: ExecutionMode.SnarkExecute,
});
export const merkle_usdcx  = new Merkle_treeContract({
    mode: ExecutionMode.SnarkExecute,
});



export const TIMEOUT = 10000_000;
export const ZERO_FIELD = 0n;
