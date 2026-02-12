import { ExecutionMode } from "@doko-js/core";
import { freezelist_usdcx, merkle_usdcx, multisig_usdcx, TIMEOUT, usdcx_stable } from "./imports";

//Command: npm run test --runInBand -- test/2_contract_init.test.ts 


const [aleoUser1, aleoUser2, aleoUser3] = usdcx_stable.getAccounts();
console.log(aleoUser1, aleoUser2, aleoUser3, "aloe users")

describe("USDCX Initialization", () => {


    test("multisig initialize",
        async () => {
            const tx = await multisig_usdcx.init("aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px", false);
            await tx.wait();
        },
        TIMEOUT
    );
    test("freezelist initialize",
        async () => {
            const tx = await freezelist_usdcx.initialize("aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px", 300);
            await tx.wait();
        },
        TIMEOUT
    );
    test("usdcx initialize",
        async () => {
            const tx = await usdcx_stable.initialize(0n, 0n, 6, 18446744073709551615n, "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px")
            await tx.wait();
        },
        TIMEOUT
    );


    test("set mitner role",
        async () => {
            usdcx_stable.connect(aleoUser1)
            const tx = await usdcx_stable.update_role(aleoUser2, 1)
            await tx.wait();
        },
        TIMEOUT
    );


})

