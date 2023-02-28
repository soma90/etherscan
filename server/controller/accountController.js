const Web3 = require('web3');
const goeriNodeUrl = "https://goerli.infura.io/v3/73a464c2ce254396aa8e188b0899d093";

const getWeb3 = () => {
  const web3 = new Web3(new Web3.providers.HttpProvider(goeriNodeUrl));
  return web3;
}

const getAccounts = async () => {
  try {
    const accounts = await getWeb3().eth.getAccounts();
    console.log(accounts);
    return accounts;
  } catch (e) {
    console.log("getAccount:", e);
    return e;
  }
}

const getBalance = async (address) => {
  try {
    const balance = await getWeb3().eth.getBalance(address);
    console.log(balance);
    return balance;
  } catch (e) {
    console.log("getBalance:", e);
    return e;
  }
}

module.exports = {
  //서버에 있는 계정정보 가져오기
  getAccounts: (req, res) => {
    getAccounts().then((accounts) => {
      console.log(accounts)
      res.send(accounts);
    });    
  },
  getBalance: (req, res) => {
    console.log(11, req.params.address)
    getBalance(req.params.address).then((balance) => {
      console.log(balance)
      res.send(balance);
    });    
  }
}