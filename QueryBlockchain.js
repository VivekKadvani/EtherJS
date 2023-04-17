const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/22963a6e14064351908a374a7a08d85b`);

const querryBlockchain = async () => {
    console.log(await provider.getBlockNumber())
    console.log("balance : ", ethers.utils.formatEther(await provider.getBalance('0x189B9cBd4AfF470aF2C0102f365FC1823d857965')))
};
querryBlockchain();