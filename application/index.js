import express from 'express';
import service from './service/cacheKey.js';
import * as path from "path";
//  express initialization
let app = express();
const PORT = process.env.APP_PORT;
// Routes:
// get expose the main page html file
app.get('/', function(req, res) {
  res.sendFile(path.join(process.cwd(),'./index.html'));
});
// get the value of a key in redis cache by key name in header
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
// set the value of a key in redis cache by key name in header
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
// delete the value of a key in redis cache by key name in header
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