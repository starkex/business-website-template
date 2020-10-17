import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click,setclick]=useState(false);

    const handleClick=()=> setclick(!click);
    const closeMobileMenu = () => setclick(false);
    const [button,setButton]=useState(true);
    const showButton= ()=> {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };   



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
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                            SignUp
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle = 'btn--outline'> SIGN UP</Button>}
            </div>

        </nav>
          
        </>
    )
}

export default Navbar
