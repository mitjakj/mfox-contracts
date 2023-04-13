require("@nomiclabs/hardhat-waffle");
require('hardhat-abi-exporter');
require('hardhat-contract-sizer');
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');

require('./tasks/address-generator');
let secret = require("./secret.json");
const constants = require("../constants.js");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  etherscan: {
    apiKey: {
       opera: secret.ftmScanAPI,
       avalanche: secret.snowtraceAPI,
       bsc: secret.bscScanAPI,
     }
  },
    // solidity: "0.6.12",
    // solidity: "0.8.9",
    solidity: {
        compilers: [
          {
            version: "0.8.13",
            settings: {
              optimizer: {
                enabled: true,
                runs: 200,
              },
              outputSelection: {
                "*": {
                  "*": [
                    "evm.bytecode",
                    "evm.deployedBytecode",
                    "devdoc",
                    "userdoc",
                    "metadata",
                    "abi"
                  ]
                }
              }
              //viaIR : true,
            },
          },
          {
            version: "0.8.11",
            settings: {
              optimizer: {
                enabled: true,
                runs: 200,
              },
              outputSelection: {
                "*": {
                  "*": [
                    "evm.bytecode",
                    "evm.deployedBytecode",
                    "devdoc",
                    "userdoc",
                    "metadata",
                    "abi"
                  ]
                }
              }
              //viaIR : true,
            },
          }
        ]
      },
    networks: {
        bsc: {
          url: "https://bsc-dataseed.binance.org/",
          chainId: 56,
          gasPrice: 5000000000,
          gas: 15000000,
          accounts: [secret.privateKeyMainnet, secret.tester],
          explorer: 'https://bscscan.com/',
          constants: constants.BSC
        },
        ftmmainnet: {
            // url: "https://rpcapi.fantom.network/",
            // url: "https://rpc.ftm.tools/",
            url: "https://rpc.ankr.com/fantom",
            chainId: 250,
            gasPrice: 100000000000, // 20 gwei
            gas: 1000000000,
            accounts: [secret.privateKeyMainnet],
            explorer: 'https://ftmscan.com/',
        },
        avalanche: {
          url: "https://api.avax.network/ext/bc/C/rpc",
          chainId: 43114,
          gasPrice: 30000000000, // 30 gwei
          gas: 5000000,
          accounts: [secret.privateKeyMainnet],
          explorer: 'https://snowtrace.io/',
      }
    },
    abiExporter: {
        path: './data/abi',
        clear: true,
        flat: true,
        only: [
            'NATIVEToken', 'TEST', 'NativeFarm', 'TimelockController', 'StrategyV3'
        ],
    },
    // projectAddresses: {

    // },
    database: {
        user: 'postgres',
        host: 'localhost',
        database: 'hegel',
        password: 'root',
        port: 5432,
    }
};