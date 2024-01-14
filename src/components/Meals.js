import React, { useState } from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Meals = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const YOUR_APP_ID = '1282ad62';
  const YOUR_APP_KEY = '77115bfdd999df858e240c31764f92e8';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async () => {
    setLoading(true); // Set loading to true when starting the request
    try {
      const result = await Axios.get(url);
      setRecipes(result.data.hits);
      console.log(result.data.hits);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false when the request is completed (success or error)
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
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
        <Button variant="outline-success" type="submit" value="Search" >Search</Button>
      </Form>

      {loading && <p>Loading...</p>}

      <div className="app__recipes">
        {recipes.length > 0 &&
          recipes.map((recipe) => {
            if (recipe.recipe) {
              return (
                <Card className='d-flex' style={{ width: '18rem' }}
                  key={uuidv4()}
                >
                    <Card.Body>
                  <Card.Img variant="top"
                    className="recipeTile__img"
                    src={recipe.recipe.image}
                    alt=""
                  />
                  <Card.Title className="recipeTile__name"> {recipe.recipe.label}</Card.Title>
                  <Button variant="primary">See Details</Button>
                  </Card.Body>
                </Card>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default Meals;
