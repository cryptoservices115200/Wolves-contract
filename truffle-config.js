const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const projectID = 'a92faac6e14345c0863377643370c015';

module.exports =
{
  networks: {
    development: {
		host: "127.0.0.1",     // Localhost (default: none)
		port: 8545,            // Standard Ethereum port (default: none)
		network_id: "*",       // Any network (default: none)
    },
	ropsten: {
		provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${projectID}`),
		network_id: 3,
		gas: 8500000,
		confirmations: 2,    // # of confs to wait between deployments. (default: 0)
		timeoutBlocks: 2000,  // # of blocks before a deployment times out  (minimum/default: 50)
		skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
	},
	rinkeby: {
		provider: () => new HDWalletProvider(mnemonic, `wss://rinkeby.infura.io/ws/v3/${projectID}`),
		network_id: 4,
		networkCheckTimeout: 1000000,
		confirmations: 2,
		timeoutBlocks: 4000,
		skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.6",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  plugins: [
	'truffle-plugin-verify'
  ],

  api_keys: {
	  etherscan: 'DN9XS3J969K5IMYECGF2VHUUIERHYW78F6'
  }
};
