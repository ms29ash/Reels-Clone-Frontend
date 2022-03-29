import React from 'react'
import '../Styles/VideoTopBar.css'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

function VideoTopBar() {
    return (
        <div className="VideoTopBar">
            <h2>REELS</h2>
            <CameraAltOutlinedIcon className="camera-icon" />
        </div>
    )
}

export default VideoTopBar;
