import React, { useEffect, useState } from "react";
import Channels from "./Channels";
import { getAllServers } from "../api/messages";
const Servers = () => {
  const [servers, setServers] = useState([]);
  const [selectedServer, setSelectedServer] = useState(null);

  useEffect(() => {
    const servers = document.querySelectorAll(".server");

    servers.forEach((server) => {
      server.addEventListener("click", () => {
        const activeServer = document.querySelector(".server.active");
        if (activeServer) {
          activeServer.classList.remove("active");
          activeServer.removeAttribute("aria-selected");
        }

        server.classList.add("active");
        server.setAttribute("aria-selected", true);
      });
    });
  }, []);

  useEffect(() => {
    const fetchServers = async () => {
      const response = await getAllServers();
      setServers(response.data);
      console.log(response.data);
    };

    fetchServers();
  }, []);

  const handleServerClick = (server) => {
    setSelectedServer(server);
  };

  return (
    <>
      <div className="servers">
        <div className="servers-collection">
          <div
            className="server focusable server-friends unread"
            role="button"
            aria-label="Friends unread"
          >
            <div className="server-icon">
              <svg>
                <use xlinkHref="#icon-friends" />
              </svg>
            </div>
          </div>
        </div>
        <div className="servers-collection">
          {servers.map((server) => (
            <div
              key={server._id}
              className="server focusable"
              role="button"
              aria-label={server.serverName}
              onClick={() => handleServerClick(server)}
            >
              <div className="server-icon">
                <img src={server.serverImage} alt={server.serverName} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedServer && <Channels channels={selectedServer.channels} serverName={selectedServer.serverName} />}
    </>
  );
};

export default Servers;
