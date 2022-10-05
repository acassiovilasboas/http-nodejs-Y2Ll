import { createServer } from 'http';

createServer((req, res) => {
  res.write({"message": "Minha primeira API"});
  res.end();
}).listen(process.env.PORT);
