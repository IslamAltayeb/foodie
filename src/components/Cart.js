import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CiHeart } from 'react-icons/ci';

const Cart = () => {
  const { items, loading, error, removeItemFromCart } = useCart();
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  useEffect(() => {
    setIsCartEmpty(items.length === 0);
  }, [items]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading cart: {error.message}</p>;
  }

  const handleRemoveFromCart = (index) => {
    removeItemFromCart(index);
  };

  return (
    <div>
      <h2>Cart</h2>
      {isCartEmpty ? (
        <p>There are no items in your cart.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <Card className='m-2' style={{ width: '20rem' }} key={index}>
              <Card.Body>
                <Card.Img
                  variant='top'
                  className='recipeTile__img'
                  src={item.recipe.image}
                  alt=''
                />
                <Card.Title className='recipeTile__name'>{item.recipe.label}</Card.Title>
                <Button onClick={() => handleRemoveFromCart(index)}>Remove from Cart</Button>{' '}
                <CiHeart />
              </Card.Body>
            </Card>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
