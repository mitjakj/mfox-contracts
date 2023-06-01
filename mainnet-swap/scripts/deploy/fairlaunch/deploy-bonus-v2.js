const hre = require("hardhat");

async function main() {
    const addresses = hre.network.config.constants;
    const ContractF = await hre.ethers.getContractFactory("LockWithBonus");
    const contr = await ContractF.deploy(
        '0xB48837F0C05c0931c7B3DcFDceA0365396c39F3A', //addresses.token,
        '0xb241D311f1114ECb6E210c40b0F2040AC8cD485e', //addresses.veToken,
        '0xFfc1C2b7f6D4a1b7DD9C349DB11242241EcD8Ddf', //addresses.shroom,
        '0x481d195135E9263fF5ee6596c19F4717922E3Bf2', //addresses.veShroom,
        '0x028edcd90A788238b17959b8B43e2D157C2fB66a', //addresses.fairlaunchBonusTreasury
    );

    await contr.deployed();

    console.log("FairlaunchBonus deployed to: %saddress/%s", hre.network.config.explorer, contr.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
