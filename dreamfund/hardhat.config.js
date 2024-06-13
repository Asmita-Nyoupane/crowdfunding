const { task } = require("hardhat/config");
require("dotenv").config({ path: "./.env.local" });
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "polygon",
  networks: {
    hardhat: {},
    polygon: {
      url: process.env.NEXT_PUBLIC_RPC_URL,
      accounts: [privateKey],
    },
  },
};