require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy raise pitch hour grace cricket blue ghost'; 
let testAccounts = [
"0xad7cc6fdeca63e2a56b3f8573896581cf51c6274f75b3128ceadae642219b7ce",
"0xc7a2356ce22ee9e179fe2fcd724bf897d50cb1b1781820b1b3106711ee6447aa",
"0x8f479cc380729a4078aae4549026937f8d36957e23c48777e81e2ca02291c234",
"0x1080ebfc331ea308b19a45e0925acdda99d2f634cbb780620ec26819e91cefa8",
"0xe8470e5d25d06b1832fd6b385ae4cd07a41cb19555211c725f429adfc66e9120",
"0x4b2a2e9a8ddfddfbb634f6196d3ea41d9b241c1de74471589d0d69839fdf17a3",
"0xc5cfae339499de84153c4d48d3122a9139010b349426eaa768cba066dd181b36",
"0x1084844fa9920ae70f8c3222f17372278a6398e5609ccfa9a507759c797f62a1",
"0x6ad76f2853af34a7a1a6d293fcc4b30a566e5d3549c1b03e459bc046020746c2",
"0xb8f32c3d55f86b7041fe92067628b30432ed6f88ccc2972b96850d5304df058b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


