import React, { use, useRef } from 'react'
import './VideoPlayer.css';

const VideoPlayer = ({playerState, setPlayerState}) => {

  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current){
      setPlayerState(false);
    }
    
    
  }



  return (
    <div className={`video-player ${playerState ? '' : 'hide'}`} ref={player} onClick={closePlayer} >
        <video src="image/videoplayer.mp4" autoPlay muted controls />
      
    </div>
  )
}

export default VideoPlayer
