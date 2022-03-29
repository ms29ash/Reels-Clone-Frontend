import React from 'react'
import '../Styles/VideoTopBar.css'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

function VideoTopBar() {
    return (
        <div className="VideoTopBar">
            <h1>REELS</h1>
            <CameraAltOutlinedIcon className="camera-icon" />


        </div>
    )
}

export default VideoTopBar
