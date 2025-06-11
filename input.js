const connect = require("./client.js")

let connection;

const setupInput = (conn) => {

  connection = conn;

  const stdin = process.stdin; // create variable to hold the stdin object so we don't have to type process.stdin multiple times

  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter

  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input

  stdin.resume(); // resume stdin so the program can listen for input

  stdin.on("data", handleUserInput); //You'll now register an event listener for stdin. In the handleUserInput function, you'll specify what happens when "data" is received from stdin... in other words, what happens when a particular key is pressed on the keyboard input.

  return stdin; // return the stdin object so we can use it elsewhere in the program

};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  } else if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === "q"){
    connection.write("Say: You are fun!")
  } else if (key === "l") {
    connection.write("Say: I am hungry!!")
  }


};

module.exports = setupInput;
