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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ModuleIgnoreNonceCallsInterface extends ethers.utils.Interface {
  functions: {
    "execute((bool,bool,uint256,address,uint256,bytes)[],uint256,bytes)": FunctionFragment;
    "nonce()": FunctionFragment;
    "readGapNonce(uint256)": FunctionFragment;
    "readNonce(uint256)": FunctionFragment;
    "selfExecute((bool,bool,uint256,address,uint256,bytes)[])": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "execute",
    values: [
      {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "readGapNonce",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "readNonce",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "selfExecute",
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
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "readGapNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "readNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "selfExecute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "GapNonceChange(uint256,uint256,uint256)": EventFragment;
    "NoNonceUsed()": EventFragment;
    "NonceChange(uint256,uint256)": EventFragment;
    "TxExecuted(bytes32)": EventFragment;
    "TxFailed(bytes32,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GapNonceChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NoNonceUsed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NonceChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TxExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TxFailed"): EventFragment;
}

export type GapNonceChangeEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber] & {
    _space: BigNumber;
    _oldNonce: BigNumber;
    _newNonce: BigNumber;
  }
>;

export type NoNonceUsedEvent = TypedEvent<[] & {}>;

export type NonceChangeEvent = TypedEvent<
  [BigNumber, BigNumber] & { _space: BigNumber; _newNonce: BigNumber }
>;

export type TxExecutedEvent = TypedEvent<[string] & { _tx: string }>;

export type TxFailedEvent = TypedEvent<
  [string, string] & { _tx: string; _reason: string }
>;

export class ModuleIgnoreNonceCalls extends BaseContract {
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

  interface: ModuleIgnoreNonceCallsInterface;

  functions: {
    execute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    readGapNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    readNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    selfExecute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  execute(
    _txs: {
      delegateCall: boolean;
      revertOnError: boolean;
      gasLimit: BigNumberish;
      target: string;
      value: BigNumberish;
      data: BytesLike;
    }[],
    _nonce: BigNumberish,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  readGapNonce(
    _space: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  readNonce(
    _space: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  selfExecute(
    _txs: {
      delegateCall: boolean;
      revertOnError: boolean;
      gasLimit: BigNumberish;
      target: string;
      value: BigNumberish;
      data: BytesLike;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    _interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    execute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    readGapNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    selfExecute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "GapNonceChange(uint256,uint256,uint256)"(
      _space?: null,
      _oldNonce?: null,
      _newNonce?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { _space: BigNumber; _oldNonce: BigNumber; _newNonce: BigNumber }
    >;

    GapNonceChange(
      _space?: null,
      _oldNonce?: null,
      _newNonce?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { _space: BigNumber; _oldNonce: BigNumber; _newNonce: BigNumber }
    >;

    "NoNonceUsed()"(): TypedEventFilter<[], {}>;

    NoNonceUsed(): TypedEventFilter<[], {}>;

    "NonceChange(uint256,uint256)"(
      _space?: null,
      _newNonce?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { _space: BigNumber; _newNonce: BigNumber }
    >;

    NonceChange(
      _space?: null,
      _newNonce?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { _space: BigNumber; _newNonce: BigNumber }
    >;

    "TxExecuted(bytes32)"(
      _tx?: null
    ): TypedEventFilter<[string], { _tx: string }>;

    TxExecuted(_tx?: null): TypedEventFilter<[string], { _tx: string }>;

    "TxFailed(bytes32,bytes)"(
      _tx?: null,
      _reason?: null
    ): TypedEventFilter<[string, string], { _tx: string; _reason: string }>;

    TxFailed(
      _tx?: null,
      _reason?: null
    ): TypedEventFilter<[string, string], { _tx: string; _reason: string }>;
  };

  estimateGas: {
    execute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    readGapNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    selfExecute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    readGapNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readNonce(
      _space: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    selfExecute(
      _txs: {
        delegateCall: boolean;
        revertOnError: boolean;
        gasLimit: BigNumberish;
        target: string;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
