import { useParams } from "react-router-dom";
import { useState } from "react";
import data from '../../data.js';
import Footer from "../Footer/Footer.jsx";
import iconView from '../../assets/shared/icon-view-image.svg';
import './PaintingDetail.css';

function PaintingDetail() {

    const [isVisible, setVisible] = useState(false);
    const params = useParams();
    const picture = data[params.id - 1];

    return (
        <div className="PaintingDetail">
            <div>
                <div className="img-hero-container">
                    <img className="img-hero" srcSet={`${picture.images.hero.small} 575w, ${picture.images.hero.large} 576w`}
                        alt={`Picture of ${picture.name}`}
                    />
                    <button className="button-viewImage" onClick={() => setVisible(!isVisible)}>
                        <img src={iconView} alt="view image icon" /> VIEW IMAGE</button>
                </div>
                <div className="title-container">
                    <div className="title">
                        <h2>{picture.name}</h2>
                        <h3>{picture.artist.name}</h3>
                    </div>
                    <img className="img-artist" src={picture.artist.image} alt={`Picture of ${picture.artist.name}`} />
                </div>
                <div className="picture-year">{picture.year}</div>
                <p>{picture.description}</p>
                <a href={picture.source} target="_blank" >GO TO SOURCE</a>
            </div>

            <Footer data={data} picture={picture} />

            <div className={`modal ${!isVisible ? 'invisible' : null}`}>
                <div>
                    <button className="button-closeImage" onClick={() => setVisible(!isVisible)}>CLOSE</button>
                    <img src={picture.images.gallery} alt={`Picture of ${picture.name}`} />
                </div>
            </div>
        </div>
    )
}

export default PaintingDetail;