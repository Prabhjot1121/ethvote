require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_SEPOLIA_RPC = "https://rpc.sepolia.org";
const NEXT_PUBLIC_PRIVATE_KEY = "00d43204124231bc9e5012b2a271fc2cf4a7afa352b343f36530f24e864f729e";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: NEXT_PUBLIC_SEPOLIA_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
