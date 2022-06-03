/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SequenceUtilsInterface extends ethers.utils.Interface {
  functions: {
    "callBalanceOf(address)": FunctionFragment;
    "callBlockNumber()": FunctionFragment;
    "callBlockhash(uint256)": FunctionFragment;
    "callChainId()": FunctionFragment;
    "callCode(address)": FunctionFragment;
    "callCodeHash(address)": FunctionFragment;
    "callCodeSize(address)": FunctionFragment;
    "callCoinbase()": FunctionFragment;
    "callDifficulty()": FunctionFragment;
    "callGasLeft()": FunctionFragment;
    "callGasLimit()": FunctionFragment;
    "callGasPrice()": FunctionFragment;
    "callOrigin()": FunctionFragment;
    "callTimestamp()": FunctionFragment;
    "knownImageHashes(address)": FunctionFragment;
    "lastImageHashUpdate(bytes32)": FunctionFragment;
    "lastSignerUpdate(address)": FunctionFragment;
    "lastWalletUpdate(address)": FunctionFragment;
    "multiCall((bool,bool,uint256,address,uint256,bytes)[])": FunctionFragment;
    "publishConfig(address,uint256,(uint256,address)[],bool)": FunctionFragment;
    "publishInitialSigners(address,bytes32,uint256,bytes,bool)": FunctionFragment;
    "requireMinNonce(address,uint256)": FunctionFragment;
    "requireNonExpired(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "callBalanceOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "callBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callBlockhash",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "callChainId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "callCode", values: [string]): string;
  encodeFunctionData(
    functionFragment: "callCodeHash",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "callCodeSize",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "callCoinbase",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callDifficulty",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callGasLeft",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callGasLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callGasPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callOrigin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "knownImageHashes",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastImageHashUpdate",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastSignerUpdate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lastWalletUpdate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "multiCall",
    values: [
      {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "publishConfig",
    values: [
      string,
      BigNumberish,
      { weight: BigNumberish; signer: string }[],
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "publishInitialSigners",
    values: [string, BytesLike, BigNumberish, BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "requireMinNonce",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requireNonExpired",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "callBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callBlockhash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "callCode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "callCodeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callCodeSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callCoinbase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callDifficulty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callGasLeft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callGasPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "callOrigin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "callTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "knownImageHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastImageHashUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastSignerUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastWalletUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multiCall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "publishConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publishInitialSigners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireMinNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireNonExpired",
    data: BytesLike
  ): Result;

  events: {
    "RequiredConfig(address,bytes32,uint256,bytes)": EventFragment;
    "RequiredSigner(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RequiredConfig"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequiredSigner"): EventFragment;
}

export type RequiredConfigEvent = TypedEvent<
  [string, string, BigNumber, string] & {
    _wallet: string;
    _imageHash: string;
    _threshold: BigNumber;
    _signers: string;
  }
>;

export type RequiredSignerEvent = TypedEvent<
  [string, string] & { _wallet: string; _signer: string }
>;

export class SequenceUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SequenceUtilsInterface;

  functions: {
    callBalanceOf(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    callBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    callBlockhash(
      _i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    callChainId(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { id: BigNumber }>;

    callCode(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[string] & { code: string }>;

    callCodeHash(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[string] & { codeHash: string }>;

    callCodeSize(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { size: BigNumber }>;

    callCoinbase(overrides?: CallOverrides): Promise<[string]>;

    callDifficulty(overrides?: CallOverrides): Promise<[BigNumber]>;

    callGasLeft(overrides?: CallOverrides): Promise<[BigNumber]>;

    callGasLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    callGasPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    callOrigin(overrides?: CallOverrides): Promise<[string]>;

    callTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    knownImageHashes(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    lastImageHashUpdate(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lastSignerUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lastWalletUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    multiCall(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    publishConfig(
      _wallet: string,
      _threshold: BigNumberish,
      _members: { weight: BigNumberish; signer: string }[],
      _index: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    publishInitialSigners(
      _wallet: string,
      _hash: BytesLike,
      _sizeMembers: BigNumberish,
      _signature: BytesLike,
      _index: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requireMinNonce(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    requireNonExpired(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  callBalanceOf(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  callBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  callBlockhash(_i: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callChainId(overrides?: CallOverrides): Promise<BigNumber>;

  callCode(_addr: string, overrides?: CallOverrides): Promise<string>;

  callCodeHash(_addr: string, overrides?: CallOverrides): Promise<string>;

  callCodeSize(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  callCoinbase(overrides?: CallOverrides): Promise<string>;

  callDifficulty(overrides?: CallOverrides): Promise<BigNumber>;

  callGasLeft(overrides?: CallOverrides): Promise<BigNumber>;

  callGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

  callGasPrice(overrides?: CallOverrides): Promise<BigNumber>;

  callOrigin(overrides?: CallOverrides): Promise<string>;

  callTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  knownImageHashes(arg0: string, overrides?: CallOverrides): Promise<string>;

  lastImageHashUpdate(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lastSignerUpdate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  lastWalletUpdate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  multiCall(
    _txs: {
      delegateCall: boolean;
      revertOnError: boolean;
      gasLimit: BigNumberish;
      target: string;
      value: BigNumberish;
      data: BytesLike;
    }[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  publishConfig(
    _wallet: string,
    _threshold: BigNumberish,
    _members: { weight: BigNumberish; signer: string }[],
    _index: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  publishInitialSigners(
    _wallet: string,
    _hash: BytesLike,
    _sizeMembers: BigNumberish,
    _signature: BytesLike,
    _index: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requireMinNonce(
    _wallet: string,
    _nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  requireNonExpired(
    _expiration: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    callBalanceOf(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    callBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    callBlockhash(_i: BigNumberish, overrides?: CallOverrides): Promise<string>;

    callChainId(overrides?: CallOverrides): Promise<BigNumber>;

    callCode(_addr: string, overrides?: CallOverrides): Promise<string>;

    callCodeHash(_addr: string, overrides?: CallOverrides): Promise<string>;

    callCodeSize(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    callCoinbase(overrides?: CallOverrides): Promise<string>;

    callDifficulty(overrides?: CallOverrides): Promise<BigNumber>;

    callGasLeft(overrides?: CallOverrides): Promise<BigNumber>;

    callGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    callGasPrice(overrides?: CallOverrides): Promise<BigNumber>;

    callOrigin(overrides?: CallOverrides): Promise<string>;

    callTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    knownImageHashes(arg0: string, overrides?: CallOverrides): Promise<string>;

    lastImageHashUpdate(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastSignerUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastWalletUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multiCall(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<
      [boolean[], string[]] & { _successes: boolean[]; _results: string[] }
    >;

    publishConfig(
      _wallet: string,
      _threshold: BigNumberish,
      _members: { weight: BigNumberish; signer: string }[],
      _index: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    publishInitialSigners(
      _wallet: string,
      _hash: BytesLike,
      _sizeMembers: BigNumberish,
      _signature: BytesLike,
      _index: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    requireMinNonce(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    requireNonExpired(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RequiredConfig(address,bytes32,uint256,bytes)"(
      _wallet?: string | null,
      _imageHash?: BytesLike | null,
      _threshold?: null,
      _signers?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      {
        _wallet: string;
        _imageHash: string;
        _threshold: BigNumber;
        _signers: string;
      }
    >;

    RequiredConfig(
      _wallet?: string | null,
      _imageHash?: BytesLike | null,
      _threshold?: null,
      _signers?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      {
        _wallet: string;
        _imageHash: string;
        _threshold: BigNumber;
        _signers: string;
      }
    >;

    "RequiredSigner(address,address)"(
      _wallet?: string | null,
      _signer?: string | null
    ): TypedEventFilter<[string, string], { _wallet: string; _signer: string }>;

    RequiredSigner(
      _wallet?: string | null,
      _signer?: string | null
    ): TypedEventFilter<[string, string], { _wallet: string; _signer: string }>;
  };

  estimateGas: {
    callBalanceOf(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    callBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    callBlockhash(
      _i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    callChainId(overrides?: CallOverrides): Promise<BigNumber>;

    callCode(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    callCodeHash(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    callCodeSize(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    callCoinbase(overrides?: CallOverrides): Promise<BigNumber>;

    callDifficulty(overrides?: CallOverrides): Promise<BigNumber>;

    callGasLeft(overrides?: CallOverrides): Promise<BigNumber>;

    callGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    callGasPrice(overrides?: CallOverrides): Promise<BigNumber>;

    callOrigin(overrides?: CallOverrides): Promise<BigNumber>;

    callTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    knownImageHashes(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastImageHashUpdate(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastSignerUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastWalletUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multiCall(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    publishConfig(
      _wallet: string,
      _threshold: BigNumberish,
      _members: { weight: BigNumberish; signer: string }[],
      _index: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    publishInitialSigners(
      _wallet: string,
      _hash: BytesLike,
      _sizeMembers: BigNumberish,
      _signature: BytesLike,
      _index: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requireMinNonce(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requireNonExpired(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    callBalanceOf(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callBlockhash(
      _i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callCode(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callCodeHash(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callCodeSize(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callCoinbase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callDifficulty(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callGasLeft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callGasPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callOrigin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    knownImageHashes(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastImageHashUpdate(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastSignerUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastWalletUpdate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multiCall(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    publishConfig(
      _wallet: string,
      _threshold: BigNumberish,
      _members: { weight: BigNumberish; signer: string }[],
      _index: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    publishInitialSigners(
      _wallet: string,
      _hash: BytesLike,
      _sizeMembers: BigNumberish,
      _signature: BytesLike,
      _index: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requireMinNonce(
      _wallet: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requireNonExpired(
      _expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
