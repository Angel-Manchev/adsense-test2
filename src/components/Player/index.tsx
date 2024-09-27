"use client";
import React, { useRef, useEffect } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css"; // Import the Plyr styles

const Player = ({ item }) => {
  const playerRef = useRef(null);

  // Get Plyr instance once the component mounts
  useEffect(() => {
    const player = playerRef.current?.plyr;
    if (player) {
      console.log("Plyr instance ready");
    }
  }, []);

  const handlePlay = () => {
    const player = playerRef.current?.plyr;
    if (player) {
      player.play();
    }
  };

  const handlePause = () => {
    const player = playerRef.current?.plyr;
    if (player) {
      player.pause();
    }
  };

  return (
    <div
      className="plyrist plyrist_audio plyr-list-popup player bg-overlay b-t fixed-bottom plyrist-theme-2 px-2"
      id="plyrist"
    >
      <div className="plyr plyr--full-ui plyr--audio plyr--html5 plyr--paused">
        {/* Plyr controls */}
        <Plyr
        style={{height:'50px'}}
          ref={playerRef}
          // autoPlay={true}
          options={{
            controls: [
              "play",
              "progress",
              "current-time",
              "duration",
              "mute",
              "volume",
            ],
          }}
          source={{
            type: "audio",
            sources: [
              {
                src: item.source,
                provider: "html5",
              },
            ],
          }}
        />

        {/* Poster Image */}
        {/* <div className="d-flex"> */}
        <div
          className="plyr__poster"
          style={{
            top:'12px',
            left:'60px',
            position: "absolute",
            opacity: 1,
            width: "36px",
            height: "36px",
            flexShrink: 0,
            borderRadius: "3px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            backgroundColor: "rgba(120, 120, 120, 0.1)",
            backgroundImage: `url(${item.imageUrl})`,
          }}
        ></div>

        {/* Song Information */}
        <div className="plyr__col plyr__info position-absolute" style={{top:"10px",left:'90px'}}>
          <a className="plyr__title ajax" href="#">
            {item.title}
          </a>
          <div className="plyr__author">{item.artist}</div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Player;
