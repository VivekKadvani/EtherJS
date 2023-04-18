const { ethers } = require("ethers")
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/22963a6e14064351908a374a7a08d85b`)
const contractAddress = '0xDc7D429Ed4280c64709908552C184a8A952eDC0E'
const ABI = require("./abi.json");

const readContract = async () => {
    const contract = new ethers.Contract(contractAddress, ABI, provider);
    const EncodeFunction = contract.interface.encodeFunctionData('increment')
    const gas1 = await provider.estimateGas({
        to: contractAddress,
        data: EncodeFunction,
    })
    console.log(ethers.utils.formatUnits(gas1, "gwei"))

}
readContract()