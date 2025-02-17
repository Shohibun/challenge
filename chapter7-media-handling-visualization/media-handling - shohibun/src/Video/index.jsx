import React, { useState } from "react";
import { MemoizedVideoPlayer } from "./VideoPlayer";
import styles from "./styles/Home.module.css";
import VideoOverlay from "./VideoOverlay";

const Video = () => {
  const [startTime, setStartTime] = useState(1633538276355);
  const [controls, setControls] = useState(true);
  const [ended, setEnded] = useState(false);
  const [duration, setDuration] = useState(null);
  const [playing, setPlaying] = useState(true);

  let date = new Date();
  let currentTime = date.getTime();
  let timePlayed = (currentTime - startTime) % 1000;

  const endVideo = () => {
    if (controls === false && ended === true) {
      if (playing === false) {
        return;
      } else {
        setPlaying(false);
      }
    } else {
      setControls(false);
      setEnded(true);
      setPlaying(false);
    }
  };

  const restartLive = () => {
    let newDate = new Date();
    let newStartTime = newDate.getTime();
    setStartTime(newStartTime);
    setEnded(false);
    setPlaying(true);
    setControls(true);
  };

  const videoDuration = (num) => {
    setDuration(num);
  };

  if (timePlayed > duration) {
    endVideo();
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="live-event-container">
          <MemoizedVideoPlayer
            ended={ended}
            timePlayed={timePlayed}
            controls={controls}
            endVideo={endVideo}
            playing={playing}
            videoDuration={videoDuration}
          /> 
          {ended ? <VideoOverlay/> : null}
        </div>

        <button className="reset-button" onClick={restartLive}>
          Restart Live Simulation
        </button>
      </main>
    </div>
  );
};

export default Video;
