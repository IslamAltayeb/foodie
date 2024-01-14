import { React,useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import first from '../assets/first.jpg'
import second from '../assets/second.webp'
import third from '../assets/third.png'

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='slider' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <img src={first} alt="" />
        <Carousel.Caption style={{'color' : '#000000'}}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={second} alt="" />
        <Carousel.Caption style={{'color' : '#000000'}}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={third} alt="" />
        <Carousel.Caption style={{'color' : '#000000'}}>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;