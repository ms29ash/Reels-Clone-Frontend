import React, { useState } from 'react'

import '../Styles/VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { pink } from '@mui/material/colors';

function VideoSidebar({ likes, comments }) {
    const [liked, setLike] = useState(false);
    return (
        <div className="sideBar">
            <div className="like" onClick={() => {
                if (liked) {
                    setLike(false)
                } else {
                    setLike(true)
                }
            }}>
                {
                    liked ? (
                        <FavoriteIcon fontSize="medium" sx={{ color: pink[500] }} />) : (<FavoriteBorderIcon fontSize="medium" />)

                }


                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="comment">

                <ModeCommentOutlinedIcon fontSize="medium" />
                <p>{comments}</p>
            </div>
            <SendOutlinedIcon className="share" fontSize="medium" />

        </div>
    )
}

export default VideoSidebar
