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
    <div>
      <h2>Channel List</h2>
      <ul>
        {channels.map((channel) => (
          <li key={channel._id}>
            <h3>{channel.channelName}</h3>
            <ul>
              {channel.conversation.map((message) => (
                <li key={message._id}>
                  <p>{message.message}</p>
                  {message.user && (
                    <p>By: {message.user.displayName}</p>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelList;
