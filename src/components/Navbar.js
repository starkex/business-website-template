import React,{useState} from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    const [click,setclick]=useState(false);

    const handleClick=()=> setclick(!click);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    TRVL <i className='fab fa-typo3'></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>

        </nav>
          
        </>
    )
}

export default Navbar
