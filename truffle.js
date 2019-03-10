const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "set your mnemonic key phrases";
const infura_url = "https://ropsten.infura.io/set your api token";
module.exports = {
  networks: {
    ropsten: {
      provider: function () {
        return new HDWalletProvider(mnemonic, infura_url)
      },
    network_id: 3,
    gas: 4700000 //Gasは、Gas limit最大値の4700000に設定しておきましょう。
    }
  }
};
