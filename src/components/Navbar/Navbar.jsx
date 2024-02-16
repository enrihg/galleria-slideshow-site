import logo from '../../assets/shared/logo.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav className='Navbar'>
            <Link to='/'>
                <h1><img className='logo' src={logo} alt="logo" /></h1>
            </Link>
        </nav>
    )
}

export default Navbar;