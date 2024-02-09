import './App.css'
import data from './data.js';
import Navbar from './components/Navbar/Navbar.jsx';
import Painting from './components/Painting/Painting.jsx';

function App() {

  return (
    <>
      <Navbar/>

      {data.map(piece =>
        <Painting name={piece.name} artist={piece.artist.name} img={piece.images.thumbnail} />
      )}
    </>
  )
}

export default App
