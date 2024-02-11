import logo from '../../assets/shared/logo.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Link to='/'>
            <nav className='Navbar'>
                <h1><img className='logo' src={logo} alt="logo" /></h1>
                <button>START SLIDESHOW</button>
            </nav>
        </Link>
    )
}

export default Navbar;