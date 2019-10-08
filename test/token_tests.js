const Token = artifacts.require("Token")

require('chai')
.use(require('chai-as-promised'))
.should()

contract('Token', (accounts) => {
    let token;
    before(async() => {
            token= await Token.deployed();
    })
    describe('should be initialized', async() => {
        it('has basic data', async() => {
            assert.notEqual(token.address, 0x0);
            assert.notEqual(await token.name(), '');
            assert.notEqual(await token.symbol(), '');
            assert.notEqual(await token.decimals(), '');
            assert.notEqual(await token._totalSupply(), '')
        })
    })
    describe('tokens paramets tests', async() => {
        it('total supply', async() => {

        })
        it('allowance', async() => {

        })
        it('transfer', async() => {

        })
        it('transferFrom', async() => {

        })
        it('approve', async() => {

        })
    })
})