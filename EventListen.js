const ethers = require("ethers")
const ABI = require("./usdt.json")
require("dotenv").config()

async function main() {
    const usdtAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
    const provider = new ethers.providers.WebSocketProvider(`https://eth-mainnet.g.alchemy.com/v2/iZGw-1K2jHYZlDu07a-PZ2IJfEoIFJkt`)

    const contract = new ethers.Contract(usdtAddress, ABI, provider);

    await contract.on("Transfer", (from, to, value, event) => {
        let info = {
            from: from,
            to: to,
            value: ethers.utils.formatUnits(value, 6),
            data: event
        };
        console.log(JSON.stringify(info.value, null, 4));
    })
}

main()

