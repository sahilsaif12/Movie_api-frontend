import React from 'react'
import { useParams } from 'react-router-dom'
import  './Trailer.css';
import ReactPlayer from 'react-player';

export const Trailer = () => {
    let params=useParams();
    let key = params.ytTrailerId
  return (
    <div className='react-player-container' >
    {(key!=null)?<ReactPlayer url={`https://www.youtube.com/watch?v=${key}`}
        width='100%' playing={true} controls={true} height='100%'/>:null}

    </div>
  )
}
