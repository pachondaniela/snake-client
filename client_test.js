const net = require("net");

const config = {
  host:"https://noble-bison-clear.ngrok-free.app",
  port: 51373
}

const connection = net.createConnection(config);

connection.on("data", (data) => {
  console.log(`Server says ${data}`);
})

connection.on("close" , () => {
  console.log("Disconnected from the server");
})

connection.setEncoding('utf-8');

process.stdin.on("data", (data) => {
  connection.write(`Daniela: ${data}`)
})
