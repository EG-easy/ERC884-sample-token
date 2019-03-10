const MyToken = artifacts.require('./MyToken.sol')

module.exports = (deployer) => {
  const initialSupply = 100000
  deployer.deploy(MyToken, initialSupply)
}

