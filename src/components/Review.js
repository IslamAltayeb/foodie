import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import third from '../assets/third.png';
import { FaStar } from 'react-icons/fa';

const Review = () => {
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0, 
  });

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedReviews = localStorage.getItem('userReviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStarClick = (selectedRating) => {
    setFormData({
      ...formData,
      rating: selectedRating,
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.review || formData.rating === 0) {
      setError('Please enter both name, review, and select a rating!');
      return;
    }

    const storedReviews = JSON.parse(localStorage.getItem('userReviews')) || [];
    const updatedReviews = [...storedReviews, formData];
    localStorage.setItem('userReviews', JSON.stringify(updatedReviews));
    setReviews(updatedReviews);

    setFormData({
      name: '',
      review: '',
      rating: 0,
    });
    setError('');
  };

  return (
    <div className='review'>
      <div className="review-container d-flex">
        <div className="logo">
          <img src={third} alt="" />
        </div>

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
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  style={{
                    color: star <= formData.rating ? '#ffc41f' : '#e4e5e9',
                    fontSize: '20pt',
                    marginTop: '5px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleStarClick(star)}
                />
              ))}
            </div>
          </Form.Group>
          <Button variant="warning" onClick={handleSubmit}>
            Submit
          </Button>{' '}
          {error && <h4 className="text-error mt-2">{error}</h4>}
        </Form>
      </div>

      {reviews.length > 0 && (
        <div className="review-list">
          <div className="mt-4 review-card">
          <h4>Reviews:</h4>
          {reviews.map((review, index) => (
            <div key={index}>
              <h6>Name: {review.name}</h6>
              <p>Review: {review.review}</p>
              <p>Rating: {review.rating} stars</p>
              <hr />
            </div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default Review;
