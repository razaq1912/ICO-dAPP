export const NFT_CONTRACT_ABI =  [
  {
    inputs: [
      {
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "whitelistContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "_paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_price",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTokenIds",
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
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [],
    name: "presaleEnded",
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
    inputs: [],
    name: "presaleMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleStarted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "val",
        type: "bool",
      },
    ],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startPresale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
    inputs: [],
    name: "tokenIds",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
export const NFT_CONTRACT_ADDRESS = "0xBED330cAFA746286f57251D95B6E5AEe517d6d8e";
export const TOKEN_CONTRACT_ABI = {
  "_format": "hh-sol-artifact-1",
  "contractName": "CryptoDevToken",
  "sourceName": "contracts/CryptoDevToken.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_cryptoDevsContract",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claim",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxTotalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenIdsClaimed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokensPerNFT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b506040516200264838038062002648833981810160405281019062000037919062000327565b6040518060400160405280601081526020017f43727970746f2044657620546f6b656e000000000000000000000000000000008152506040518060400160405280600281526020017f43440000000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb9291906200020d565b508060049080519060200190620000d49291906200020d565b505050620000f7620000eb6200013f60201b60201c565b6200014760201b60201c565b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620003be565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200021b9062000388565b90600052602060002090601f0160209004810192826200023f57600085556200028b565b82601f106200025a57805160ff19168380011785556200028b565b828001600101855582156200028b579182015b828111156200028a5782518255916020019190600101906200026d565b5b5090506200029a91906200029e565b5090565b5b80821115620002b95760008160009055506001016200029f565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002ef82620002c2565b9050919050565b6200030181620002e2565b81146200030d57600080fd5b50565b6000815190506200032181620002f6565b92915050565b60006020828403121562000340576200033f620002bd565b5b6000620003508482850162000310565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003a157607f821691505b60208210811415620003b857620003b762000359565b5b50919050565b61227a80620003ce6000396000f3fe60806040526004361061012e5760003560e01c80635f3690af116100ab57806395d89b411161006f57806395d89b41146103da578063a0712d6814610405578063a457c2d714610421578063a9059cbb1461045e578063dd62ed3e1461049b578063f2fde38b146104d857610135565b80635f3690af146102f357806370a0823114610330578063715018a61461036d5780637ff9b596146103845780638da5cb5b146103af57610135565b8063313ce567116100f2578063313ce56714610232578063395093511461025d5780633ccfd60b1461029a5780634e71d92d146102b15780635afcc2f5146102c857610135565b806306fdde0314610137578063095ea7b31461016257806318160ddd1461019f57806323b872dd146101ca5780632ab4d0521461020757610135565b3661013557005b005b34801561014357600080fd5b5061014c610501565b6040516101599190611591565b60405180910390f35b34801561016e57600080fd5b506101896004803603810190610184919061164c565b610593565b60405161019691906116a7565b60405180910390f35b3480156101ab57600080fd5b506101b46105b6565b6040516101c191906116d1565b60405180910390f35b3480156101d657600080fd5b506101f160048036038101906101ec91906116ec565b6105c0565b6040516101fe91906116a7565b60405180910390f35b34801561021357600080fd5b5061021c6105ef565b60405161022991906116d1565b60405180910390f35b34801561023e57600080fd5b506102476105fd565b604051610254919061175b565b60405180910390f35b34801561026957600080fd5b50610284600480360381019061027f919061164c565b610606565b60405161029191906116a7565b60405180910390f35b3480156102a657600080fd5b506102af61063d565b005b3480156102bd57600080fd5b506102c6610707565b005b3480156102d457600080fd5b506102dd610996565b6040516102ea91906116d1565b60405180910390f35b3480156102ff57600080fd5b5061031a60048036038101906103159190611776565b6109a2565b60405161032791906116a7565b60405180910390f35b34801561033c57600080fd5b50610357600480360381019061035291906117a3565b6109c2565b60405161036491906116d1565b60405180910390f35b34801561037957600080fd5b50610382610a0a565b005b34801561039057600080fd5b50610399610a1e565b6040516103a691906116d1565b60405180910390f35b3480156103bb57600080fd5b506103c4610a29565b6040516103d191906117df565b60405180910390f35b3480156103e657600080fd5b506103ef610a53565b6040516103fc9190611591565b60405180910390f35b61041f600480360381019061041a9190611776565b610ae5565b005b34801561042d57600080fd5b506104486004803603810190610443919061164c565b610bc5565b60405161045591906116a7565b60405180910390f35b34801561046a57600080fd5b506104856004803603810190610480919061164c565b610c3c565b60405161049291906116a7565b60405180910390f35b3480156104a757600080fd5b506104c260048036038101906104bd91906117fa565b610c5f565b6040516104cf91906116d1565b60405180910390f35b3480156104e457600080fd5b506104ff60048036038101906104fa91906117a3565b610ce6565b005b60606003805461051090611869565b80601f016020809104026020016040519081016040528092919081815260200182805461053c90611869565b80156105895780601f1061055e57610100808354040283529160200191610589565b820191906000526020600020905b81548152906001019060200180831161056c57829003601f168201915b5050505050905090565b60008061059e610d6a565b90506105ab818585610d72565b600191505092915050565b6000600254905090565b6000806105cb610d6a565b90506105d8858285610f3d565b6105e3858585610fc9565b60019150509392505050565b69021e19e0c9bab240000081565b60006012905090565b600080610611610d6a565b90506106328185856106238589610c5f565b61062d91906118ca565b610d72565b600191505092915050565b61064561124a565b600061064f610a29565b9050600047905060008273ffffffffffffffffffffffffffffffffffffffff168260405161067c90611951565b60006040518083038185875af1925050503d80600081146106b9576040519150601f19603f3d011682016040523d82523d6000602084013e6106be565b606091505b5050905080610702576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f9906119b2565b60405180910390fd5b505050565b60003390506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b815260040161076991906117df565b60206040518083038186803b15801561078157600080fd5b505afa158015610795573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b991906119e7565b9050600081116107fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f590611a86565b60405180910390fd5b6000805b82811015610930576000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f745c5986846040518363ffffffff1660e01b8152600401610869929190611aa6565b60206040518083038186803b15801561088157600080fd5b505afa158015610895573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b991906119e7565b90506007600082815260200190815260200160002060009054906101000a900460ff1661091c576001836108ed91906118ca565b925060016007600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50808061092890611acf565b915050610802565b5060008111610974576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096b90611b8a565b60405180910390fd5b61099133678ac7230489e800008361098c9190611baa565b6112c8565b505050565b678ac7230489e8000081565b60076020528060005260406000206000915054906101000a900460ff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610a1261124a565b610a1c6000611428565b565b66038d7ea4c6800081565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610a6290611869565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8e90611869565b8015610adb5780601f10610ab057610100808354040283529160200191610adb565b820191906000526020600020905b815481529060010190602001808311610abe57829003601f168201915b5050505050905090565b60008166038d7ea4c68000610afa9190611baa565b905080341015610b3f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3690611c50565b60405180910390fd5b6000670de0b6b3a764000083610b559190611baa565b905069021e19e0c9bab240000081610b6b6105b6565b610b7591906118ca565b1115610bb6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bad90611ce2565b60405180910390fd5b610bc033826112c8565b505050565b600080610bd0610d6a565b90506000610bde8286610c5f565b905083811015610c23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1a90611d74565b60405180910390fd5b610c308286868403610d72565b60019250505092915050565b600080610c47610d6a565b9050610c54818585610fc9565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610cee61124a565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5590611e06565b60405180910390fd5b610d6781611428565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610de2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd990611e98565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4990611f2a565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610f3091906116d1565b60405180910390a3505050565b6000610f498484610c5f565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610fc35781811015610fb5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fac90611f96565b60405180910390fd5b610fc28484848403610d72565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611039576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103090612028565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a0906120ba565b60405180910390fd5b6110b48383836114ee565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561113a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111319061214c565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111cd91906118ca565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161123191906116d1565b60405180910390a36112448484846114f3565b50505050565b611252610d6a565b73ffffffffffffffffffffffffffffffffffffffff16611270610a29565b73ffffffffffffffffffffffffffffffffffffffff16146112c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112bd906121b8565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611338576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132f90612224565b60405180910390fd5b611344600083836114ee565b806002600082825461135691906118ca565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113ab91906118ca565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161141091906116d1565b60405180910390a3611424600083836114f3565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611532578082015181840152602081019050611517565b83811115611541576000848401525b50505050565b6000601f19601f8301169050919050565b6000611563826114f8565b61156d8185611503565b935061157d818560208601611514565b61158681611547565b840191505092915050565b600060208201905081810360008301526115ab8184611558565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115e3826115b8565b9050919050565b6115f3816115d8565b81146115fe57600080fd5b50565b600081359050611610816115ea565b92915050565b6000819050919050565b61162981611616565b811461163457600080fd5b50565b60008135905061164681611620565b92915050565b60008060408385031215611663576116626115b3565b5b600061167185828601611601565b925050602061168285828601611637565b9150509250929050565b60008115159050919050565b6116a18161168c565b82525050565b60006020820190506116bc6000830184611698565b92915050565b6116cb81611616565b82525050565b60006020820190506116e660008301846116c2565b92915050565b600080600060608486031215611705576117046115b3565b5b600061171386828701611601565b935050602061172486828701611601565b925050604061173586828701611637565b9150509250925092565b600060ff82169050919050565b6117558161173f565b82525050565b6000602082019050611770600083018461174c565b92915050565b60006020828403121561178c5761178b6115b3565b5b600061179a84828501611637565b91505092915050565b6000602082840312156117b9576117b86115b3565b5b60006117c784828501611601565b91505092915050565b6117d9816115d8565b82525050565b60006020820190506117f460008301846117d0565b92915050565b60008060408385031215611811576118106115b3565b5b600061181f85828601611601565b925050602061183085828601611601565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061188157607f821691505b602082108114156118955761189461183a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118d582611616565b91506118e083611616565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156119155761191461189b565b5b828201905092915050565b600081905092915050565b50565b600061193b600083611920565b91506119468261192b565b600082019050919050565b600061195c8261192e565b9150819050919050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b600061199c601483611503565b91506119a782611966565b602082019050919050565b600060208201905081810360008301526119cb8161198f565b9050919050565b6000815190506119e181611620565b92915050565b6000602082840312156119fd576119fc6115b3565b5b6000611a0b848285016119d2565b91505092915050565b7f596f7520646f6e74206f776e20616e792043727970746f20446576204e46542760008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a70602183611503565b9150611a7b82611a14565b604082019050919050565b60006020820190508181036000830152611a9f81611a63565b9050919050565b6000604082019050611abb60008301856117d0565b611ac860208301846116c2565b9392505050565b6000611ada82611616565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611b0d57611b0c61189b565b5b600182019050919050565b7f596f75206861766520616c726561647920636c61696d656420616c6c2074686560008201527f20746f6b656e7300000000000000000000000000000000000000000000000000602082015250565b6000611b74602783611503565b9150611b7f82611b18565b604082019050919050565b60006020820190508181036000830152611ba381611b67565b9050919050565b6000611bb582611616565b9150611bc083611616565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611bf957611bf861189b565b5b828202905092915050565b7f45746865722073656e7420697320696e636f7272656374000000000000000000600082015250565b6000611c3a601783611503565b9150611c4582611c04565b602082019050919050565b60006020820190508181036000830152611c6981611c2d565b9050919050565b7f4578636565647320746865206d617820746f74616c20737570706c792061766160008201527f696c61626c652e00000000000000000000000000000000000000000000000000602082015250565b6000611ccc602783611503565b9150611cd782611c70565b604082019050919050565b60006020820190508181036000830152611cfb81611cbf565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611d5e602583611503565b9150611d6982611d02565b604082019050919050565b60006020820190508181036000830152611d8d81611d51565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611df0602683611503565b9150611dfb82611d94565b604082019050919050565b60006020820190508181036000830152611e1f81611de3565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611e82602483611503565b9150611e8d82611e26565b604082019050919050565b60006020820190508181036000830152611eb181611e75565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f14602283611503565b9150611f1f82611eb8565b604082019050919050565b60006020820190508181036000830152611f4381611f07565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611f80601d83611503565b9150611f8b82611f4a565b602082019050919050565b60006020820190508181036000830152611faf81611f73565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612012602583611503565b915061201d82611fb6565b604082019050919050565b6000602082019050818103600083015261204181612005565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006120a4602383611503565b91506120af82612048565b604082019050919050565b600060208201905081810360008301526120d381612097565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000612136602683611503565b9150612141826120da565b604082019050919050565b6000602082019050818103600083015261216581612129565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006121a2602083611503565b91506121ad8261216c565b602082019050919050565b600060208201905081810360008301526121d181612195565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600061220e601f83611503565b9150612219826121d8565b602082019050919050565b6000602082019050818103600083015261223d81612201565b905091905056fea26469706673582212206f065af71b482b6b9efdd82b54ae8de7cc9962e908ad05f9c7f96f4e47ed580264736f6c63430008090033",
  "deployedBytecode": "0x60806040526004361061012e5760003560e01c80635f3690af116100ab57806395d89b411161006f57806395d89b41146103da578063a0712d6814610405578063a457c2d714610421578063a9059cbb1461045e578063dd62ed3e1461049b578063f2fde38b146104d857610135565b80635f3690af146102f357806370a0823114610330578063715018a61461036d5780637ff9b596146103845780638da5cb5b146103af57610135565b8063313ce567116100f2578063313ce56714610232578063395093511461025d5780633ccfd60b1461029a5780634e71d92d146102b15780635afcc2f5146102c857610135565b806306fdde0314610137578063095ea7b31461016257806318160ddd1461019f57806323b872dd146101ca5780632ab4d0521461020757610135565b3661013557005b005b34801561014357600080fd5b5061014c610501565b6040516101599190611591565b60405180910390f35b34801561016e57600080fd5b506101896004803603810190610184919061164c565b610593565b60405161019691906116a7565b60405180910390f35b3480156101ab57600080fd5b506101b46105b6565b6040516101c191906116d1565b60405180910390f35b3480156101d657600080fd5b506101f160048036038101906101ec91906116ec565b6105c0565b6040516101fe91906116a7565b60405180910390f35b34801561021357600080fd5b5061021c6105ef565b60405161022991906116d1565b60405180910390f35b34801561023e57600080fd5b506102476105fd565b604051610254919061175b565b60405180910390f35b34801561026957600080fd5b50610284600480360381019061027f919061164c565b610606565b60405161029191906116a7565b60405180910390f35b3480156102a657600080fd5b506102af61063d565b005b3480156102bd57600080fd5b506102c6610707565b005b3480156102d457600080fd5b506102dd610996565b6040516102ea91906116d1565b60405180910390f35b3480156102ff57600080fd5b5061031a60048036038101906103159190611776565b6109a2565b60405161032791906116a7565b60405180910390f35b34801561033c57600080fd5b50610357600480360381019061035291906117a3565b6109c2565b60405161036491906116d1565b60405180910390f35b34801561037957600080fd5b50610382610a0a565b005b34801561039057600080fd5b50610399610a1e565b6040516103a691906116d1565b60405180910390f35b3480156103bb57600080fd5b506103c4610a29565b6040516103d191906117df565b60405180910390f35b3480156103e657600080fd5b506103ef610a53565b6040516103fc9190611591565b60405180910390f35b61041f600480360381019061041a9190611776565b610ae5565b005b34801561042d57600080fd5b506104486004803603810190610443919061164c565b610bc5565b60405161045591906116a7565b60405180910390f35b34801561046a57600080fd5b506104856004803603810190610480919061164c565b610c3c565b60405161049291906116a7565b60405180910390f35b3480156104a757600080fd5b506104c260048036038101906104bd91906117fa565b610c5f565b6040516104cf91906116d1565b60405180910390f35b3480156104e457600080fd5b506104ff60048036038101906104fa91906117a3565b610ce6565b005b60606003805461051090611869565b80601f016020809104026020016040519081016040528092919081815260200182805461053c90611869565b80156105895780601f1061055e57610100808354040283529160200191610589565b820191906000526020600020905b81548152906001019060200180831161056c57829003601f168201915b5050505050905090565b60008061059e610d6a565b90506105ab818585610d72565b600191505092915050565b6000600254905090565b6000806105cb610d6a565b90506105d8858285610f3d565b6105e3858585610fc9565b60019150509392505050565b69021e19e0c9bab240000081565b60006012905090565b600080610611610d6a565b90506106328185856106238589610c5f565b61062d91906118ca565b610d72565b600191505092915050565b61064561124a565b600061064f610a29565b9050600047905060008273ffffffffffffffffffffffffffffffffffffffff168260405161067c90611951565b60006040518083038185875af1925050503d80600081146106b9576040519150601f19603f3d011682016040523d82523d6000602084013e6106be565b606091505b5050905080610702576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f9906119b2565b60405180910390fd5b505050565b60003390506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b815260040161076991906117df565b60206040518083038186803b15801561078157600080fd5b505afa158015610795573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b991906119e7565b9050600081116107fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f590611a86565b60405180910390fd5b6000805b82811015610930576000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f745c5986846040518363ffffffff1660e01b8152600401610869929190611aa6565b60206040518083038186803b15801561088157600080fd5b505afa158015610895573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b991906119e7565b90506007600082815260200190815260200160002060009054906101000a900460ff1661091c576001836108ed91906118ca565b925060016007600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50808061092890611acf565b915050610802565b5060008111610974576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096b90611b8a565b60405180910390fd5b61099133678ac7230489e800008361098c9190611baa565b6112c8565b505050565b678ac7230489e8000081565b60076020528060005260406000206000915054906101000a900460ff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610a1261124a565b610a1c6000611428565b565b66038d7ea4c6800081565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610a6290611869565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8e90611869565b8015610adb5780601f10610ab057610100808354040283529160200191610adb565b820191906000526020600020905b815481529060010190602001808311610abe57829003601f168201915b5050505050905090565b60008166038d7ea4c68000610afa9190611baa565b905080341015610b3f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3690611c50565b60405180910390fd5b6000670de0b6b3a764000083610b559190611baa565b905069021e19e0c9bab240000081610b6b6105b6565b610b7591906118ca565b1115610bb6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bad90611ce2565b60405180910390fd5b610bc033826112c8565b505050565b600080610bd0610d6a565b90506000610bde8286610c5f565b905083811015610c23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1a90611d74565b60405180910390fd5b610c308286868403610d72565b60019250505092915050565b600080610c47610d6a565b9050610c54818585610fc9565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610cee61124a565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5590611e06565b60405180910390fd5b610d6781611428565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610de2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd990611e98565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4990611f2a565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610f3091906116d1565b60405180910390a3505050565b6000610f498484610c5f565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610fc35781811015610fb5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fac90611f96565b60405180910390fd5b610fc28484848403610d72565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611039576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103090612028565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a0906120ba565b60405180910390fd5b6110b48383836114ee565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561113a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111319061214c565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111cd91906118ca565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161123191906116d1565b60405180910390a36112448484846114f3565b50505050565b611252610d6a565b73ffffffffffffffffffffffffffffffffffffffff16611270610a29565b73ffffffffffffffffffffffffffffffffffffffff16146112c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112bd906121b8565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611338576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132f90612224565b60405180910390fd5b611344600083836114ee565b806002600082825461135691906118ca565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113ab91906118ca565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161141091906116d1565b60405180910390a3611424600083836114f3565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611532578082015181840152602081019050611517565b83811115611541576000848401525b50505050565b6000601f19601f8301169050919050565b6000611563826114f8565b61156d8185611503565b935061157d818560208601611514565b61158681611547565b840191505092915050565b600060208201905081810360008301526115ab8184611558565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115e3826115b8565b9050919050565b6115f3816115d8565b81146115fe57600080fd5b50565b600081359050611610816115ea565b92915050565b6000819050919050565b61162981611616565b811461163457600080fd5b50565b60008135905061164681611620565b92915050565b60008060408385031215611663576116626115b3565b5b600061167185828601611601565b925050602061168285828601611637565b9150509250929050565b60008115159050919050565b6116a18161168c565b82525050565b60006020820190506116bc6000830184611698565b92915050565b6116cb81611616565b82525050565b60006020820190506116e660008301846116c2565b92915050565b600080600060608486031215611705576117046115b3565b5b600061171386828701611601565b935050602061172486828701611601565b925050604061173586828701611637565b9150509250925092565b600060ff82169050919050565b6117558161173f565b82525050565b6000602082019050611770600083018461174c565b92915050565b60006020828403121561178c5761178b6115b3565b5b600061179a84828501611637565b91505092915050565b6000602082840312156117b9576117b86115b3565b5b60006117c784828501611601565b91505092915050565b6117d9816115d8565b82525050565b60006020820190506117f460008301846117d0565b92915050565b60008060408385031215611811576118106115b3565b5b600061181f85828601611601565b925050602061183085828601611601565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061188157607f821691505b602082108114156118955761189461183a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118d582611616565b91506118e083611616565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156119155761191461189b565b5b828201905092915050565b600081905092915050565b50565b600061193b600083611920565b91506119468261192b565b600082019050919050565b600061195c8261192e565b9150819050919050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b600061199c601483611503565b91506119a782611966565b602082019050919050565b600060208201905081810360008301526119cb8161198f565b9050919050565b6000815190506119e181611620565b92915050565b6000602082840312156119fd576119fc6115b3565b5b6000611a0b848285016119d2565b91505092915050565b7f596f7520646f6e74206f776e20616e792043727970746f20446576204e46542760008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a70602183611503565b9150611a7b82611a14565b604082019050919050565b60006020820190508181036000830152611a9f81611a63565b9050919050565b6000604082019050611abb60008301856117d0565b611ac860208301846116c2565b9392505050565b6000611ada82611616565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611b0d57611b0c61189b565b5b600182019050919050565b7f596f75206861766520616c726561647920636c61696d656420616c6c2074686560008201527f20746f6b656e7300000000000000000000000000000000000000000000000000602082015250565b6000611b74602783611503565b9150611b7f82611b18565b604082019050919050565b60006020820190508181036000830152611ba381611b67565b9050919050565b6000611bb582611616565b9150611bc083611616565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611bf957611bf861189b565b5b828202905092915050565b7f45746865722073656e7420697320696e636f7272656374000000000000000000600082015250565b6000611c3a601783611503565b9150611c4582611c04565b602082019050919050565b60006020820190508181036000830152611c6981611c2d565b9050919050565b7f4578636565647320746865206d617820746f74616c20737570706c792061766160008201527f696c61626c652e00000000000000000000000000000000000000000000000000602082015250565b6000611ccc602783611503565b9150611cd782611c70565b604082019050919050565b60006020820190508181036000830152611cfb81611cbf565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611d5e602583611503565b9150611d6982611d02565b604082019050919050565b60006020820190508181036000830152611d8d81611d51565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611df0602683611503565b9150611dfb82611d94565b604082019050919050565b60006020820190508181036000830152611e1f81611de3565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611e82602483611503565b9150611e8d82611e26565b604082019050919050565b60006020820190508181036000830152611eb181611e75565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f14602283611503565b9150611f1f82611eb8565b604082019050919050565b60006020820190508181036000830152611f4381611f07565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611f80601d83611503565b9150611f8b82611f4a565b602082019050919050565b60006020820190508181036000830152611faf81611f73565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612012602583611503565b915061201d82611fb6565b604082019050919050565b6000602082019050818103600083015261204181612005565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006120a4602383611503565b91506120af82612048565b604082019050919050565b600060208201905081810360008301526120d381612097565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000612136602683611503565b9150612141826120da565b604082019050919050565b6000602082019050818103600083015261216581612129565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006121a2602083611503565b91506121ad8261216c565b602082019050919050565b600060208201905081810360008301526121d181612195565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600061220e601f83611503565b9150612219826121d8565b602082019050919050565b6000602082019050818103600083015261223d81612201565b905091905056fea26469706673582212206f065af71b482b6b9efdd82b54ae8de7cc9962e908ad05f9c7f96f4e47ed580264736f6c63430008090033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
;
export const TOKEN_CONTRACT_ADDRESS = "0x396351a0aD551213524B23f090931d31E2b10f82";