export enum CeloContract {
  Accounts = 'Accounts',
  Attestations = 'Attestations',
  Election = 'Election',
  Escrow = 'Escrow',
  Exchange = 'Exchange',
  GasPriceMinimum = 'GasPriceMinimum',
  GoldToken = 'GoldToken',
  Governance = 'Governance',
  LockedGold = 'LockedGold',
  Reserve = 'Reserve',
  SortedOracles = 'SortedOracles',
  StableToken = 'StableToken',
  Validators = 'Validators',
  MarkAtToken = 'MarkAtToken',
}

// @ts-ignore Defined by webpack define plugin
const debugMode = __DEBUG__ ?? false
// @ts-ignore Defined by webpack define plugin
const isElectron = __IS_ELECTRON__ ?? false
// const isElectron = true
// @ts-ignore Defined by webpack define plugin
const version = __VERSION__ || null

interface Config {
  debug: boolean
  isElectron: boolean
  version: string | null
  jsonRpcUrlPrimary: string
  jsonRpcUrlSecondary?: string
  gatewayFeeRecipient?: string
  blockscoutUrl: string
  discordUrl: string
  desktopUrls: {
    windows: string
    mac: string
    linux: string
  }
  chainId: number
  contractAddresses: Record<CeloContract, string>
  defaultAccount?: string // strictly for dev use
}

const desktopUrls = {
  windows:
    'https://github.com/celo-tools/celo-web-wallet/releases/download/v1.0.3/Celo-Wallet-1.0.3-win.exe',
  mac:
    'https://github.com/celo-tools/celo-web-wallet/releases/download/v1.0.3/Celo-Wallet-1.0.3-mac.dmg',
  linux:
    'https://github.com/celo-tools/celo-web-wallet/releases/download/v1.0.3/Celo-Wallet-1.0.3-linux-x86_64.AppImage',
}

// TODO find a nice way to switch btwn configs at build/run time
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const configMainnet: Config = {
  debug: debugMode,
  isElectron,
  version,
  jsonRpcUrlPrimary: 'https://node.celowallet.app',
  jsonRpcUrlSecondary: 'https://forno.celo.org',
  gatewayFeeRecipient: '0x97a5fF70483F9320aFA72e04AbA148Aa1c26946C',
  blockscoutUrl: 'https://explorer.celo.org',
  discordUrl: 'https://discord.com/channels/600834479145353243/812471799585439794',
  desktopUrls,
  chainId: 42220,
  contractAddresses: {
    [CeloContract.Accounts]: '0x7d21685C17607338b313a7174bAb6620baD0aaB7',
    [CeloContract.Attestations]: '0xdC553892cdeeeD9f575aa0FBA099e5847fd88D20',
    [CeloContract.Election]: '0x8D6677192144292870907E3Fa8A5527fE55A7ff6',
    [CeloContract.Escrow]: '0xf4Fa51472Ca8d72AF678975D9F8795A504E7ada5',
    [CeloContract.Exchange]: '0x67316300f17f063085Ca8bCa4bd3f7a5a3C66275',
    [CeloContract.GasPriceMinimum]: '0xDfca3a8d7699D8bAfe656823AD60C17cb8270ECC',
    [CeloContract.GoldToken]: '0x471EcE3750Da237f93B8E339c536989b8978a438',
    [CeloContract.Governance]: '0xD533Ca259b330c7A88f74E000a3FaEa2d63B7972',
    [CeloContract.LockedGold]: '0x6cC083Aed9e3ebe302A6336dBC7c921C9f03349E',
    [CeloContract.Reserve]: '0x9380fA34Fd9e4Fd14c06305fd7B6199089eD4eb9',
    [CeloContract.SortedOracles]: '0xefB84935239dAcdecF7c5bA76d8dE40b077B7b33',
    [CeloContract.StableToken]: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
    [CeloContract.Validators]: '0xaEb865bCa93DdC8F47b8e29F40C5399cE34d0C58',
    [CeloContract.MarkAtToken]: '0xC374D4af3de08B8e92f140F0B58d428f238fC595',
  },
  // defaultAccount:
  //   'dirt detail century filter bid truly jazz benefit alpha palm vote segment loan three coil art task battle pen tornado fever hover buyer lyrics',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const configAlfajores: Config = {
  debug: true,
  isElectron,
  version,
  jsonRpcUrlPrimary: 'https://alfajores-forno.celo-testnet.org',
  blockscoutUrl: 'https://alfajores-blockscout.celo-testnet.org',
  discordUrl: 'https://discord.com/channels/600834479145353243/812471799585439794',
  desktopUrls,
  chainId: 44787,
  contractAddresses: {
    [CeloContract.Accounts]: '0xed7f51A34B4e71fbE69B3091FcF879cD14bD73A9',
    [CeloContract.Attestations]: '0xAD5E5722427d79DFf28a4Ab30249729d1F8B4cc0',
    [CeloContract.Election]: '0x1c3eDf937CFc2F6F51784D20DEB1af1F9a8655fA',
    [CeloContract.Escrow]: '0xb07E10c5837c282209c6B9B3DE0eDBeF16319a37',
    [CeloContract.Exchange]: '0x17bc3304F94c85618c46d0888aA937148007bD3C',
    [CeloContract.GasPriceMinimum]: '0xd0Bf87a5936ee17014a057143a494Dc5C5d51E5e',
    [CeloContract.GoldToken]: '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9',
    [CeloContract.Governance]: '0xAA963FC97281d9632d96700aB62A4D1340F9a28a',
    [CeloContract.LockedGold]: '0x6a4CC5693DC5BFA3799C699F3B941bA2Cb00c341',
    [CeloContract.Reserve]: '0xa7ed835288Aa4524bB6C73DD23c0bF4315D9Fe3e',
    [CeloContract.SortedOracles]: '0xFdd8bD58115FfBf04e47411c1d228eCC45E93075',
    [CeloContract.StableToken]: '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1',
    [CeloContract.Validators]: '0x9acF2A99914E083aD0d610672E93d14b0736BBCc',
    [CeloContract.MarkAtToken]: '0xC374D4af3de08B8e92f140F0B58d428f238fC595',
  },
  // defaultAccount:
  //   'dirt detail century filter bid truly jazz benefit alpha palm vote segment loan three coil art task battle pen tornado fever hover buyer lyrics',
}

export const config = Object.freeze(configAlfajores)
