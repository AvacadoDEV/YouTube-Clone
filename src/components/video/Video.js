import React from 'react'
import "./_video.scss"

import {AiFillEye} from 'react-icons/ai'

const Video = () => {
  return (
    <div className="video">
       <div className="video__top">
<img src="https://i.ytimg.com/vi/mqqft2x_Aa4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDryTZc6OSNbfDidMRTOnNplwcIKA" alt=""/>
<span>02.45</span>
        </div>
        <div className="video__title">
        Enter the name which is longer in order to get...
        </div>
        
        <div className="video__details">
          <span>
<AiFillEye/> 5m Views •
          </span>
          <span>1 days ago</span>
        </div>
        <div className="video__Channel">
          <img src="https://yt3.ggpht.com/ytc/AKedOLTUnZtaiWtHHHFxqilQey0x3Psd8rRtiIDxyYgHCg=s68-c-k-c0x00ffffff-no-rj" alt="" />
          <p>Channel name can be shit</p>
        </div>
    </div>
  )
}

export default Video