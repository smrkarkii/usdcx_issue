import {
  MerkleProof
} from "./types/merkle_tree";
import {
  getMerkleProofLeo
} from "./js2leo/merkle_tree";
import {
  getMerkleProof
} from "./leo2js/merkle_tree";
import {
  ContractConfig,
  zkGetMapping,
  LeoAddress,
  LeoRecord,
  js2leo,
  leo2js,
  ExternalRecord,
  ExecutionMode,
  ExecutionContext,
  CreateExecutionContext,
  TransactionResponse
} from "@doko-js/core";
import {
  BaseContract
} from "../../contract/base-contract";
import {
  Transaction
} from "@provablehq/sdk";
import * as receipt from "./transitions/merkle_tree";

export class Merkle_treeContract extends BaseContract {

  constructor(config: Partial < ContractConfig > = {
    mode: ExecutionMode.LeoRun
  }) {
    super({
      ...config,
      appName: 'merkle_tree',
      fee: '0.01',
      contractPath: 'artifacts/leo/merkle_tree',
      isImportedAleo: false
    });
  }
  async verify_inclusion(r0: LeoAddress, r1: MerkleProof): Promise < TransactionResponse < Transaction & receipt.Merkle_treeVerify_inclusionTransition, [bigint] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.json(getMerkleProofLeo(r1));

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('verify_inclusion', params);
    result.set_converter_fn([leo2js.field]);
    return result
  }

  async verify_non_inclusion(r0: LeoAddress, r1: Array < MerkleProof > ): Promise < TransactionResponse < Transaction & receipt.Merkle_treeVerify_non_inclusionTransition, [bigint] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.arr2string(js2leo.array(r1, getMerkleProofLeo));

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('verify_non_inclusion', params);
    result.set_converter_fn([leo2js.field]);
    return result
  }


}