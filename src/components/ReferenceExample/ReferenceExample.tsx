import { useRef } from "react";
import videos from "../../video_records.json";
import ReactPlayer from "react-player/youtube";
import "./exampleStyle.css";

const ReferenceExample = () => {
  const videoRefs = useRef<any>([]);
  const handleOnPlay = (index: number) => {
    if (!document.fullscreenElement) {
      // If not in fullscreen, request fullscreen on the player container
      if (videoRefs.current[index]) {
        videoRefs.current[index].wrapper.requestFullscreen?.();
      }
    } else {
      // Exit fullscreen if already in fullscreen mode
      document.exitFullscreen?.();
    }
  };
  return (
    <div className="player-wrapper">
      {videos.map((item, index) => {
        return (
          <div key={index} className="playerCard">
            <ReactPlayer
              url={item.URL}
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              onStart={() => handleOnPlay(index)}
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ReferenceExample;
