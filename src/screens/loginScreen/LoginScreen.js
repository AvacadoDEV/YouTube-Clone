import React from 'react'
import './loginScreen.scss'

const LoginScreen = () => {
  return (
    <div className="login">
        <div className="login__container">
            <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
            <button>
                Login with Google
            </button>
            <p>Using YouTube API data to render data real time</p>
        </div>
    </div>
  )
}

export default LoginScreen