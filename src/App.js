import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Cart from './components/Cart';
import About from './components/About';
import { CartProvider } from './components/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />          
          <Routes>
            <Route path="/" element={<Slider />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
