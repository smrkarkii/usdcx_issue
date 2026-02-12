import {
  MerkleProof,
  Credentials,
  ComplianceRecord,
  Token,
  TokenInfo
} from "./types/test_usdcx_stablecoin";
import {
  getMerkleProofLeo,
  getCredentialsLeo,
  getComplianceRecordLeo,
  getTokenLeo,
  getTokenInfoLeo
} from "./js2leo/test_usdcx_stablecoin";
import {
  getMerkleProof,
  getCredentials,
  getComplianceRecord,
  getToken,
  getTokenInfo
} from "./leo2js/test_usdcx_stablecoin";
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
import * as receipt from "./transitions/test_usdcx_stablecoin";

export class Test_usdcx_stablecoinContract extends BaseContract {

  constructor(config: Partial < ContractConfig > = {
    mode: ExecutionMode.LeoRun
  }) {
    super({
      ...config,
      appName: 'test_usdcx_stablecoin',
      fee: '0.01',
      contractPath: 'artifacts/leo/test_usdcx_stablecoin',
      isImportedAleo: false
    });
  }
  async get_signing_op_id_for_deploy(r0: Array < number > , r1: number): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinGet_signing_op_id_for_deployTransition, [bigint] >> {
    const r0Leo = js2leo.arr2string(js2leo.array(r0, js2leo.u8));
    const r1Leo = js2leo.u16(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('get_signing_op_id_for_deploy', params);
    result.set_converter_fn([leo2js.field]);
    return result
  }

  async update_role(r0: LeoAddress, r1: number): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinUpdate_roleTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u16(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('update_role', params);
    return result
  }

  async initialize(r0: bigint, r1: bigint, r2: number, r3: bigint, r4: LeoAddress): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinInitializeTransition, [] >> {
    const r0Leo = js2leo.u128(r0);
    const r1Leo = js2leo.u128(r1);
    const r2Leo = js2leo.u8(r2);
    const r3Leo = js2leo.u128(r3);
    const r4Leo = js2leo.address(r4);

    const params = [r0Leo, r1Leo, r2Leo, r3Leo, r4Leo]
    const result = await this.ctx.execute('initialize', params);
    return result
  }

  async get_credentials(r0: Array < MerkleProof > ): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinGet_credentialsTransition, [LeoRecord] >> {
    const r0Leo = js2leo.arr2string(js2leo.array(r0, getMerkleProofLeo));

    const params = [r0Leo]
    const result = await this.ctx.execute('get_credentials', params);
    result.set_converter_fn([leo2js.record]);
    return result
  }

  async mint_public(r0: LeoAddress, r1: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinMint_publicTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u128(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('mint_public', params);
    return result
  }

  async mint_private(r0: LeoAddress, r1: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinMint_privateTransition, [LeoRecord, LeoRecord] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u128(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('mint_private', params);
    result.set_converter_fn([leo2js.record, leo2js.record]);
    return result
  }

  async burn_public(r0: LeoAddress, r1: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinBurn_publicTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u128(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('burn_public', params);
    return result
  }

  async burn_private(r0: Token, r1: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinBurn_privateTransition, [LeoRecord, LeoRecord] >> {
    const r0Leo = js2leo.json(getTokenLeo(r0));
    const r1Leo = js2leo.u128(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('burn_private', params);
    result.set_converter_fn([leo2js.record, leo2js.record]);
    return result
  }

  async transfer_public(r0: LeoAddress, r1: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinTransfer_publicTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u128(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('transfer_public', params);
    return result
  }

  async transfer_public_as_signer(r0: LeoAddress, r1: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinTransfer_public_as_signerTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u128(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('transfer_public_as_signer', params);
    return result
  }

  async approve_public(r0: LeoAddress, r1: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinApprove_publicTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u128(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('approve_public', params);
    return result
  }

  async unapprove_public(r0: LeoAddress, r1: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinUnapprove_publicTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u128(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('unapprove_public', params);
    return result
  }

  async transfer_from_public(r0: LeoAddress, r1: LeoAddress, r2: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinTransfer_from_publicTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.address(r1);
    const r2Leo = js2leo.u128(r2);

    const params = [r0Leo, r1Leo, r2Leo]
    const result = await this.ctx.execute('transfer_from_public', params);
    return result
  }

  async transfer_public_to_private(r0: LeoAddress, r1: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinTransfer_public_to_privateTransition, [LeoRecord, LeoRecord] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u128(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('transfer_public_to_private', params);
    result.set_converter_fn([leo2js.record, leo2js.record]);
    return result
  }

  async transfer_from_public_to_private(r0: LeoAddress, r1: LeoAddress, r2: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinTransfer_from_public_to_privateTransition, [LeoRecord, LeoRecord] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.address(r1);
    const r2Leo = js2leo.u128(r2);

    const params = [r0Leo, r1Leo, r2Leo]
    const result = await this.ctx.execute('transfer_from_public_to_private', params);
    result.set_converter_fn([leo2js.record, leo2js.record]);
    return result
  }

  async transfer_private(r0: LeoAddress, r1: bigint, r2: Token, r3: Array < MerkleProof > ): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinTransfer_privateTransition, [LeoRecord, LeoRecord, LeoRecord] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u128(r1);
    const r2Leo = js2leo.json(getTokenLeo(r2));
    const r3Leo = js2leo.arr2string(js2leo.array(r3, getMerkleProofLeo));

    const params = [r0Leo, r1Leo, r2Leo, r3Leo]
    const result = await this.ctx.execute('transfer_private', params);
    result.set_converter_fn([leo2js.record, leo2js.record, leo2js.record]);
    return result
  }

  async transfer_private_to_public(r0: LeoAddress, r1: bigint, r2: Token, r3: Array < MerkleProof > ): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinTransfer_private_to_publicTransition, [LeoRecord, LeoRecord] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u128(r1);
    const r2Leo = js2leo.json(getTokenLeo(r2));
    const r3Leo = js2leo.arr2string(js2leo.array(r3, getMerkleProofLeo));

    const params = [r0Leo, r1Leo, r2Leo, r3Leo]
    const result = await this.ctx.execute('transfer_private_to_public', params);
    result.set_converter_fn([leo2js.record, leo2js.record]);
    return result
  }

  async set_pause_status(r0: boolean): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinSet_pause_statusTransition, [] >> {
    const r0Leo = js2leo.boolean(r0);

    const params = [r0Leo]
    const result = await this.ctx.execute('set_pause_status', params);
    return result
  }

  async join(r0: Token, r1: Token): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinJoinTransition, [LeoRecord] >> {
    const r0Leo = js2leo.json(getTokenLeo(r0));
    const r1Leo = js2leo.json(getTokenLeo(r1));

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('join', params);
    result.set_converter_fn([leo2js.record]);
    return result
  }

  async split(r0: Token, r1: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinSplitTransition, [LeoRecord, LeoRecord] >> {
    const r0Leo = js2leo.json(getTokenLeo(r0));
    const r1Leo = js2leo.u128(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('split', params);
    result.set_converter_fn([leo2js.record, leo2js.record]);
    return result
  }

  async transfer_private_with_creds(r0: LeoAddress, r1: bigint, r2: Token, r3: Credentials): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_stablecoinTransfer_private_with_credsTransition, [LeoRecord, LeoRecord, LeoRecord, LeoRecord] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u128(r1);
    const r2Leo = js2leo.json(getTokenLeo(r2));
    const r3Leo = js2leo.json(getCredentialsLeo(r3));

    const params = [r0Leo, r1Leo, r2Leo, r3Leo]
    const result = await this.ctx.execute('transfer_private_with_creds', params);
    result.set_converter_fn([leo2js.record, leo2js.record, leo2js.record, leo2js.record]);
    return result
  }

  async token_info(key: boolean, defaultValue ? : TokenInfo): Promise < TokenInfo > {
    const keyLeo = js2leo.boolean(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'token_info',
      params[0],
    );

    if (result != null)
      return getTokenInfo(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`token_info returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async balances(key: LeoAddress, defaultValue ? : bigint): Promise < bigint > {
    const keyLeo = js2leo.address(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'balances',
      params[0],
    );

    if (result != null)
      return leo2js.u128(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`balances returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async allowances(key: bigint, defaultValue ? : bigint): Promise < bigint > {
    const keyLeo = js2leo.field(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'allowances',
      params[0],
    );

    if (result != null)
      return leo2js.u128(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`allowances returned invalid value[input: ${key}, output: ${result}`);
    }
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

  async pause(key: boolean, defaultValue ? : boolean): Promise < boolean > {
    const keyLeo = js2leo.boolean(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'pause',
      params[0],
    );

    if (result != null)
      return leo2js.boolean(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`pause returned invalid value[input: ${key}, output: ${result}`);
    }
  }


}