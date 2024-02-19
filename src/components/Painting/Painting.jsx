import './Painting.css';
import { Link } from 'react-router-dom';

function Painting({ name, img, artist, id }) {
    return (
        <Link to={`/${id}`}>
            <div className="Painting">
                <img src={img} alt={name} />
                <div>
                    <h2>{name}</h2>
                    <h3>{artist}</h3>
                </div>
                <div className="filter"></div>
            </div>
        </Link>
    )
}

export default Painting;