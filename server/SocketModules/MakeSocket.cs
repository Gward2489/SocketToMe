using System;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace server.SocketModules
{
    public class MakeSocket
    {
        public async void makeSocketAsync(HttpContext context) 
        {
            WebSocket webSocket = await context.WebSockets.AcceptWebSocketAsync();
        }
    }
}