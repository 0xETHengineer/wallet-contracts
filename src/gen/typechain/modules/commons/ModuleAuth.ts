/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ModuleAuthInterface extends utils.Interface {
  functions: {
    "isValidSignature(bytes32,bytes)": FunctionFragment;
    "isValidSignature(bytes,bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "isValidSignature(bytes32,bytes)"
      | "isValidSignature(bytes,bytes)"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isValidSignature(bytes32,bytes)",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidSignature(bytes,bytes)",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "isValidSignature(bytes32,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidSignature(bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ModuleAuth extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ModuleAuthInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    "isValidSignature(bytes32,bytes)"(
      _hash: PromiseOrValue<BytesLike>,
      _signatures: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "isValidSignature(bytes,bytes)"(
      _data: PromiseOrValue<BytesLike>,
      _signatures: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    supportsInterface(
      _interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  "isValidSignature(bytes32,bytes)"(
    _hash: PromiseOrValue<BytesLike>,
    _signatures: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "isValidSignature(bytes,bytes)"(
    _data: PromiseOrValue<BytesLike>,
    _signatures: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  supportsInterface(
    _interfaceID: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    "isValidSignature(bytes32,bytes)"(
      _hash: PromiseOrValue<BytesLike>,
      _signatures: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "isValidSignature(bytes,bytes)"(
      _data: PromiseOrValue<BytesLike>,
      _signatures: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    supportsInterface(
      _interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    "isValidSignature(bytes32,bytes)"(
      _hash: PromiseOrValue<BytesLike>,
      _signatures: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidSignature(bytes,bytes)"(
      _data: PromiseOrValue<BytesLike>,
      _signatures: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      _interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "isValidSignature(bytes32,bytes)"(
      _hash: PromiseOrValue<BytesLike>,
      _signatures: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidSignature(bytes,bytes)"(
      _data: PromiseOrValue<BytesLike>,
      _signatures: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
