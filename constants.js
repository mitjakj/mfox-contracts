module.exports = {
  BSC: {
    /* general */
    weth: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    usdt: '0x55d398326f99059fF775485246999027B3197955',
    usdc: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',

    /* LPs */
    foxLP_volatile_PH_WBNB: '0xEe30CfE5B70aAa6e1cFA6EE954DDE14207D4f56B',
    foxLP_stable_USDC_USDT: '0x9a1A1ceC68001e0685B10d60784828b8ffdCEb0e',
    foxLP_stable_USDC_WBNB: '0x13665cFA782dE4AFed5B3806b6F5EB4eCCcFbb78',

    /* swap */
    pairFactory: '0x6b289f7f98b083f58885B2901b07a308FC4f7995', 
    swapRouter: '0x491165C79BF3E09B1A240c3b2588A6Db20D10F5A', 

    /* token */
    token: '0xf83C6b4D7cbE88503ee36849b5bD19830A6170B9', 
    proxyOFT: '0x52Cb3c8882C7D22Ec783207994D51FFAbef71067', 
    veArt: '0xC40c59364CB5CA8540f1EB402F4350FfCFB8C0b1', 
    veToken: '0xfB7c10D38acbda7DfB464f3781725ffd701B00Ec', 

    /* presale */
    presale: '0x59433FF533bcEf95b2b543b13fa31Ee056E0469a', 
    treasury: '0x1bb1C670dC4317751a39EDa11Dc50E1231583306', 
    shroom: '0x827D4BE081b7bB2a1e3338d56F4197f31DfD6250', 
    veShroom: '0xD588e41f409B0062647EaBB6cC09e35D6d93AC70', 

    /* chainlink */
    chainlinkEpochController: '0xd77903eD23A32447784BbCE01E7c067219785F78',
    chainlinkWeeklyEmissionBridge: '0xff26C390EAF5F0aC56ea1484322d7138a4b351Cd',

    /* dao */
    bribeFactory: '0x9C1E5171987E3e11d2Bc5C1f39EA49573b9e0150', 
    gaugeFactory: '0xE20e960743A8D5aeB7f9Af695797A0881bf8c9FD', 
    voter: '0x03D8b7D195b98D1526f149ff99527875fD18E4C6', // !!!! VERIFY IN CODE HARD-CODED LZ ENDPOINT ADDRESS !!!!
    bluechipVoter: '0xfa9092C5094D84829342FcA675d2b289e5D16014',  // !!!! VERIFY IN CODE HARD-CODED LZ ENDPOINT ADDRESS !!!!
    bluechipFeeCollector: '0x83F55e1E85e2a06520C8f82Ec51C3D93D28F60B1', 
    rewardDistributorToken: '0xC707Bd564d6B71D236205720b5D074E5E548e611', 
    rewardDistributorUsdc: '', 
    minter: '0xdf61552195e02De3C86e2D88e50c29C559692985', 

    /* LZ */
    lzChainId: 102,
    lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',

    /* UpgradableContracts admin */
    timelocker: '',
    proxyAdmin: ''
  },

  ARBITRUM: {
    /* general */
    weth: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    usdt: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    usdc: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',

    foxLP_volatile_PH_WETH: '0xE78988BB01A6d4C92387018F6B64A84CaE2999bb',
    foxLP_volatile_PH_USDC: '0xA55aC49Eb59A059bF9dCEAA35357daf49644BE6E',

    /* swap */
    pairFactory: '0x6CE2738Ce9903111869C1dd23e4286B1d9992344', 
    swapRouter: '0xb1e5a5451c770438D24d4b22Ffb83d602b374d10', 

    /* token */
    token: '0x491165C79BF3E09B1A240c3b2588A6Db20D10F5A', 
    veArt: '0xF26b7535e3c64d669356906BE30AA1bB174781A9', 
    veToken: '0xf83C6b4D7cbE88503ee36849b5bD19830A6170B9', 

    /* dao */
    bribeFactory: '0x4e5096367E3D2e95e002678D0b15D2134F9b87Bf', 
    gaugeFactory: '0xFaf27189a995833ea41c102484396c060E04F62F', 
    voter: '0x47b172489AfC7721BC12531441b885b9d81A0bb8',
    bluechipVoter: '0xbB1883802aaE1921BD859E3815BfC161e7846587',
    bluechipFeeCollector: '0x83F55e1E85e2a06520C8f82Ec51C3D93D28F60B1', 
    lzReceiver: '0x0Efb224d2366415f7522826DFdfb0a9379Ec37fA', 
    lzReceiverBluechip: '0xE58a0e5BC457245F5002a9BaF212d8cA772B22D8', 

    /* LZ */
    lzChainId: 110,
    lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',

    /* UpgradableContracts admin */
    timelocker: '',
    proxyAdmin: ''
  }
};
