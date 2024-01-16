import { React,useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import top from '../assets/top.webp'
import fast from '../assets/fast-food.png'
import beef from '../assets/beef.jpg'

import Meals from './Meals';


function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <Carousel className='slider' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>

       <img src={top} alt="" />
         <Carousel.Caption className='bk' style={{'color' : '#000000', 'backgroundColor' : '#ffc41f'}}>

          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img src={fast} alt="" />

        <Carousel.Caption className='bk' style={{'color' : '#000000', 'backgroundColor' : '#ffc41f'}}>

          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img src={beef} alt="" />
        <Carousel.Caption className='bk' style={{'color' : '#000000', 'backgroundColor' : '#ffc41f'}}>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Meals />
    </>
  );
}

export default Slider;