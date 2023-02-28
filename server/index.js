const express = require('express');
const app = express();
const port = 8080;

const accountRouter = require('./router/accountRouter');

app.use('/account', accountRouter);

app.get('/', (req, res) => {
  res.send('hello node.js!');
})

app.listen(port, () => {
  console.log('Listening..');
})

//계정에 대한 정보, 트랜잭션에 대한 정보, 컨트랙트에 대한 정보