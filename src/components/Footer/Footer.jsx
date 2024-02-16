import { Link } from 'react-router-dom';
import './Footer.css'
import backButton from '../../assets/shared/icon-back-button.svg';
import nextButton from '../../assets/shared/icon-next-button.svg';


function Footer({ data, picture }) {

    const isFirstElement = picture.id === 1;
    const isLastElement = picture.id === data.length;

    return (
        <footer className='footer'>
            <progress max={data.length} value={picture.id}></progress>
            <div className='flex'>
                <div>
                    <h4>{picture.name}</h4>
                    <h5>{picture.artist.name}</h5>
                </div>
                <div>
                    <Link to={`/${!isFirstElement ? picture.id - 1 : picture.id}`}>                       
                        <button disabled={isFirstElement}><img src={backButton} alt="back button icon" /></button>
                    </Link>
                    <Link to={`/${!isLastElement ? picture.id + 1 : picture.id}`}>
                        <button disabled={isLastElement}><img src={nextButton} alt="next button icon" /></button>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;