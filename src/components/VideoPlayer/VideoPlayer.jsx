import React from 'react'
import './VideoPlayer.css';

const VideoPlayer = ({playerState, setPlayerState}) => {
  return (
    <div className={`video-player ${playerState ? '' : 'hide'}`}>
        <video src="image/videoplayer.mp4" autoPlay muted controls />
      
    </div>
  )
}

export default VideoPlayer
