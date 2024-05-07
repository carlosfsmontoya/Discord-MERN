import React, { useEffect } from 'react';
import Chats from './Chats';
const Channels = ({ channels, serverName }) => {
    useEffect(() => {
        const channels = document.querySelectorAll(".channel-text");

        channels.forEach((channel) => {
            channel.addEventListener("click", () => {
                const activeChannel = document.querySelector(".channel-text.active");
                if (activeChannel) {
                    activeChannel.classList.remove("active");
                }

                channel.classList.add("active");
            });
        });
    }, []);

    return (
        <>
        <div className="channels">
        <div className="channels-header focusable">
          <h3 role="header" className="channels-header-name">
         {serverName}
          </h3>

        </div>
        <div className="channels-list">
          <div className="channels-list-header focusable">
            <h5>Text Channels</h5>
          </div>
          <ul className="channels-list-text">
          {channels.map((channel) => (
              <li key={channel._id} className="channel focusable channel-text">
                <span className="channel-name">{channel.channelName}</span>
              </li>
            ))}
          </ul>
      
        </div>
        <div className="channels-footer">
          <img
            className="avatar"
            alt="Avatar"
            src="https://i.pinimg.com/originals/f5/c7/95/f5c795f66ddbe89bf31af720546a1a86.jpg"
          />
          <div className="channels-footer-details">
            <span className="username">Saturnette</span>
          </div>
          <div className="channels-footer-controls button-group">
            <button
              role="button"
              aria-label="Mute"
              className="button button-mute"
            >
          
            </button>
            <button
              role="button"
              aria-label="Deafen"
              className="button button-deafen"
            >
           
            </button>
            <button
              role="button"
              aria-label="Settings"
              className="button button-settings"
            >
     
            </button>
          </div>
        </div>
      </div>
      <Chats />
      </>
    );
};

export default Channels;