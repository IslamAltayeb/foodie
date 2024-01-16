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

          <h3>Welcome to Foodie App</h3>
          <p>Search for your favorite meals</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img src={fast} alt="" />

        <Carousel.Caption className='bk' style={{'color' : '#000000', 'backgroundColor' : '#ffc41f'}}>

          <h3>Add your meal to the cart</h3>
          <p>Buy you meal easy by sending message on whatsapp!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img src={beef} alt="" />
        <Carousel.Caption className='bk' style={{'color' : '#000000', 'backgroundColor' : '#ffc41f'}}>
          <h3>Add your review!</h3>
          <p>We glad to get your feedback about the app.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Meals />
    </>
  );
}

export default Slider;