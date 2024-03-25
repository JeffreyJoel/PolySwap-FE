import { BASE_SEPOLIA_ID, OPTIMISM_SEPOLIA_ID } from "../connection";
import { getContract } from "../constants/contracts";
import { getProvider } from "../constants/providers";

export const isSupportedChain = (chainId) =>
    Number(chainId) === OPTIMISM_SEPOLIA_ID || BASE_SEPOLIA_ID;

export const getReadWriteBallotContract = async (provider) => {
    const readWriteProvider = getProvider(provider);

    const signer = await readWriteProvider.getSigner();

    return getContract(signer);
};
