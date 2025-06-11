const { Socket } = require("dgram");
const net = require("net");
const { IP, PORT } = require("./constants");

// Code below establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

// The code below interprets incoming data
 
  return conn;

}

module.exports = connect;