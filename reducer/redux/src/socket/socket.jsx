// import { useEffect } from "react";
// import { io } from "socket.io-client";

// // socket ko component ke bahar rakho (best practice)
// const socket = io("http://localhost:3000");

// function SocketComponent() {

//   useEffect(() => {
//     // receive message
//     socket.on("msg", (data) => {
//       console.log("Received:", data);
//     });

//     // cleanup (important)
//     return () => {
//       socket.off("msg");
//     };
//   }, []);

//   const sendMessage = () => {
//     socket.emit("msg", "Hello from React 🚀");
//   };

//   return (
//     <div>
//       <h2>Socket Test</h2>
//       <button onClick={sendMessage}>Send Message</button>
//     </div>
//   );
// }

// export default SocketComponent;



import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function SocketComponent() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", message);
      setMessage("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>💬 Chat App</h2>

      <div style={{ marginBottom: 10 }}>
        {chat.map((msg, i) => (
          <p key={i}>👉 {msg}</p>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message..."
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default SocketComponent;