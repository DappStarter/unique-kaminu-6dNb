require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan remember mad pudding hover praise army giggle'; 
let testAccounts = [
"0x67ebe5052210c3e1d481851319c77a960251c9d0b348a98541efd0ad570fc0bf",
"0xde060ab3b311141653bb167b4c22b729b39027148b1332fb6d90ba0db305affe",
"0x7ee0d6f107bcfc8a2fc9bdcc5aabdf3c83b140dde2558ff8818a5afac2aba7ec",
"0x83f4a87d990614625c8c98af64883771fd506e00aee3d170daea447861eb6c5c",
"0x65895603778c0584e6f1c451a451d6d0b2a6a409d8442fcd195cd534568486aa",
"0x25161893b773c0624895f0ad2cae818dbec825929b7e51bd63e5e64714f72e0f",
"0xb37aaca415cf5e106c51473d8f3cd2c3186c3b47a67f7ac9d149f8b26d21ee55",
"0x6fd990e95c2ec6ef8f1eb6b4c8b978d304167d28fa0beae73215914626eef840",
"0x6f172f8e4fcba0cd00d3611444522d0fe0481160a8289396c4d1836799deff68",
"0x0ea67a7606283be920760343c83b9d063687e4e0b05eb680e638587204bd0f4d"
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


