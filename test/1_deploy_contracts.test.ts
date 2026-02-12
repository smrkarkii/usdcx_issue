import { ExecutionMode } from "@doko-js/core";
import { freezelist_usdcx, merkle_usdcx, multisig_usdcx, TIMEOUT, usdcx_stable } from "./imports";

// npm run test --runInBand -- test/1_deploy_contracts.test.ts


describe("Deploying usdcx contracts", () => {
    test("Deploy ",
        async () => {
            const deploy = await multisig_usdcx.deploy();
            await deploy.wait();
            expect(await multisig_usdcx.isDeployed()).toBe(true);
        },
        TIMEOUT
    );
    test("Deploy ",
        async () => {
            const deploy = await merkle_usdcx.deploy();
            await deploy.wait();
            expect(await merkle_usdcx.isDeployed()).toBe(true);
        },
        TIMEOUT
    );
    test("Deploy  ",
        async () => {
            const deploy = await freezelist_usdcx.deploy();
            await deploy.wait();
            expect(await freezelist_usdcx.isDeployed()).toBe(true);
        },
        TIMEOUT
    );
    test("Deploy  ",
        async () => {
            const deploy = await usdcx_stable.deploy();
            await deploy.wait();
            expect(await usdcx_stable.isDeployed()).toBe(true);
        },
        TIMEOUT
    );

})
