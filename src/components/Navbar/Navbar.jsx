import logo from '../../assets/shared/logo.svg';
import './Navbar.css';

function Navbar() {
    return (
        <nav className='Navbar'>
            <h1><img className='logo' src={logo} alt="logo" /></h1>
            <button>START SLIDESHOW</button>
        </nav>
    )
}

export default Navbar;