import logo from '../../assets/shared/logo.svg';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import data from '../../data.js';

function Navbar() {

    const [id, setId] = useState(1); //asdfsdfsdsdfsf
    const ref = useRef(1);
    const navigate = useNavigate();

    let interval;

    const startSlideshow = () => {
        interval = setInterval(() => {
            ref.current === data.length ? stopSlideshow() : ref.current = ref.current + 1;
            console.log(ref.current);
            // setId(ref.current);
            navigate(`/${ref.current}`)
        },
            3000)
    }

    const stopSlideshow = () => {
        clearInterval(interval)
        ref.current = 1;
    }



    return (

        <nav className='Navbar'>
            <Link to='/'>
                <h1><img className='logo' src={logo} alt="logo" /></h1>
            </Link>

            <Link to={`/${ref.current}`}>
                <button onClick={startSlideshow}>START SLIDESHOW</button>
            </Link>

        </nav>
    )
}

export default Navbar;