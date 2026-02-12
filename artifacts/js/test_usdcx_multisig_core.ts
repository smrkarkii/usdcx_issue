import {
  AdminOp,
  ProgramSettings,
  WalletSettings,
  WalletSigningOp
} from "./types/test_usdcx_multisig_core";
import {
  getAdminOpLeo,
  getProgramSettingsLeo,
  getWalletSettingsLeo,
  getWalletSigningOpLeo
} from "./js2leo/test_usdcx_multisig_core";
import {
  getAdminOp,
  getProgramSettings,
  getWalletSettings,
  getWalletSigningOp
} from "./leo2js/test_usdcx_multisig_core";
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
import * as receipt from "./transitions/test_usdcx_multisig_core";

export class Test_usdcx_multisig_coreContract extends BaseContract {

  constructor(config: Partial < ContractConfig > = {
    mode: ExecutionMode.LeoRun
  }) {
    super({
      ...config,
      appName: 'test_usdcx_multisig_core',
      fee: '0.01',
      contractPath: 'artifacts/leo/test_usdcx_multisig_core',
      isImportedAleo: false
    });
  }
  async init(r0: LeoAddress, r1: boolean): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_multisig_coreInitTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.boolean(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('init', params);
    return result
  }

  async disallow_upgrades(): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_multisig_coreDisallow_upgradesTransition, [] >> {

    const params = []
    const result = await this.ctx.execute('disallow_upgrades', params);
    return result
  }

  async set_upgrader_address(r0: LeoAddress): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_multisig_coreSet_upgrader_addressTransition, [] >> {
    const r0Leo = js2leo.address(r0);

    const params = [r0Leo]
    const result = await this.ctx.execute('set_upgrader_address', params);
    return result
  }

  async create_wallet(r0: LeoAddress, r1: number, r2: Array < LeoAddress > , r3: Array < Array < number >> ): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_multisig_coreCreate_walletTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u8(r1);
    const r2Leo = js2leo.arr2string(js2leo.array(r2, js2leo.address));
    const r3Leo = js2leo.arr2string(r3.map(element1 => js2leo.array(element1, js2leo.u8)));

