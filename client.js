const { Socket } = require("dgram");
const net = require("net");

// Code below establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: "10.0.0.211",
    port: 50541
  });

// The code below interprets incoming data


  conn.setEncoding("utf8");

    conn.on("data" , (data) => {
    console.log("Server says: ", data);
    });

    conn.on("connect" , () => {
      conn.write("Name: DPP") ;
      // conn.write("Move: up");
      setInterval(() => {
        conn.write("Move: up");
      } , 500)
      setInterval(() => {
        conn.write("Move: right");
      } , 1000)
      
     
    })

}
module.exports = connect;