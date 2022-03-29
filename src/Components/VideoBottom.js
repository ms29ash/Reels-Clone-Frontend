import React from 'react'
import '../Styles/VideoBottom.css'
import Ticker from 'react-ticker'


import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AlbumTwoToneIcon from '@mui/icons-material/AlbumTwoTone';

function VideoBottom() {
    return (
        <div className="videoBottom">
            <div className="id">
                <img className="img" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <p>Rahul Khanna</p>

            </div>
            <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>

            <div className="song">
                <MusicNoteIcon />


                <Ticker mode="smooth" className="ticker">
                    {({ index }) => (
                        <>
                            <p>This is the Headline of element </p>
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
