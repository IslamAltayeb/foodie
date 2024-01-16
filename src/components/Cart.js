import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cart = () => {
  const { items, loading, error, removeItemFromCart } = useCart();
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  const handleClick = () => {
    const phoneNumber = '310687662118'; 
    const message = 'Hello islam!, i want to buy this item'; 
    window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
  };

  useEffect(() => {
    setIsCartEmpty(items.length === 0);
  }, [items]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading cart: {'Oops, something went wrong!'}</p>;
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
        <ul className='d-flex'>
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
              </Card.Body>
            </Card>            
          ))}

            <div className="whats-app contact-col">
              <h3>purchase your items</h3>
              <button title='message me' onClick={handleClick}>Send a message</button>              
            </div>           
        </ul>
      )}

            
    </div>
  );
};

export default Cart;
