import React from 'react'
import { Button } from './Button'
import './mainsec.css'
import '../App.css'

function mainsec() {
    return (
        <div className='main-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Start Your Business Now</h1>
            <div className="main-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Let's Go</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Take a Tour <i className='far fa-play-circle'/></Button>
                
            </div>
        </div>
    )
}

export default mainsec;
