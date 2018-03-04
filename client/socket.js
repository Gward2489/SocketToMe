const connectSocket = document.getElementById("socketOn")
const message = document.getElementById("socketMessage")
const sendButton = document.getElementById("sendMessage")
const resultsDiv = document.getElementById("socketResults")
const closeSocket = document.getElementById("closeSocket")
let connectionUrl = "localhost:5000"
let socket;

var scheme = document.location.protocol == "https:" ? "wss" : "ws"

var port = document.location.port ? (":" + document.location.port) : ""

connectionUrl = scheme + "://" + "localhost:5000" + "/ws"

closeSocket.onclick = function () {
    if (!socket || socket.readyState !=  WebSocket.OPEN) {
        alert("socket not connected")
    }
    socket.close(1000, "Closing from client")
}

sendButton.onclick = function () {
    if (!socket || socket.readyState != WebSocket.OPEN) {
        alert("socket not connected")
    }
    let messageData = message.value
    socket.send(messageData)
    console.log("message sent")
}

connectSocket.onclick = function () {
    socket = new WebSocket(connectionUrl)
    socket.onopen = function (event) {
        console.log("socket opened")
    }
    socket.onclose = function (event) {
        console.log("socket closed")
    }
    socket.onmessage = function (event) {
        resultsDiv.innerHTML += `
        <h4>${event.data}</h4>
        `
        message.value = ""
        console.log(event)
    }
}