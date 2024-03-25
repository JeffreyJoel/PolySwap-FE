"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const BASE_SEPOLIA_ID = 84532;
export const OPTIMISM_SEPOLIA_ID = 11155420;

const baseSepolia = {
  chainId: BASE_SEPOLIA_ID,
  name: "Base-Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia-explorer.base.org",
  rpcUrl: process.env.NEXT_PUBLIC_BASE_RPC_URL,
};

const optimismSepolia = {
  chainId: OPTIMISM_SEPOLIA_ID,
  name: "Optimism-Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia-optimistic.etherscan.io",
  rpcUrl: process.env.NEXT_PUBLIC_OPT_RPC_URL,
};

const metadata = {
  name: "PolySwap",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// const ethersConfig = defaultConfig({
//     metadata
//   })

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [baseSepolia, optimismSepolia],
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  enableAnalytics: false, // Optional - defaults
});

export function Web3Modal({ children }) {
  return children;
}
