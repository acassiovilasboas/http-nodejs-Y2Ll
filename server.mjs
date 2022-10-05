import { createServer } from 'http';

createServer((req, res) => {
  res.json({"message":"Minha primeira API"});
  res.end();
}).listen(process.env.PORT);
