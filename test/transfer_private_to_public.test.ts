import { ExecutionMode, leo2js } from "@doko-js/core";
import { freezelist_usdcx, merkle_usdcx, multisig_usdcx, TIMEOUT, usdcx_stable } from "./imports";
import { decryptToken } from "../artifacts/js/leo2js/test_usdcx_stablecoin";
import ComplianceTest from "./ComplianceService";

//Command: npm run test --runInBand -- test/transfer_private_to_public.test.ts


//accessing private keys from env
const privateKey_1 = process.env.ALEO_DEVNET_PRIVATE_KEY1
const privateKey_2 = process.env.ALEO_DEVNET_PRIVATE_KEY2

// const deposit_amount = BigInt(50000 * 10 ** 6);
const [aleoUser1, aleoUser2] = usdcx_stable.getAccounts();

let minted_record ;

//this test runs the test cases for user1 to deposit all 10 tokens 

describe("Transfer private to public ", () => {
   
        const minted_record_amount = BigInt(1000 * 10 ** 6);
        const deposit_amount = BigInt(10 * 10 ** 6);
      
      
        test(`Mint token of index  for user`, async () => {
            usdcx_stable.connect(aleoUser2);
            const tx = await usdcx_stable.mint_private(aleoUser1, minted_record_amount)
            const [minted_records] = await tx.wait();
            minted_record = minted_records;
            
        }, TIMEOUT)

        test(`private to public transfer token of index `,
            async () => {
                usdcx_stable.connect(aleoUser1)
                
                const mintedRecordStruct = decryptToken(minted_record, privateKey_1)
                console.log("token usser1: ", mintedRecordStruct);


                const compliance = new ComplianceTest();
                const proof1 = await compliance.getComplianceProof(
                    "test_usdcx_freezelist.aleo",
                    aleoUser1,
                    "testnet"
                )
                const merkleProofs = proof1 as any;

                console.log("proofs", merkleProofs)
                const tx = await usdcx_stable.transfer_private_to_public(aleoUser2, deposit_amount, mintedRecordStruct, merkleProofs)
                await tx.wait();
                
            },
            TIMEOUT
        );

    })