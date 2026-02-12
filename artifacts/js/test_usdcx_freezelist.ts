import {
  MerkleProof
} from "./types/test_usdcx_freezelist";
import {
  getMerkleProofLeo
} from "./js2leo/test_usdcx_freezelist";
import {
  getMerkleProof
} from "./leo2js/test_usdcx_freezelist";
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
import * as receipt from "./transitions/test_usdcx_freezelist";

export class Test_usdcx_freezelistContract extends BaseContract {

  constructor(config: Partial < ContractConfig > = {
    mode: ExecutionMode.LeoRun
  }) {
    super({
      ...config,
      appName: 'test_usdcx_freezelist',
      fee: '0.01',
      contractPath: 'artifacts/leo/test_usdcx_freezelist',
      isImportedAleo: false
    });
  }
  async initialize(r0: LeoAddress, r1: number): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_freezelistInitializeTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u32(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('initialize', params);
    return result
  }

  async update_role(r0: LeoAddress, r1: number): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_freezelistUpdate_roleTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u16(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('update_role', params);
    return result
  }

  async update_block_height_window(r0: number): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_freezelistUpdate_block_height_windowTransition, [] >> {
    const r0Leo = js2leo.u32(r0);

    const params = [r0Leo]
    const result = await this.ctx.execute('update_block_height_window', params);
    return result
  }

  async update_freeze_list(r0: LeoAddress, r1: boolean, r2: number, r3: bigint, r4: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_freezelistUpdate_freeze_listTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.boolean(r1);
    const r2Leo = js2leo.u32(r2);
    const r3Leo = js2leo.field(r3);
    const r4Leo = js2leo.field(r4);

    const params = [r0Leo, r1Leo, r2Leo, r3Leo, r4Leo]
    const result = await this.ctx.execute('update_freeze_list', params);
    return result
  }

  async verify_non_inclusion_pub(r0: LeoAddress): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_freezelistVerify_non_inclusion_pubTransition, [] >> {
    const r0Leo = js2leo.address(r0);

    const params = [r0Leo]
    const result = await this.ctx.execute('verify_non_inclusion_pub', params);
    return result
  }

  async verify_non_inclusion_priv(r0: LeoAddress, r1: Array < MerkleProof > ): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_freezelistVerify_non_inclusion_privTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.arr2string(js2leo.array(r1, getMerkleProofLeo));

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('verify_non_inclusion_priv', params);
    return result
  }

  async address_to_role(key: LeoAddress, defaultValue ? : number): Promise < number > {
    const keyLeo = js2leo.address(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'address_to_role',
      params[0],
    );

    if (result != null)
      return leo2js.u16(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`address_to_role returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async freeze_list(key: LeoAddress, defaultValue ? : boolean): Promise < boolean > {
    const keyLeo = js2leo.address(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'freeze_list',
      params[0],
    );

    if (result != null)
      return leo2js.boolean(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`freeze_list returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async freeze_list_index(key: number, defaultValue ? : LeoAddress): Promise < LeoAddress > {
    const keyLeo = js2leo.u32(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'freeze_list_index',
      params[0],
    );

    if (result != null)
      return leo2js.address(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`freeze_list_index returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async freeze_list_last_index(key: boolean, defaultValue ? : number): Promise < number > {
    const keyLeo = js2leo.boolean(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'freeze_list_last_index',
      params[0],
    );

    if (result != null)
      return leo2js.u32(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`freeze_list_last_index returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async freeze_list_root(key: number, defaultValue ? : bigint): Promise < bigint > {
    const keyLeo = js2leo.u8(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'freeze_list_root',
      params[0],
    );

    if (result != null)
      return leo2js.field(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`freeze_list_root returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async root_updated_height(key: boolean, defaultValue ? : number): Promise < number > {
    const keyLeo = js2leo.boolean(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'root_updated_height',
      params[0],
    );

    if (result != null)
      return leo2js.u32(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`root_updated_height returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async block_height_window(key: boolean, defaultValue ? : number): Promise < number > {
    const keyLeo = js2leo.boolean(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'block_height_window',
      params[0],
    );

    if (result != null)
      return leo2js.u32(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`block_height_window returned invalid value[input: ${key}, output: ${result}`);
    }
  }


}