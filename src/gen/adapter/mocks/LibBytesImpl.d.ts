import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface LibBytesImplInterface extends utils.Interface {
    functions: {
        "readAddress(bytes,uint256)": FunctionFragment;
        "readBytes(bytes,uint256,uint256)": FunctionFragment;
        "readBytes32(bytes,uint256)": FunctionFragment;
        "readBytes66(bytes,uint256)": FunctionFragment;
        "readFirstUint16(bytes)": FunctionFragment;
        "readUint16(bytes,uint256)": FunctionFragment;
        "readUint8Uint8(bytes,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "readAddress" | "readBytes" | "readBytes32" | "readBytes66" | "readFirstUint16" | "readUint16" | "readUint8Uint8"): FunctionFragment;
    encodeFunctionData(functionFragment: "readAddress", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "readBytes", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "readBytes32", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "readBytes66", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "readFirstUint16", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "readUint16", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "readUint8Uint8", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "readAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readBytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readBytes32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readBytes66", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readFirstUint16", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readUint16", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readUint8Uint8", data: BytesLike): Result;
    events: {};
}
export interface LibBytesImpl extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LibBytesImplInterface;
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
        readAddress(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        readBytes(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        readBytes32(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        readBytes66(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        readFirstUint16(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[number, BigNumber]>;
        readUint16(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number, BigNumber]>;
        readUint8Uint8(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number, number, BigNumber]>;
    };
    readAddress(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
    readBytes(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
    readBytes32(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    readBytes66(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
    readFirstUint16(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[number, BigNumber]>;
    readUint16(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number, BigNumber]>;
    readUint8Uint8(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number, number, BigNumber]>;
    callStatic: {
        readAddress(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        readBytes(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        readBytes32(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        readBytes66(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber]>;
        readFirstUint16(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[number, BigNumber]>;
        readUint16(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number, BigNumber]>;
        readUint8Uint8(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number, number, BigNumber]>;
    };
    filters: {};
    estimateGas: {
        readAddress(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        readBytes(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        readBytes32(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        readBytes66(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        readFirstUint16(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        readUint16(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        readUint8Uint8(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        readAddress(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readBytes(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readBytes32(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readBytes66(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readFirstUint16(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readUint16(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readUint8Uint8(_data: PromiseOrValue<BytesLike>, _index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
