import React from 'react'
import '../Styles/VideoBottom.css'
import Ticker from 'react-ticker'


import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoBottom({ imgUrl, song, channel, description }) {
    return (
        <div className="videoBottom">
            <div className="id">
                <img className="img" src={imgUrl} alt="" />
                <p>{channel}</p>

            </div>
            <p className="description">
                {description}
            </p>

            <div className="song">
                <MusicNoteIcon />


                <Ticker mode="smooth" className="ticker">
                    {({ index }) => (
                        <>
                            <p>{song} </p>
                        </>
                    )}
                </Ticker>

                <img src="./disk.png" alt="" className="disk" />
                {/* <AlbumTwoToneIcon className="disk" sx={{ fontSize: 40 }} />
                 */}



            </div>


        </div >
    )
}

export default VideoBottom
