import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Gallery from './components/Gallery/Gallery.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import PaintingDetail from './components/PaintingDetail/PaintingDetail.jsx';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      {/* <Link to='/holis'>Holis</Link> */}
      <Routes>
        <Route path='/' element={<Gallery />} />
        <Route path='/:id' element={<PaintingDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
