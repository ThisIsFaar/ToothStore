import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Success from './pages/Success';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="success" element={<Success />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
