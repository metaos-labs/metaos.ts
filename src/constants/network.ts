export enum Chain_Id {
  Mainnet = 'metaos_99237-1',
  Testnet = 'metaos_99237-2',
  Devnet = 'metaos_99237-3'
}

export const CHAIN_NAMES = {
  [Chain_Id.Mainnet]: 'Mainnet',
  [Chain_Id.Testnet]: 'Testnet',
  [Chain_Id.Devnet]: 'Devnet',
}

export const NETWORK_DETAILS = {
  [Chain_Id.Mainnet]: {
    chainId: 'metaos_99237-1',
    chainName: 'Metaos Mainnet',
    nativeCurrency: {
      base: 'umtos',
      name: 'MetaOS',
      symbol: 'MTOS',
      display_exponent: 18,
      logo_uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2025.png',
    },
    nodeUrl: 'https://node.metaos.im',
    rpcUrl: 'https://tendermint.metaos.im',
    blockExplorerUrl: 'https://scan.metaos.im',
  },
  [Chain_Id.Testnet]: {
    chainId: 'metaos_99237-2',
    chainName: 'Metaos Mainnet',
    nativeCurrency: {
      base: 'umtos',
      name: 'MetaOS',
      symbol: 'MTOS',
      display_exponent: 18,
      logo_uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2025.png',
    },
    nodeUrl: 'https://node.metaos.im',
    rpcUrl: 'https://tendermint.metaos.im',
    blockExplorerUrl: 'https://scan.metaos.im',
  },
  [Chain_Id.Devnet]: {
    chainId: 'metaos_99237-3',
    chainName: 'Metaos Mainnet',
    nativeCurrency: {
      base: 'umtos',
      name: 'MetaOS',
      symbol: 'MTOS',
      display_exponent: 18,
      logo_uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2025.png',
    },
    nodeUrl: 'https://node.metaos.im',
    rpcUrl: 'https://tendermint.metaos.im',
    blockExplorerUrl: 'https://scan.metaos.im',
  },
}
