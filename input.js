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

  const MOVES = {
    w: 'Move: up',
    a: 'Move: left',
    s: 'Move: down',
    d: 'Move: right',
    q: 'Say: You are fun!',
    l: 'Say: I am hungry!!',
  };

 if (key === '\u0003') {
    process.exit();
}

if (MOVES[key]) {
    connection.write(MOVES[key]);
}

};

module.exports = setupInput;
