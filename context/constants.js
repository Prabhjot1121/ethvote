import voting from "./Create.json";

// HARDHAT LOCALHOST
// export const VotingAddress = "0x3136D6e327018d4124C222E15f4aD7fA8621f16E";

// sepolia TEST
export const VotingAddress = "0x3136D6e327018d4124C222E15f4aD7fA8621f16E";
export const VotingAddressABI = voting.abi;

// CONTRACT OWNER
// HARDHAT
// export const CONTRACT_OWNER = "0x3136D6e327018d4124C222E15f4aD7fA8621f16E";

// REAL ADDRESS
export const CONTRACT_OWNER = "0x3136D6e327018d4124C222E15f4aD7fA8621f16E";

// NETWORK
const networks = {
  sepolia: {
    chainId: `0x${Number(11155111).toString(16)}`,
    chainName: "Sepolia",
    nativeCurrency: {
      name: "Sepolia ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.sepolia.org"],
    blockExplorerUrls: ["https://sepolia.etherscan.io"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "GO",
      symbol: "GO",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const handleNetworkSwitch = async () => {
  const networkName = "Sepolia";
  await changeNetwork({ networkName });
};
// END OF NETWORK-------
