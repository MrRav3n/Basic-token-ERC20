const Token = artifacts.require("Token");

module.exports = function(deployer) {
    deployer.deploy(Token, "MyToken", "MYT", 18, 10);
};
