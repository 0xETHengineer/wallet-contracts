Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleHooks__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        stateMutability: "payable",
        type: "fallback",
    },
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
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC721Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
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
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_interfaceID",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610b49806100206000396000f3fe6080604052600436106100745760003560e01c80634fcf3eca1161004e5780634fcf3eca1461030a578063b93ea7ad14610358578063bc197c81146103c0578063f23a6e61146105075761007b565b806301ffc9a714610156578063150b7a02146101b65780631a9b2337146102955761007b565b3661007b57005b60006100aa6000357fffffffff00000000000000000000000000000000000000000000000000000000166105b6565b905073ffffffffffffffffffffffffffffffffffffffff811615610153576000808273ffffffffffffffffffffffffffffffffffffffff166000366040518083838082843760405192019450600093509091505080830381855af49150503d8060008114610134576040519150601f19603f3d011682016040523d82523d6000602084013e610139565b606091505b50915091508161014b57805160208201fd5b805160208201f35b50005b34801561016257600080fd5b506101a26004803603602081101561017957600080fd5b50357fffffffff000000000000000000000000000000000000000000000000000000001661060c565b604080519115158252519081900360200190f35b3480156101c257600080fd5b50610260600480360360808110156101d957600080fd5b73ffffffffffffffffffffffffffffffffffffffff82358116926020810135909116916040820135919081019060808101606082013564010000000081111561022157600080fd5b82018360208201111561023357600080fd5b8035906020019184600183028401116401000000008311171561025557600080fd5b50909250905061074d565b604080517fffffffff000000000000000000000000000000000000000000000000000000009092168252519081900360200190f35b3480156102a157600080fd5b506102e1600480360360208110156102b857600080fd5b50357fffffffff0000000000000000000000000000000000000000000000000000000016610777565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561031657600080fd5b506103566004803603602081101561032d57600080fd5b50357fffffffff0000000000000000000000000000000000000000000000000000000016610782565b005b34801561036457600080fd5b506103566004803603604081101561037b57600080fd5b5080357fffffffff0000000000000000000000000000000000000000000000000000000016906020013573ffffffffffffffffffffffffffffffffffffffff16610860565b3480156103cc57600080fd5b50610260600480360360a08110156103e357600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169181019060608101604082013564010000000081111561042457600080fd5b82018360208201111561043657600080fd5b8035906020019184602083028401116401000000008311171561045857600080fd5b91939092909160208101903564010000000081111561047657600080fd5b82018360208201111561048857600080fd5b803590602001918460208302840111640100000000831117156104aa57600080fd5b9193909290916020810190356401000000008111156104c857600080fd5b8201836020820111156104da57600080fd5b803590602001918460018302840111640100000000831117156104fc57600080fd5b50909250905061093d565b34801561051357600080fd5b50610260600480360360a081101561052a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a08101608082013564010000000081111561057757600080fd5b82018360208201111561058957600080fd5b803590602001918460018302840111640100000000831117156105ab57600080fd5b50909250905061096a565b60006106047fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1207fffffffff000000000000000000000000000000000000000000000000000000008416610995565b90505b919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fec6aba5000000000000000000000000000000000000000000000000000000000148061069f57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b806106eb57507fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a0200000000000000000000000000000000000000000000000000000000145b8061073757507fffffffff0000000000000000000000000000000000000000000000000000000082167fc0ee0b8a00000000000000000000000000000000000000000000000000000000145b1561074457506001610607565b610604826109c2565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6000610604826105b6565b3330146107da576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180610aed6027913960400191505060405180910390fd5b60006107e5826105b6565b73ffffffffffffffffffffffffffffffffffffffff161415610852576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180610a96602b913960400191505060405180910390fd5b61085d816000610a0c565b50565b3330146108b8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180610aed6027913960400191505060405180910390fd5b60006108c3836105b6565b73ffffffffffffffffffffffffffffffffffffffff161461092f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610ac1602c913960400191505060405180910390fd5b6109398282610a0c565b5050565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60408051602080820194909452808201929092528051808303820181526060909201905280519101205490565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b604080517fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1206020808301919091527fffffffff000000000000000000000000000000000000000000000000000000008516828401528251808303840181526060909201909252805191012073ffffffffffffffffffffffffffffffffffffffff8216905561093956fe4d6f64756c65486f6f6b732372656d6f7665486f6f6b3a20484f4f4b5f4e4f545f524547495354455245444d6f64756c65486f6f6b7323616464486f6f6b3a20484f4f4b5f414c52454144595f524547495354455245444d6f64756c6553656c6641757468236f6e6c7953656c663a204e4f545f415554484f52495a4544a264697066735822122086bf9f736a7b5726e14265de4b8812802a5c948dfe727864a9329f4b3c25abc564736f6c63430007060033";
const isSuperArgs = (xs) => xs.length > 1;
class ModuleHooks__factory extends ethers_1.ContractFactory {
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
exports.ModuleHooks__factory = ModuleHooks__factory;
ModuleHooks__factory.bytecode = _bytecode;
ModuleHooks__factory.abi = _abi;
