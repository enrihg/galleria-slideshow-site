import logo from '../../assets/shared/logo.svg';

function Navbar() {
    return (
        <div>
            <h1><img src={logo} alt="logo" /></h1>
            <button>START SLIDESHOW</button>
        </div>
    )
}

export default Navbar;