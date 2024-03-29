import { ethers } from "ethers";
import Abi from "./abi.json";

export const getBaseContract = (providerOrSigner) =>
    new ethers.Contract(
        process.env.NEXT_PUBLIC_BASE_ADDRESS,
        Abi,
        providerOrSigner
    );

    export const getOptimismContract = (providerOrSigner) =>
    new ethers.Contract(
        process.env.NEXT_PUBLIC_OPTIMISM_ADDRESS,
        Abi,
        providerOrSigner
    );