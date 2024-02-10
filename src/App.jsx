import './App.css'
import data from './data.js';
import Navbar from './components/Navbar/Navbar.jsx';
import Painting from './components/Painting/Painting.jsx';

function App() {

  return (
    <>
      <div className='grid-container'>
        <Navbar />
        <div className='painting-container'>
          {data.map(piece =>
            <Painting name={piece.name} artist={piece.artist.name} img={piece.images.thumbnail} />
          )}
        </div>
      </div>
    </>
  )
}

export default App
