// The 'test_merkle_tree' test program.
import merkle_tree.aleo;
program test_merkle_tree.aleo {
    @test
    script test_it() {
        let result: u32 = merkle_tree.aleo/main(1u32, 2u32);
        assert_eq(result, 3u32);
    }

    @test
    @should_fail
    transition do_nothing() {
        let result: u32 = merkle_tree.aleo/main(2u32, 3u32);
        assert_eq(result, 3u32);
    }

    @noupgrade
    async constructor() {}
}