    const params = [r0Leo, r1Leo, r2Leo, r3Leo]
    const result = await this.ctx.execute('create_wallet', params);
    return result
  }

  async initiate_signing_op(r0: LeoAddress, r1: bigint, r2: number): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_multisig_coreInitiate_signing_opTransition, [bigint] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.field(r1);
    const r2Leo = js2leo.u32(r2);

    const params = [r0Leo, r1Leo, r2Leo]
    const result = await this.ctx.execute('initiate_signing_op', params);
    result.set_converter_fn([leo2js.field]);
    return result
  }

  async sign(r0: LeoAddress, r1: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_multisig_coreSignTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.field(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('sign', params);
    return result
  }

  async sign_for_round(r0: LeoAddress, r1: bigint, r2: number): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_multisig_coreSign_for_roundTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.field(r1);
    const r2Leo = js2leo.u32(r2);

    const params = [r0Leo, r1Leo, r2Leo]
    const result = await this.ctx.execute('sign_for_round', params);
    return result
  }

  async sign_ecdsa(r0: LeoAddress, r1: bigint, r2: Array < number > , r3: Array < number > , r4: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_multisig_coreSign_ecdsaTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.field(r1);
    const r2Leo = js2leo.arr2string(js2leo.array(r2, js2leo.u8));
    const r3Leo = js2leo.arr2string(js2leo.array(r3, js2leo.u8));
    const r4Leo = js2leo.u64(r4);

    const params = [r0Leo, r1Leo, r2Leo, r3Leo, r4Leo]
    const result = await this.ctx.execute('sign_ecdsa', params);
    return result
  }

  async sign_ecdsa_for_round(r0: LeoAddress, r1: bigint, r2: Array < number > , r3: Array < number > , r4: bigint, r5: number): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_multisig_coreSign_ecdsa_for_roundTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.field(r1);
    const r2Leo = js2leo.arr2string(js2leo.array(r2, js2leo.u8));
    const r3Leo = js2leo.arr2string(js2leo.array(r3, js2leo.u8));
    const r4Leo = js2leo.u64(r4);
    const r5Leo = js2leo.u32(r5);

    const params = [r0Leo, r1Leo, r2Leo, r3Leo, r4Leo, r5Leo]
    const result = await this.ctx.execute('sign_ecdsa_for_round', params);
    return result
  }

  async init_admin_op(r0: LeoAddress, r1: bigint, r2: number, r3: AdminOp): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_multisig_coreInit_admin_opTransition, [bigint] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.field(r1);
    const r2Leo = js2leo.u32(r2);
    const r3Leo = js2leo.json(getAdminOpLeo(r3));

    const params = [r0Leo, r1Leo, r2Leo, r3Leo]
    const result = await this.ctx.execute('init_admin_op', params);
    result.set_converter_fn([leo2js.field]);
    return result
  }

  async exec_admin_op(r0: LeoAddress, r1: bigint, r2: AdminOp): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_multisig_coreExec_admin_opTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.field(r1);
    const r2Leo = js2leo.json(getAdminOpLeo(r2));

    const params = [r0Leo, r1Leo, r2Leo]
    const result = await this.ctx.execute('exec_admin_op', params);
    return result
  }

  async get_signing_op_id_hash(r0: LeoAddress, r1: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_multisig_coreGet_signing_op_id_hashTransition, [bigint] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.field(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('get_signing_op_id_hash', params);
    result.set_converter_fn([leo2js.field]);
    return result
  }

  async guarded_create_wallet_op_hash(r0: LeoAddress, r1: number, r2: Array < LeoAddress > , r3: Array < Array < number >> ): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_multisig_coreGuarded_create_wallet_op_hashTransition, [bigint] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.u8(r1);
    const r2Leo = js2leo.arr2string(js2leo.array(r2, js2leo.address));
    const r3Leo = js2leo.arr2string(r3.map(element1 => js2leo.array(element1, js2leo.u8)));

    const params = [r0Leo, r1Leo, r2Leo, r3Leo]
    const result = await this.ctx.execute('guarded_create_wallet_op_hash', params);
    result.set_converter_fn([leo2js.field]);
    return result
  }

  async assert_signing_completed(r0: LeoAddress, r1: bigint): Promise < TransactionResponse < Transaction & receipt.Test_usdcx_multisig_coreAssert_signing_completedTransition, [] >> {
    const r0Leo = js2leo.address(r0);
    const r1Leo = js2leo.field(r1);

    const params = [r0Leo, r1Leo]
    const result = await this.ctx.execute('assert_signing_completed', params);
    return result
  }

  async program_settings_map(key: boolean, defaultValue ? : ProgramSettings): Promise < ProgramSettings > {
    const keyLeo = js2leo.boolean(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'program_settings_map',
      params[0],
    );

    if (result != null)
      return getProgramSettings(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`program_settings_map returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async signers_map(key: bigint, defaultValue ? : boolean): Promise < boolean > {
    const keyLeo = js2leo.field(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'signers_map',
      params[0],
    );

    if (result != null)
      return leo2js.boolean(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`signers_map returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async wallets_map(key: LeoAddress, defaultValue ? : WalletSettings): Promise < WalletSettings > {
    const keyLeo = js2leo.address(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'wallets_map',
      params[0],
    );

    if (result != null)
      return getWalletSettings(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`wallets_map returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async pending_signing_ops(key: bigint, defaultValue ? : WalletSigningOp): Promise < WalletSigningOp > {
    const keyLeo = js2leo.field(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'pending_signing_ops',
      params[0],
    );

    if (result != null)
      return getWalletSigningOp(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`pending_signing_ops returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async pending_signing_confirmations(key: bigint, defaultValue ? : number): Promise < number > {
    const keyLeo = js2leo.field(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'pending_signing_confirmations',
      params[0],
    );

    if (result != null)
      return leo2js.u32(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`pending_signing_confirmations returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async completed_signing_ops(key: bigint, defaultValue ? : number): Promise < number > {
    const keyLeo = js2leo.field(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'completed_signing_ops',
      params[0],
    );

    if (result != null)
      return leo2js.u32(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`completed_signing_ops returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async used_nonces(key: bigint, defaultValue ? : boolean): Promise < boolean > {
    const keyLeo = js2leo.field(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'used_nonces',
      params[0],
    );

    if (result != null)
      return leo2js.boolean(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`used_nonces returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async pending_admin_ops(key: bigint, defaultValue ? : AdminOp): Promise < AdminOp > {
    const keyLeo = js2leo.field(key);

    const params = [keyLeo]
    const result = await zkGetMapping(
      this.config,
      'pending_admin_ops',
      params[0],
    );

    if (result != null)
      return getAdminOp(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`pending_admin_ops returned invalid value[input: ${key}, output: ${result}`);
    }
  }


}