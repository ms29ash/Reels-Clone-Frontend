import React, { useRef, useState } from 'react'
import '../Styles/Video.css'
import VideoTopBar from './VideoTopBar'
import VideoSidebar from './VideoSidebar'
import VideoBottom from './VideoBottom'

function Videos() {
    const videoRef = useRef(null);
    const [playing, setPlay] = useState(false);


    const videoClickHandler = () => {
        if (playing) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }


    }
    return (
        <div className="video-container" onClick={videoClickHandler}>
            <VideoTopBar />

            <video className="video" ref={videoRef} src="https://media.chingari.io/apipublic/uploads/postMedia/cfbd2111-bf9e-48cb-af3a-8ec961c6423e-1605261650003.mp4"></video>
            <VideoSidebar />
            <VideoBottom />
        </div>
    )
}

export default Videos
