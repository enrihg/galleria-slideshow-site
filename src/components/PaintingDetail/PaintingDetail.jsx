import { useParams } from "react-router-dom";
import { useState } from "react";
import data from '../../data.js';
import './PaintingDetail.css';
import Footer from "../Footer/Footer.jsx";
import iconView from '../../assets/shared/icon-view-image.svg';

function PaintingDetail() {

    const [isVisible, setVisible] = useState(false);
    const params = useParams();
    const picture = data[params.id - 1];

    return (
        <div className="PaintingDetail">
            <div>
                <img src={picture.images.hero.small} alt={`Picture of ${picture.name}`}
                // srcset=""
                />
                <button className="button-viewImage" onClick={() => setVisible(!isVisible)}>
                    <img src={iconView} alt="view image icon" /> VIEW IMAGE</button>
                <div className="title-container">
                    <div className="title">
                        <h1>{picture.name}</h1>
                        <h2>{picture.artist.name}</h2>
                    </div>
                    <img className="img-artist" src={picture.artist.image} alt={`Picture of ${picture.artist.name}`} />
                </div>
                <h3>{picture.year}</h3>
                <p>{picture.description}</p>
                <a href={picture.source} target="_blank" >GO TO SOURCE</a>
            </div>
            
            <Footer data={data} picture={picture}/>

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