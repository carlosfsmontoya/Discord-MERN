import React, { useState, useEffect } from "react";
import { getAllChannels } from "../api/messages.js";

const ChannelList = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await getAllChannels();
        setChannels(response.data);
      } catch (error) {
        console.error("Error fetching channels:", error);
      }
    };

    fetchChannels();
  }, []);

  return (
    <div className="container">
      <div className="sidebar">
        <div className="server-list">
          <div className="server">Servidor 1</div>
          <div className="server">Servidor 2</div>
        </div>
      </div>
      <div className="channel-list">
        <div className="channel">Canal 1</div>
        <div className="channel">Canal 2</div>
      </div>
      <div className="chat">
        <div className="messages">
          {channels.map((channel) => (
            <li key={channel._id}>
              <h3>{channel.channelName}</h3>
              <ul>
                {channel.conversation.map((message) => (
                  <li key={message._id}>
                    <p>{message.message}</p>
                    {message.user && <p>By: {message.user.displayName}</p>}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </div>
        <div className="input-area">
          <input type="text" placeholder="Escribe un mensaje..." />
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default ChannelList;
