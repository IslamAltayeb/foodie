import React from 'react';
import aboutImage from '../assets/about.jpg';

const About = () => {
  return (
    <div className='about d-flex'>
      <img src={aboutImage} alt="About Us" />

      <div className="about-text">
        <h2>Welcome to Foodie App</h2>
        <p>
          At Foodie App, we're passionate about delivering delicious meals right to your doorstep. Our journey began in 2024, and since then, we've been committed to providing a seamless and delightful dining experience for our customers.
        </p>

        <p>
          Our chefs craft each meal with love and precision, using the finest ingredients to ensure a burst of flavors in every bite. Whether you're a fan of comfort food or craving something exotic, Foodie App has a diverse menu to satisfy your taste buds.
        </p>

        <p>
          The Foodie App isn't just about meals; it's about creating moments of joy and convenience for you. Order with ease, explore our menu, and experience the culinary delights we have to offer. Your satisfaction is our top priority, and we're here to make your dining experience memorable.
        </p>

        <p>
          Discover the joy of good food with Foodie App. Place your order now and embark on a flavorful journey!
        </p>
      </div>
    </div>
  );
};

export default About;
