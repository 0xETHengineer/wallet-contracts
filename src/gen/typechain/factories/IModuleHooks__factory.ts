/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IModuleHooks, IModuleHooksInterface } from "../IModuleHooks";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "addHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
    ],
    name: "readHook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
    ],
    name: "removeHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IModuleHooks__factory {
  static readonly abi = _abi;
  static createInterface(): IModuleHooksInterface {
    return new utils.Interface(_abi) as IModuleHooksInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IModuleHooks {
    return new Contract(address, _abi, signerOrProvider) as IModuleHooks;
  }
}
