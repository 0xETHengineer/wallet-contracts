import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface IModuleHooksInterface extends utils.Interface {
    functions: {
        "addHook(bytes4,address)": FunctionFragment;
        "readHook(bytes4)": FunctionFragment;
        "removeHook(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addHook" | "readHook" | "removeHook"): FunctionFragment;
    encodeFunctionData(functionFragment: "addHook", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "readHook", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "removeHook", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "addHook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readHook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeHook", data: BytesLike): Result;
    events: {};
}
export interface IModuleHooks extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IModuleHooksInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addHook(_signature: PromiseOrValue<BytesLike>, _implementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        readHook(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        removeHook(_signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addHook(_signature: PromiseOrValue<BytesLike>, _implementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    readHook(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    removeHook(_signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addHook(_signature: PromiseOrValue<BytesLike>, _implementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        readHook(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        removeHook(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        addHook(_signature: PromiseOrValue<BytesLike>, _implementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        readHook(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        removeHook(_signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addHook(_signature: PromiseOrValue<BytesLike>, _implementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        readHook(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeHook(_signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
