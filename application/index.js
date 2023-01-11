//application that uses the express framework to create a server that listens on port 3000 and responds with a message when a request is made to the root URL (/).
import express from 'express';
import service from './service/cacheKey.js';
import * as path from "path";
let app = express();
const PORT = process.env.APP_PORT;
app.get('/', function(req, res) {
  res.sendFile(path.join(process.cwd(),'./index.html'));
});

app.get('/get', async function(req, res) {
  let key = req.header('key');
  try {
    let value = await service.get(key);
    res.send({value});
  } catch (error){
    console.log(error);
    res.send("Internal error");
  }
});

app.post('/set', async function(req, res) {
  let key = req.header('key');
  let val = req.header('value');
  try {
    await service.set(key, val);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
});

app.delete('/del', async function(req, res) {
  let key = req.header('key');
  try {
    await service.del(key);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
});


app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}!`);
});