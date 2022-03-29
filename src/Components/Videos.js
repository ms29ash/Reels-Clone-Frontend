import React, { useRef, useState } from 'react'
import { Waypoint } from 'react-waypoint';


import '../Styles/Video.css'
import VideoTopBar from './VideoTopBar'
import VideoSidebar from './VideoSidebar'
import VideoBottom from './VideoBottom'
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause';

function Videos({ url, imgUrl, channel, song, description, likes, comments }) {
    const videoRef = useRef(null);
    // const playRef = useRef(null);
    // const pauseRef = useRef(null);
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
    const videoScrollHandler = () => {
        if (playing) {
            videoRef.current.pause();

            setPlay(false);
        } else {
        }


    }
    return (
        <div className="video-container" >
            <VideoTopBar />
            {/* <div className="icon-play">

                <PlayArrowIcon className="play" fontSize="large" ref={playRef} />

            </div>
            <div className="icon-play">

                <PauseIcon className="pause" fontSize="large" ref={pauseRef} />

            </div> */}

            <Waypoint
                // onEnter={() => videoRef.current.play()}
                onLeave={() =>
                    console.log('pause')
                    // videoRef.current.pause();
                }
            >

                <video className="video" onClick={videoClickHandler} ref={videoRef} onScroll={videoScrollHandler} src={url}></video>
            </Waypoint>
            <VideoSidebar likes={likes} comments={comments} />
            <VideoBottom channel={channel} song={song} imgUrl={imgUrl} description={description} />
        </div >
    )
}

export default Videos
