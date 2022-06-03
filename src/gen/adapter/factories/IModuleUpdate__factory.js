"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.IModuleUpdate__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_implementation",
                type: "address"
            },
        ],
        name: "updateImplementation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var IModuleUpdate__factory = /** @class */ (function () {
    function IModuleUpdate__factory() {
    }
    IModuleUpdate__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IModuleUpdate__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IModuleUpdate__factory.abi = _abi;
    return IModuleUpdate__factory;
}());
exports.IModuleUpdate__factory = IModuleUpdate__factory;
