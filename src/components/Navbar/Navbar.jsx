import logo from '../../assets/shared/logo.svg';

function Navbar() {
    return (
        <div>
            <img src={logo} alt="logo" />
            <button>START SLIDESHOW</button>
        </div>
    )
}

export default Navbar;