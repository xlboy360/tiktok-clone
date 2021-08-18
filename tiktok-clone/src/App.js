import "./App.css";
import Video from "./Video";
import React, { useEffect, useState } from "react";

import Axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await Axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }

    fetchPosts();
  }, []);

  console.log(videos);

  return (
    <div className="app">
      {/* App container */}
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, shares, messages }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
