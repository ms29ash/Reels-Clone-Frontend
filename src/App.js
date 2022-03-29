import Videos from './Components/Videos'
import axios from './axios'
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [reels, setReels] = useState([])
  useEffect(() => {
    async function getReels() {
      const getReels = await axios.get('/get/reels');
      setReels(getReels.data);
      console.log(getReels.data)
    }
    getReels();
  }, [])


  return (
    <div className="App">
      <div className="videos">
        {
          reels.map((reel) => {
            console.log(reel);
            // return reel;
            return <Videos key={reel._id} url={reel.url} imgUrl={reel.imgUrl} channel={reel.channel} song={reel.song} description={reel.description} likes={reel.likes} comments={reel.comments} />
          })
        }
      </div>

    </div>
  );
}

export default App;
