## This is the Snake Project

# 🐍 Snake Game Client

A command-line multiplayer Snake game client built in **JavaScript (Node.js)**. This project connects to a TCP game server and enables real-time gameplay using keyboard input.

---

## 🚀 Features

- Real-time movement using TCP socket communication
- Interactive keyboard controls (`W`, `A`, `S`, `D`, etc.)
- In-game chat messages
- Modular code structure for connection and input logic

---

## 📂 Project Structure

├── play.js # Entry point to launch the client
├── client.js # Establishes TCP connection with game server
├── input.js # Handles user keyboard input
├── constants.js # Stores configuration like IP and PORT



---

## 🎮 Controls

| Key      | Action                  |
|----------|-------------------------|
| W        | Move Up                 |
| A        | Move Left               |
| S        | Move Down               |
| D        | Move Right              |
| Q        | Say: "You are fun!"     |
| L        | Say: "I am hungry!!"    |
| Ctrl + C | Exit the game           |

---

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/pachondaniela/snake-client.git
   cd snake-client


