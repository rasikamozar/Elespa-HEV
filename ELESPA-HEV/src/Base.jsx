import './Base.css'
import ReactPlayer from 'react-player'
import video from './Database/demo.mp4'

export default function Base(){
    return(
          <div >
              <div className="Box">
                      <ReactPlayer url={video} controls={true}  width={1530} height={700} playing={true}/>
              </div>
          </div>
    );
}