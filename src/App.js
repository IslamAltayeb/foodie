import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Meals from './components/Meals';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Meals />
      <Footer />
    </div>
  );
}

export default App;
