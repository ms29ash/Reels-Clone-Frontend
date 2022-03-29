import React from 'react'
import '../Styles/Video.css'
import VideoTopBar from './VideoTopBar'
import VideoSidebar from './VideoSidebar'
import VideoBottom from './VideoBottom'

function Videos() {
    return (
        <div className="video-container">
            <VideoTopBar />

            <video className="video" src="https://media.chingari.io/apipublic/uploads/postMedia/cfbd2111-bf9e-48cb-af3a-8ec961c6423e-1605261650003.mp4"></video>
            <VideoSidebar />
            <VideoBottom />
        </div>
    )
}

export default Videos
