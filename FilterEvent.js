
const ethers = require("ethers")
const ABI = require("./usdt.json")
require("dotenv").config()

async function main() {
    //set up provider instance
    const contractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
    const provider = new ethers.providers.WebSocketProvider(`https://eth-mainnet.g.alchemy.com/v2/iZGw-1K2jHYZlDu07a-PZ2IJfEoIFJkt`)
    const contract = new ethers.Contract(contractAddress, ABI, provider);
    //set vent filter parameters
    const eventName = 'Approval';
    const eventFilter = contract.filters[eventName]("0xffaf2646C23743260754197123A4d55d290579AB");
    const fromBlock = 17071442;
    const toBlock = 'latest';
    const eventLogs = await contract.queryFilter(eventFilter, fromBlock, toBlock);
    //printing filtered log
    eventLogs.forEach((log) => {
        console.log(`Block number: ${log.blockNumber}`);
        console.log(`Transaction hash: ${log.transactionHash}`);
        console.log(`Event name: ${log.event}`);
        console.log(`Event arguments: ${JSON.stringify(log.args)}`);
    });
}
main()
