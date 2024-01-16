import React, { useState } from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from './CartContext';

const Meals = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  const MY_APP_ID = '1282ad62';
  const MY_APP_KEY = '77115bfdd999df858e240c31764f92e8';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${MY_APP_ID}&app_key=${MY_APP_KEY}`;

  const getRecipeInfo = async () => {
    setLoading(true);
    try {
      const result = await Axios.get(url);
      setRecipes(result.data.hits);
      setError(null);
    } catch (err) {
      console.log('Error fetching data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await getRecipeInfo();
    setQuery('');
  };

  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (recipe) => {
    addToCart(recipe);
    setAddedToCart((prev) => ({ ...prev, [recipe.recipe.label]: true }));
  };

  return (
    <div className='meal'>
      <h1 onClick={getRecipeInfo}>Search For a Meal! 🍔</h1>
      <Form className="d-flex form" onSubmit={onSubmit}>
        <Form.Control
          className="app__input"
          type="text"
          placeholder="Search for a meal"
          autoComplete="Off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline-success" type="submit" value="Search">
          Search
        </Button>
      </Form>

      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="app__recipes">
          {recipes.length > 0 &&
            recipes.map((recipe) => {
              if (recipe.recipe) {
                const isAdded = addedToCart[recipe.recipe.label];

                return (
                  <Card className='m-2' style={{ width: '20rem' }} key={uuidv4()}>
                    <Card.Body card>
                      <Card.Img
                        variant="top"
                        className="recipeTile__img"
                        src={recipe.recipe.image}
                        alt=""
                      />
                      <Card.Title className="recipeTile__name">{recipe.recipe.label}</Card.Title>
                      <Button
                        onClick={() => handleAddToCart(recipe)}
                        disabled={isAdded}
                      >
                        {isAdded ? 'Added' : 'Add To Cart'}
                      </Button>
                      <strong>yield: {recipe.recipe.yield}</strong>
                    </Card.Body>
                  </Card>
                );
              }
              return null;
            })}
        </div>
      )}
    </div>
  );
};

export default Meals;
