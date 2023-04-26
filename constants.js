module.exports = {
  BSC: {
    /* swap */
    pairFactory: '0x407a4cDA343037FBCF7fdAEC97e0a8597437c860', 
    swapRouter: '0x654F131605Fb2e8DB48bAD8a4077973DfFDDA01C', 

    /* token */
    token: '0xB48837F0C05c0931c7B3DcFDceA0365396c39F3A', 
    proxyOFT: '0x8f29cFBE5b112C18D1eF73C2a925F5BE6a3f5b62', 
    veArt: '0xd0f4f8b8cEd19E82b8461ada452fF9B116E5F717', 
    veToken: '0xb241D311f1114ECb6E210c40b0F2040AC8cD485e', 

    /* presale */
    presale: '', 
    treasury: '', 
    shroom: '', 
    veShroom: '', 

    /* chainlink */
    chainlinkEpochController: '0x18aC685D8D40eCBA614dcae0EBc35313DFD2eD84',
    chainlinkWeeklyEmissionBridge: '',

    /* dao */
    bribeFactory: '0xAa3e74d0729227a232e198C98Dfd5ab813b23b37', 
    gaugeFactory: '0x52Af90A31e7a5a1c66b6BAF59719d289BcfE3e3D', 
    voter: '0xA1F9946f2Bbb11a0719e758693992A181e6B7723', // !!!! VERIFY IN CODE HARD-CODED LZ ENDPOINT ADDRESS !!!!
    bluechipVoter: '0xE97dCA1786Aaf17Ab4aE9c1eE78eC97881396968',  // !!!! VERIFY IN CODE HARD-CODED LZ ENDPOINT ADDRESS !!!!
    bluechipFeeCollector: '0x19202546c2A6ee04bf13883eCc87f678DcE618Cf', 
    rewardDistributorToken: '0xB420D9C0993B23D650C66F9FeAEb760104E8058B', 
    rewardDistributorUsdc: '', 
    minter: '0x933222F9E9c6d35EC39Eac890B480505931C93D9', 

    /* LZ */
    lzChainId: 102,
    lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',

    /* UpgradableContracts admin */
    timelocker: '',
    proxyAdmin: '0x78AE0bACB5771E265Fe530A4EF9DDDbD3467f6eb', // still need to transfer ownership from deployer to timelocker

    /* ERC20 */
    weth: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    usdt: '0x55d398326f99059fF775485246999027B3197955',
    usdc: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',

    /* LPs */
    foxLP_volatile_USDC_WBNB: '0x06bAF8226fC172158e81F30C9Ff186cB17749543',
    foxLP_volatile_USDT_BUSD: '0xC4Fe3cC91Af574b5255f1079BAd60776181e639F',
    foxLP_stable_USDT_USDC: '0x9592B1B6D156D6a79848607928D60afc6D9e926c',
    foxLP_volatile_PH_WBNB: '0xB85E0AA0e96f46a93fFEb2d0be22Cb09F191117b',
  },

  ARBITRUM: {
    /* swap */
    pairFactory: '0x407a4cDA343037FBCF7fdAEC97e0a8597437c860', 
    swapRouter: '0x654F131605Fb2e8DB48bAD8a4077973DfFDDA01C', 
    solidlyLib: '0xB48837F0C05c0931c7B3DcFDceA0365396c39F3A',

    /* token */
    token: '0x6EB19f9D45DD3aa8fED5A5F30434F4c3858973CA', 
    veToken: '0x78AE0bACB5771E265Fe530A4EF9DDDbD3467f6eb', 

    /* dao */
    bribeFactory: '0xb241D311f1114ECb6E210c40b0F2040AC8cD485e', 
    gaugeFactory: '0xAa3e74d0729227a232e198C98Dfd5ab813b23b37', 
    voter: '0x3903F5897E7A5a09F8dA9748537Cf429FD4B2b50',
    bluechipVoter: '0x19202546c2A6ee04bf13883eCc87f678DcE618Cf',
    bluechipFeeCollector: '0xEf187603caAfF55D27ade3F2a291AfE49f83c054', 
    lzReceiver: '0xE97dCA1786Aaf17Ab4aE9c1eE78eC97881396968', 
    lzReceiverBluechip: '0xB420D9C0993B23D650C66F9FeAEb760104E8058B', 

    /* LZ */
    lzChainId: 110,
    lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',

    /* UpgradableContracts admin */
    timelocker: '',
    proxyAdmin: '0x4d5DC125BA9a9330d983DD4C0B915Cb726D7f2D5', // still need to transfer ownership from deployer to timelocker

    /* ERC20 */
    weth: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    usdt: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    usdc: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',

    /* LPs */
    foxLP_volatile_USDC_WETH: '0xf82C9f8EeF2f4078583a780Abd82Ff2BF342183e',
  }
};
