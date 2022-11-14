Object.defineProperty(exports, "__esModule", { value: true });
exports.HookMock__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_num",
                type: "uint256",
            },
        ],
        name: "onHookMockCall",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x6080604052348015600f57600080fd5b5060958061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063b68fe6cf14602d575b600080fd5b604760048036036020811015604157600080fd5b50356059565b60408051918252519081900360200190f35b6002029056fea264697066735822122029a1e312dcefda1bc536e0d465373c6d97a053313911fb1a8d3e3c7806aeac1764736f6c63430007060033";
const isSuperArgs = (xs) => xs.length > 1;
class HookMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.HookMock__factory = HookMock__factory;
HookMock__factory.bytecode = _bytecode;
HookMock__factory.abi = _abi;
