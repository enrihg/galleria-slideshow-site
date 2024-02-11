import data from '../../data.js';
import Painting from '../Painting/Painting.jsx';
import './Gallery.css';

function Gallery() {
    return (
        <div className='Gallery'>
            <div className='painting-container'>
                {data.map(piece =>
                    <Painting key={piece.id} id={piece.id} name={piece.name} artist={piece.artist.name} img={piece.images.thumbnail} />
                )}
            </div>
        </div>
    )
}

export default Gallery;