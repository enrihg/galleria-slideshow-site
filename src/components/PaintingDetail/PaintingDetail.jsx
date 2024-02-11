import { useParams } from "react-router-dom";
import data from '../../data.js';
import './PaintingDetail.css';
import iconView from '../../assets/shared/icon-view-image.svg';

function PaintingDetail() {
    const params = useParams();
    const picture = data[params.id - 1];

    return (
        <div className="PaintingDetail">
            <img src={picture.images.hero.small} alt={`Picture of ${picture.name}`} srcset="" />
            <button><img src={iconView} alt="view image icon"/> VIEW IMAGE</button>
            <div className="title">
                <h1>{picture.name}</h1>
                <h2>{picture.artist.name}</h2>
            </div>
            <img className="img-artist" src={picture.artist.image} alt={`Picture of ${picture.artist.name}`} />
            <h3>{picture.year}</h3>
            <p>{picture.description}</p>
            <a href={picture.source} target="_blank" >GO TO SOURCE</a>
        </div>
    )
}

export default PaintingDetail;