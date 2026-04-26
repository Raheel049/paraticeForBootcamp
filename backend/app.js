import express from "express"
import http  from "http"
import { Server } from "socket.io"
import cors from "cors"

const app = express()
app.use(cors())

const server = http.createServer(app)


// socket server with CORS FIX
const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173", // React Vite
      methods: ["GET", "POST"]
    }
  });

io.on("connection", (socket) => {
    console.log("user connected");

    // socket.on("msg", (data) => {
    //     console.log(data)
    //     io.emit("msg",data)

    // })

    socket.on("send_message", (data) => {
        console.log("msg:", data);
    
        // send to all users
        io.emit("receive_message", data);
      });

    socket.on("disconnect", () => {
        console.log("user disconnected");
      });


      
})

server.listen(3000, () => {
    console.log("Server running on 3000");
  });

// app.get("/test-server",(req,res) => {
//     res.send("Api hits success ");
// })

// app.listen(3000,() => console.log("server running"));