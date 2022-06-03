/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GuestModule, GuestModuleInterface } from "../GuestModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_provided",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_current",
        type: "uint256",
      },
    ],
    name: "BadGapNonce",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "ExpectedEmptyNonce",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_type",
        type: "uint256",
      },
    ],
    name: "InvalidNonceType",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "CreatedContract",
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
    inputs: [],
    name: "NoNonceUsed",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "_newNonce",
        type: "uint256",
      },
    ],
    name: "NonceChange",
    type: "event",
  },
  {
    anonymous: true,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_tx",
        type: "bytes32",
      },
    ],
    name: "TxExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_tx",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_reason",
        type: "bytes",
      },
    ],
    name: "TxFailed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_code",
        type: "bytes",
      },
    ],
    name: "createContract",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "delegateCall",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "revertOnError",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IModuleCalls.Transaction[]",
        name: "_txs",
        type: "tuple[]",
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
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signatures",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signatures",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
    ],
    name: "readGapNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
    ],
    name: "readNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "delegateCall",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "revertOnError",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IModuleCalls.Transaction[]",
        name: "_txs",
        type: "tuple[]",
      },
    ],
    name: "selfExecute",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612189806100206000396000f3fe6080604052600436106100965760003560e01c80637a9a16281161006957806390042baf1161004e57806390042baf146101b1578063affed0e0146101e9578063cc63f2e2146101fe57600080fd5b80637a9a1628146101635780638c3f55631461018357600080fd5b806301ffc9a71461009b5780631626ba7e146100d057806320c13b0b1461012157806361c2926c14610141575b600080fd5b3480156100a757600080fd5b506100bb6100b63660046119a2565b61021e565b60405190151581526020015b60405180910390f35b3480156100dc57600080fd5b506100f06100eb366004611a01565b61022f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100c7565b34801561012d57600080fd5b506100f061013c366004611a4d565b610320565b34801561014d57600080fd5b5061016161015c366004611d5c565b6103f0565b005b34801561016f57600080fd5b5061016161017e366004611d91565b6104c5565b34801561018f57600080fd5b506101a361019e366004611dfe565b6104ed565b6040519081526020016100c7565b6101c46101bf366004611e17565b610519565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c7565b3480156101f557600080fd5b506101a3610608565b34801561020a57600080fd5b506101a3610219366004611dfe565b610619565b600061022982610645565b92915050565b604080517f19010000000000000000000000000000000000000000000000000000000000006020808301919091524660228301523060601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166042830152605680830187905283518084039091018152607690920190925280519101206000906102f1905b84848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506106a192505050565b1561031957507f1626ba7e000000000000000000000000000000000000000000000000000000005b9392505050565b60006103c06102b58686604051610338929190611e4c565b604080519182900382207f19010000000000000000000000000000000000000000000000000000000000006020808501919091524660228501523060601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166042850152605680850192909252825180850390920182526076909301909152805191012090565b156103e857507f20c13b0b000000000000000000000000000000000000000000000000000000005b949350505050565b60006104b5826040516020016104069190611f7f565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201207f1901000000000000000000000000000000000000000000000000000000000000848301524660228501523060601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166042850152605680850191909152825180850390910181526076909301909152815191012090565b90506104c18183610926565b5050565b60006104db846040516020016104069190611fc6565b90506104e78185610926565b50505050565b60006102297f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e83610b50565b60003330146105af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4d6f64756c6553656c6641757468236f6e6c7953656c663a204e4f545f41555460448201527f484f52495a45440000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b81516020830134f060405173ffffffffffffffffffffffffffffffffffffffff821681529091507fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c9060200160405180910390a1919050565b600061061460006104ed565b905090565b60006102297f2a37c7c3c3449f4795b05559a0f92a1730815bf20be16b02bbd6dbb8ae8532fe83610b50565b60007f6ffbd451000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083160161069857506001919050565b61022982610bae565b60008060006106af84610c0a565b909250905061ffff821660005b855183101561090957600080806106d38987610caf565b975060ff91821694501691507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8301610719576107108987610d6d565b965090506108b9565b8261074c57606061072a8a88610e22565b975090506107388b82610f10565b9150610744838661203c565b9450506108b9565b600283036108315761075e8987610d6d565b96509050600061076e8a886113a7565b975061ffff16905060606107838b8984611455565b985090506107928c8483611582565b61081e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4d6f64756c6541757468235f7369676e617475726556616c69646174696f6e3a60448201527f20494e56414c49445f5349474e4154555245000000000000000000000000000060648201526084016105a6565b610828848761203c565b955050506108b9565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4d6f64756c6541757468235f7369676e617475726556616c69646174696f6e2060448201527f494e56414c49445f464c4147000000000000000000000000000000000000000060648201526084016105a6565b604080516020810187905290810183905273ffffffffffffffffffffffffffffffffffffffff821660608201526080016040516020818303038152906040528051906020012094505050506106bc565b8361ffff16811015801561091b575060015b979650505050505050565b60005b8151811015610b4b57600082828151811061094657610946612054565b60200260200101519050600060608260000151156109e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f47756573744d6f64756c65235f6578656375746547756573743a2064656c656760448201527f61746543616c6c206e6f7420616c6c6f7765640000000000000000000000000060648201526084016105a6565b82604001515a1015610a7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f47756573744d6f64756c65235f6578656375746547756573743a204e4f545f4560448201527f4e4f5547485f474153000000000000000000000000000000000000000000000060648201526084016105a6565b826060015173ffffffffffffffffffffffffffffffffffffffff1683608001518460400151600014610ab0578460400151610ab2565b5a5b908560a00151604051610ac59190612083565b600060405180830381858888f193505050503d8060008114610b03576040519150601f19603f3d011682016040523d82523d6000602084013e610b08565b606091505b5090925090508115610b2a5760405186815260200160405180910390a0610b35565b610b358387836117a3565b5050508080610b439061209f565b915050610929565b505050565b6000808383604051602001610b6f929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012054949350505050565b60007f0b050cdb000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601610c0157506001919050565b610229826117f3565b6020810151815160f09190911c90600290811115610caa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4c696242797465732372656164466972737455696e7431363a204f55545f4f4660448201527f5f424f554e44530000000000000000000000000000000000000000000000000060648201526084016105a6565b915091565b8082016020015160f881901c9060f01c60ff1660028301838111610cd557610cd56120d7565b8451811115610d66576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4c69624279746573237265616455696e743855696e74383a204f55545f4f465f60448201527f424f554e4453000000000000000000000000000000000000000000000000000060648201526084016105a6565b9250925092565b8082016020015160601c60148201828111610d8a57610d8a6120d7565b8351811115610e1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f4c696242797465732372656164416464726573733a204f55545f4f465f424f5560448201527f4e4453000000000000000000000000000000000000000000000000000000000060648201526084016105a6565b9250929050565b604080516042808252608082019092526060916000919060208201818036833701905050915082840160200180516020840152602081015160408401526022810151604284015250604283019050828111610e7f57610e7f6120d7565b8351811115610e1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f4c696242797465732372656164427974657336363a204f55545f4f465f424f5560448201527f4e4453000000000000000000000000000000000000000000000000000000000060648201526084016105a6565b60008151604214610fa3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20696e76616c6964207369676e6174757265206c656e67746800000000000060648201526084016105a6565b60008260018451610fb49190612106565b81518110610fc457610fc4612054565b602001015160f81c60f81b60f81c60ff169050600083604081518110610fec57610fec612054565b016020015160f81c9050600061100285826118bc565b905060006110118660206118bc565b90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08111156110c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20696e76616c6964207369676e6174757265202773272076616c756500000060648201526084016105a6565b8260ff16601b141580156110db57508260ff16601c14155b15611168576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20696e76616c6964207369676e6174757265202776272076616c756500000060648201526084016105a6565b600184036111d55760408051600081526020810180835289905260ff851691810191909152606081018390526080810182905260019060a0015b6020604051602081039080840390855afa1580156111c4573d6000803e3d6000fd5b5050506020604051035194506112fa565b60028403611272576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101889052600190605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff861690820152606081018490526080810183905260a0016111a2565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20554e535550504f525445445f5349474e41545552455f545950450000000060648201526084016105a6565b73ffffffffffffffffffffffffffffffffffffffff851661139d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20494e56414c49445f5349474e45520000000000000000000000000000000060648201526084016105a6565b5050505092915050565b8082016020015160f01c600282018281116113c4576113c46120d7565b8351811115610e1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4c69624279746573237265616455696e7431363a204f55545f4f465f424f554e60448201527f445300000000000000000000000000000000000000000000000000000000000060648201526084016105a6565b606060008267ffffffffffffffff81111561147257611472611ab9565b6040519080825280601f01601f19166020018201604052801561149c576020820181803683370190505b509150838501602001600060205b858110156114c3579082015184820152602081016114aa565b84860160200180519390920151908501525250828201838110156114e9576114e96120d7565b845181111561157a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4c69624279746573237265616442797465733a204f55545f4f465f424f554e4460448201527f530000000000000000000000000000000000000000000000000000000000000060648201526084016105a6565b935093915050565b60008082600184516115949190612106565b815181106115a4576115a4612054565b016020015160f81c905060018114806115bd5750600281145b15611601578373ffffffffffffffffffffffffffffffffffffffff166115e38685610f10565b73ffffffffffffffffffffffffffffffffffffffff1614915061179b565b600381036117135782517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810184526040517f1626ba7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff861690631626ba7e90611684908990889060040161211d565b602060405180830381865afa1580156116a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c59190612136565b9084527fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e0000000000000000000000000000000000000000000000000000000014915061179b565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603f60248201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460448201527f7572653a20554e535550504f525445445f5349474e41545552455f545950450060648201526084016105a6565b509392505050565b8260200151156117b557805160208201fd5b7f3dbd1590ea96dd3253a91f24e64e3a502e1225d602a5731357bc12643070ccd782826040516117e692919061211d565b60405180910390a1505050565b60007fffffffff000000000000000000000000000000000000000000000000000000008216158061186557507fffffffff0000000000000000000000000000000000000000000000000000000082167f36e7817500000000000000000000000000000000000000000000000000000000145b1561187257506001919050565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610229565b60006118c982602061203c565b83511015611959576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f4c696242797465732372656164427974657333323a20475245415445525f4f5260448201527f5f455155414c5f544f5f33325f4c454e4754485f52455155495245440000000060648201526084016105a6565b600061196683602061203c565b909301519392505050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461199f57600080fd5b50565b6000602082840312156119b457600080fd5b813561031981611971565b60008083601f8401126119d157600080fd5b50813567ffffffffffffffff8111156119e957600080fd5b602083019150836020828501011115610e1b57600080fd5b600080600060408486031215611a1657600080fd5b83359250602084013567ffffffffffffffff811115611a3457600080fd5b611a40868287016119bf565b9497909650939450505050565b60008060008060408587031215611a6357600080fd5b843567ffffffffffffffff80821115611a7b57600080fd5b611a87888389016119bf565b90965094506020870135915080821115611aa057600080fd5b50611aad878288016119bf565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715611b0b57611b0b611ab9565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611b5857611b58611ab9565b604052919050565b80358015158114611b7057600080fd5b919050565b600082601f830112611b8657600080fd5b813567ffffffffffffffff811115611ba057611ba0611ab9565b611bd160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611b11565b818152846020838601011115611be657600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f830112611c1457600080fd5b8135602067ffffffffffffffff80831115611c3157611c31611ab9565b8260051b611c40838201611b11565b9384528581018301938381019088861115611c5a57600080fd5b84880192505b85831015611d5057823584811115611c785760008081fd5b880160c0818b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001811315611cae5760008081fd5b611cb6611ae8565b611cc1888401611b60565b81526040611cd0818501611b60565b8983015260608085013582840152608091508185013573ffffffffffffffffffffffffffffffffffffffff81168114611d095760008081fd5b9083015260a08481013582840152928401359288841115611d2c57600091508182fd5b611d3a8e8b86880101611b75565b9083015250845250509184019190840190611c60565b98975050505050505050565b600060208284031215611d6e57600080fd5b813567ffffffffffffffff811115611d8557600080fd5b6103e884828501611c03565b600080600060608486031215611da657600080fd5b833567ffffffffffffffff80821115611dbe57600080fd5b611dca87838801611c03565b9450602086013593506040860135915080821115611de757600080fd5b50611df486828701611b75565b9150509250925092565b600060208284031215611e1057600080fd5b5035919050565b600060208284031215611e2957600080fd5b813567ffffffffffffffff811115611e4057600080fd5b6103e884828501611b75565b8183823760009101908152919050565b60005b83811015611e77578181015183820152602001611e5f565b838111156104e75750506000910152565b60008151808452611ea0816020860160208601611e5c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600081518084526020808501808196508360051b8101915082860160005b85811015611f725782840389528151805115158552858101511515868601526040808201519086015260608082015173ffffffffffffffffffffffffffffffffffffffff16908601526080808201519086015260a09081015160c091860182905290611f5e81870183611e88565b9a87019a9550505090840190600101611ef0565b5091979650505050505050565b60408152600560408201527f73656c663a00000000000000000000000000000000000000000000000000000060608201526080602082015260006103196080830184611ed2565b60408152600660408201527f67756573743a000000000000000000000000000000000000000000000000000060608201526080602082015260006103196080830184611ed2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561204f5761204f61200d565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008251612095818460208701611e5c565b9190910192915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036120d0576120d061200d565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b6000828210156121185761211861200d565b500390565b8281526040602082015260006103e86040830184611e88565b60006020828403121561214857600080fd5b81516103198161197156fea2646970667358221220b68f3d8f923f5e60c6e30799186353c873099a1bac26911321f5817ddcdfb46864736f6c634300080e0033";

export class GuestModule__factory extends ContractFactory {
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
  ): Promise<GuestModule> {
    return super.deploy(overrides || {}) as Promise<GuestModule>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GuestModule {
    return super.attach(address) as GuestModule;
  }
  connect(signer: Signer): GuestModule__factory {
    return super.connect(signer) as GuestModule__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GuestModuleInterface {
    return new utils.Interface(_abi) as GuestModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GuestModule {
    return new Contract(address, _abi, signerOrProvider) as GuestModule;
  }
}
