module.exports = {
  BSC: {
    /* swap */
    pairFactory: '0xcEDa3234D7D5b36114d886682A399c6d126A03e0', 
    swapRouter: '0x4F9DB343b8b1091C19DF71472E335B22aADFA0cF', 

    /* token */
    token: '0x84E0a246DD437d911989E89667816A9Ed97a1284', 
    proxyOFT: '0xCAB0838EAF7C34ba8C6713b7f395c36df33A1c54', 
    veArt: '0x79c86a3E7921Bea8b2344eDB0A34Ef1e22aa73C8', 
    veToken: '0x4b749A14e8A1cC008eD7c89F7652537065191bbd', 

    /* fairlaunch */
    fairlaunch: '0x2498F6668b7970F42e4AB93d50E501e5ed513264', 
    fairlaunchZap: '0xcb8Edbe8028A026cED02b1160e43166B62305beF', 
    fairlaunchBonus: '0x4434512EF1bD77Fe7c54f0f0702974C87b9056d0',
    fairlaunchBonusTreasury: '0xDF3B8a01de5B4419ed65e107449D19572Cfb3AAF',
    treasury: '0x0b013649982c9f2623eC15d4fFF62EC1cB6Dc8e5', 
    shroom: '0x967F4B82D8B7eD38f655CCf084150180c8165AC5', 
    veShroom: '0x6a07Cc5C621d8A1f8Ce25f449B49FaAD5dCBb8Ee', 
    lockWithBonus: '0xC8bD551A4C245640B137e8Cf9C7cAE8D46ac956e',

    /* chainlink */
    chainlinkEpochController: '0x7c5106bd2C1cC55b17A0F384B5C7E2C67121CcBA',
    chainlinkWeeklyEmissionBridge_ARBITRUM: '0xD1Bb06d224d4193D3b8db1558d7e3F2B1711efbE',
    chainlinkWeeklyEmissionBridge_POLYGON: '0x66D95d405e157fb199565F2fB127453649A3C003',
    bluechipFeeCollector: '0xa2d23C7Ca6D360D5B0b30CaFF79dbBfa242B4811', 
    voterFeeClaimer: '0x4a36b507D1b5a17dDFa16044E922D15625871310', 

    /* dao */
    bribeFactory: '0x2295277c1AE8314387289E7E506407B9332c1500', 
    gaugeFactory: '0x69B62Fc3Ab3c1571E47CD3bc8A86E91426667914', 
    voter: '0xF2Fc2b5950f323ad90A210f9f1264392261d3Ae9', // !!!! VERIFY IN CODE HARD-CODED LZ ENDPOINT ADDRESS !!!!
    bluechipVoter: '0x8C246E013C719070c902544B4d27f104a82A15f9',  // !!!! VERIFY IN CODE HARD-CODED LZ ENDPOINT ADDRESS !!!!
    rewardDistributorToken: '0xeF6567279F6dF45d01601D78c21BAB3ffc469533', 
    rewardDistributorUsdc: '0xBd7A8c05D0eB214e3C5cc63D4B77C2Ea38bDe440', 
    minter: '0x3Ab6c1800B7878be6E890798C9F0282c8AA43E39', 

    /* LZ */
    lzChainId: 102,
    lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',

    /* UpgradableContracts admin */
    // timelocker_30sec_old: '0xa14F352937CB267aD61dbEEc915240b9dff7623c',
    timelocker: '0x56c11006Fce73A07A39C06ef6Efa0bc226035fD6',
    proxyAdmin: '0xd053a8E6D2bEA3c5b32E20E6c0D96dda2fbD0621', // still need to transfer ownership from deployer to timelocker

    /* ERC20 */
    wnative: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    wbnb: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    usdt: '0x55d398326f99059fF775485246999027B3197955',
    usdc: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    weth: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    busd: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    btcb: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',

    /* LPs */
    foxLP_stable_bnbx_wbnb: '0xa6df8AeAd9726007cfC09bc31E277dE36Ed92B1F',
    foxLP_stable_wbnb_rbnb: '0x3F23F083E5f844cc273184B317c9ec0954284fB2',
    foxLP_volatile_acsBNB_ACS: '0xD095f27C787D6a122dd4a9fD15A5bb942E0DffE9',
    foxLP_volatile_agEUR_usdc: '0x2BB4E74D9Df4Df1F5cd503aEcCB8478E85e7E565',
    foxLP_stable_usdt_busd: '0x9f06191C77eAF85aE06A33A3C7fBa5819229e936',
    foxLP_volatile_usdt_btcb: '0xE88D98F83bc8299bf52e6A321C1c7E537dF08735',
    foxLP_volatile_usdt_wbnb: '0x1ddE57c0f9303bACc816BDB1AEca22d5aF79f385',
    foxLP_stable_usdt_usdc: '0xeEbAEF9b4762F405c20FB816370F9634C1A819F6',
    foxLP_volatile_fox_wbnb: '0xff657bF9B1e70338c88C6a42ca3613F749C5A26e',
    foxLP_volatile_shroom_wbnb: '0x0a1C016180753b31F1f148cfBE64BfEbADCFBEc1',
    foxLP_volatile_deus_wbnb: '0x98AA725bC37Cc50Ab2561d606F90E409Fd2c18EF',

    foxLP_volatile_TAROT_WBNB: '0x4959636B031cb34B22229d8305aad79EA6339736',
    'foxLP_stable_USDT+_USD+': '0xA72D2aEAD2bcf791D608D99749EfE5de5b15f65A',
  },

  ARBITRUM: {
    /* swap */
    pairFactory: '0xBd7A8c05D0eB214e3C5cc63D4B77C2Ea38bDe440', 
    swapRouter: '0x1F7aA9F33803c4ea440dE3fAF6E0FFa4f5E45eb6', 

    /* token */
    token: '0x84E0a246DD437d911989E89667816A9Ed97a1284', 
    veToken: '0x4b749A14e8A1cC008eD7c89F7652537065191bbd', 

    /* chainlink */
    bluechipFeeCollector: '0xfC282bc7004DF6d1ec342A676354575dcd4EE974', 
    voterFeeClaimer: '0x2746655AfE725CA114a45D3fadF08f10fB0bb57a', 

    /* dao */
    bribeFactory: '0x298e40a026F4db34b57CBDB7c5F22f2d9BaF935d', 
    gaugeFactory: '0xd614F630F18602dDd08b41728058E94427475cd5', 
    voter: '0x6a07Cc5C621d8A1f8Ce25f449B49FaAD5dCBb8Ee',
    bluechipVoter: '0xcb8Edbe8028A026cED02b1160e43166B62305beF',
    lzReceiver: '0xAFD9748AAD1ceC527723f5104B9D9Ad94d7DE0A7', 
    lzReceiverBluechip: '0x2498F6668b7970F42e4AB93d50E501e5ed513264', 

    /* LZ */
    lzChainId: 110,
    lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',

    /* UpgradableContracts admin */
    timelocker: '0x4F9DB343b8b1091C19DF71472E335B22aADFA0cF',
    proxyAdmin: '0x79c86a3E7921Bea8b2344eDB0A34Ef1e22aa73C8', // still need to transfer ownership from deployer to timelocker

    /* ERC20 */
    wnative: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    weth: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    usdt: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    usdc: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',

    /* LPs */
    vAMM_SLIZ_slzUSDC: '0x2Ea8B94C087Ef44adFB55c28dA755D11C29dC2E0',
    sAMM_slzUSDC_USDC : '0x1Bc8634A71ae30954D96cD37e941A2E3Ac13224c',
    vAMM_ACS_WETH: '0x67577c278c8696b9027ffb8413117d08Fef3abdA',
    vAMM_IBEX_WETH: '0x423f7BA17cc2260a4F7C1838d96e999089902C6f',
    vAMM_IBEX_USDC: '0xa115BB72822f3A24874B24E5927EA98F481FDA91',
    vAMM_aOpenX_ARB: '0x908ea5170f9B04CE216C40aC878b4138A7779660',
    vAMM_agEUR_USDC: '0xC4f9723b46Dd8d9755687ca1b96b17eAc5080BC5',
    vAMM_L2DAO_WETH: '0xDD02Cec0d183e49E1e01cb22a7517Dc56837c9E2',
    vAMM_WBTC_USDC: '0x4271c17030d0462213010C78506e9D1A23692BFD',
    vAMM_WETH_ARB: '0xB36a0e65B58407fCAA2E2E0f2d5edaD31bE4541D',
    vAMM_WETH_USDC: '0x46afC3281A3121Eb8a08B2862BC0C7CA50618de2',
    sAMM_USDT_USDC: '0x10a5fc88f7478DFB24a602856E3B273f317dbc17',
    vAMM_DEUS_WETH: '0x628c1BfA62a69750088d16fE85C2C69528350080',
    sAMM_USX_USDC:	'0xF6e1C3f6c6c63C382a9c4c67421b29835b2D7e79',
    vAMM_TAROT_WETH:	'0x0CfF85A3BeA3575c7A4AFBF850C565c509Be0d88',
    'sAMM_USD+_DAI+':	'0xb5218593C5d7fcdb4Ae0C11B30d9181dfE010bBD',
  },

  POLYGON: {
    /* swap */
    pairFactory: '0xa2d23C7Ca6D360D5B0b30CaFF79dbBfa242B4811', 
    swapRouter: '0x76Ae45f981d7Ab80B56d29920ac13DCcd2a6C866', 

    /* token */
    token: '0x84E0a246DD437d911989E89667816A9Ed97a1284', 
    veToken: '0x851e951FD4Fb85710002C76376F7Fd5d9cff61A4', 

    /* chainlink */
    bluechipFeeCollector: '0xeBF77693c6531546E79c2D3426D541270bCDb434', 
    voterFeeClaimer: '0xC82AAfB906ecB40f3cfF3675391f0b370c66afcf', 

    /* dao */
    bribeFactory: '', 
    gaugeFactory: '0x79c86a3E7921Bea8b2344eDB0A34Ef1e22aa73C8', 
    voter: '0xfC282bc7004DF6d1ec342A676354575dcd4EE974',
    bluechipVoter: '0x41c42D2AA40013962d1C184a47606e4718259ff8',
    lzReceiver: '0x6a07Cc5C621d8A1f8Ce25f449B49FaAD5dCBb8Ee', 
    lzReceiverBluechip: '0xcb8Edbe8028A026cED02b1160e43166B62305beF', 

    /* LZ */
    lzChainId: 109,
    lzEndpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',

    /* UpgradableContracts admin */
    timelocker: '0xe6929972bFae2B5dd951573c92df78963236Ae40',
    proxyAdmin: '0xCAB0838EAF7C34ba8C6713b7f395c36df33A1c54', // still need to transfer ownership from deployer to timelocker

    /* ERC20 */
    wnative: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    wmatic: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    usdt: '',
    usdc: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',

    /* LPs */
    sAMM_WMATIC_rMATIC: '0x3ec9EE6B144870D1B5E2c0cbb1943F84e60863ba',
    sAMM_WMATIC_MaticX : '0x12301e8B65a8C85B65a31A9EB54194643DE1B993',
    vAMM_USDC_IBEX: '0x0fADa61A1539522B41F228113a4532Fc5191EEaF',
    vAMM_WMATIC_IBEX: '0x08be3F9CdF1C61878827f37164F1FBEd764372d2',
    vAMM_USDC_agEUR: '0x6ecE8A850034066d7Ec112e640E825D8075eAfB8',
    vAMM_WETH_USDT: '0xBb90c795F3F07064EA81247aBb9e94907B7eEE1b',
    vAMM_WBTC_WETH: '0x14860253c3Eba0afC77A5988F3757a5c1D71702E',
    sAMM_WMATIC_stMATIC: '0x29a55b3B45b97479C6AF25125ceC74778F66A281',
    vAMM_WMATIC_USDC : '0x512a4740EAD442EC88529043DE7297e3921A21bB',
    sAMM_USDC_USDT: '0xdBD885Cc88e1913302396c7d5eb6Ce3157D406cA',
    vAMM_DEUS_WMATIC: '0x8c53a84B16c3e477dFf14a12F416C52D0f1aDc63',
    vAMM_ACS_WMATIC: '0x742379245549d7367168bB4589E506F6D4af436B',
    vAMM_USDC_SPHERE:	'0xe4B98AA895390e17AE482a36A99C526F01b3d278',
  }
};
