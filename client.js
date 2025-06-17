const { Socket } = require("dgram");
const net = require("net");
const { IP, PORT } = require("./constants");

// Code below establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

 // Set the encoding so incoming data is readable
  conn.setEncoding("utf8");

  // This runs once the connection is established
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: DPA"); // You can customize your name here
  });

  // Optional: handle data from the server
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};


module.exports = connect;