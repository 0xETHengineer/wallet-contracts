/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SessionUtils, SessionUtilsInterface } from "../SessionUtils";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_oldNonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newNonce",
        type: "uint256",
      },
    ],
    name: "GapNonceChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
    ],
    name: "ResetNonce",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "requireSessionNonce",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610461806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638853baa014610030575b600080fd5b61004361003e3660046103e9565b610045565b005b6100637396f7fef04d2478e2b011c3aca79dc5a83b5d37ef826101ac565b6100807396f7fef04d2478e2b011c3aca79dc5a83b5d37ef6102d8565b6040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527f783649a600000000000000000000000000000000000000000000000000000000600482015230906301ffc9a790602401602060405180830381865afa1580156100f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101189190610402565b6101a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f53657373696f6e5574696c73237265717569726553657373696f6e4e6f6e636560448201527f3a2057414c4c45545f4e4f545f5550475241444544000000000000000000000060648201526084015b60405180910390fd5b50565b60006101b783610359565b9050808211610248576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f4761704e6f6e63655574696c73235f726571756972654761704e6f6e63653a2060448201527f494e56414c49445f4e4f4e43450000000000000000000000000000000000000060648201526084016101a0565b604080517f2a37c7c3c3449f4795b05559a0f92a1730815bf20be16b02bbd6dbb8ae8532fe60208083019190915281830186905282518083038401815260608301808552815191909201208590558590526080810183905260a0810184905290517fd9aa9f0269d7ebe0e495362c56c21163d40a52f13ad524fb0e844ff41811f0529181900360c00190a1505050565b604080517f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e60208083019190915281830184905282518083038401815260608301808552815191909201206000905583905290517f464865b330cd819e8c8704ad98a40b0c5049a03268c9946629fa5dcd6babf09f9181900360800190a150565b60006103857f2a37c7c3c3449f4795b05559a0f92a1730815bf20be16b02bbd6dbb8ae8532fe8361038b565b92915050565b60008083836040516020016103aa929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012054949350505050565b6000602082840312156103fb57600080fd5b5035919050565b60006020828403121561041457600080fd5b8151801515811461042457600080fd5b939250505056fea2646970667358221220c95c02d925429108a7eb41dba9ed5822710a2d89b39e20325ae5e1d18be3d86764736f6c634300080e0033";

export class SessionUtils__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SessionUtils> {
    return super.deploy(overrides || {}) as Promise<SessionUtils>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SessionUtils {
    return super.attach(address) as SessionUtils;
  }
  connect(signer: Signer): SessionUtils__factory {
    return super.connect(signer) as SessionUtils__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SessionUtilsInterface {
    return new utils.Interface(_abi) as SessionUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SessionUtils {
    return new Contract(address, _abi, signerOrProvider) as SessionUtils;
  }
}
