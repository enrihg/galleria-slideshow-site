import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import PaintingDetail from './components/PaintingDetail/PaintingDetail.jsx';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Gallery />} />
        <Route path='/:id' element={<PaintingDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
