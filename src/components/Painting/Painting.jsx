import './Painting.css';

function Painting({ name, img, artist }) {
    return (
        <div className="Painting">
            <img src={img} alt={name} />
            <div>
                <h2>{name}</h2>
                <h3>{artist}</h3>
            </div>
        </div>
    )
}

export default Painting;