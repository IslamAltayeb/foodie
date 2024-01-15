import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import third from '../assets/third.png';
import { FaStar } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const Review = () => {
  const [formData, setFormData] = useState({
    name: '',
    review: '',
  });

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedReview = localStorage.getItem('userReview');
    if (storedReview) {
      setReviews([JSON.parse(storedReview)]);
    }
  }, []); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.review) {
      setError('Please enter both name and review!');
      return;
    }

    localStorage.setItem('userReview', JSON.stringify(formData));

    setReviews([...reviews, formData]);

    setFormData({
      name: '',
      review: '',
    });
    setError('');
  };

  return (
    <div className='review'>
      <div className="review-container d-flex">
      <Fade left>
        <div className="logo">
          <img src={third} alt="" />
        </div>
        </Fade>
        
        <Form className='form'>
          <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="write your review!"
              name="review"
              value={formData.review}
              onChange={handleChange}
            />
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </Form.Group>
          <Button variant="warning" onClick={handleSubmit}>
            Submit
          </Button>{' '}
          {error && <h4 className="text-error mt-2">{error}</h4>}
        </Form>        
      </div>    

      {reviews.length > 0 && (
        <div className="mt-4 review-card">
          <h4>Reviews:</h4>
          {reviews.map((review, index) => (
            <div key={index}>
              <h4>Name: {review.name}</h4>
              <p>Review: {review.review}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
