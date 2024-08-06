import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRestaurants, deleteRestaurant } from '../services/restaurentService';
import '../styles/styles.css';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants()
      .then(response => setRestaurants(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (id) => {
    deleteRestaurant(id)
      .then(() => setRestaurants(restaurants.filter(restaurant => restaurant.id !== id)))
      .catch(error => console.error('Error deleting restaurant:', error));
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <Link to="/add">Add New Restaurant</Link>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            {restaurant.name} - {restaurant.description}
            <Link to={`/edit/${restaurant.id}`}>Edit</Link>
            <button onClick={() => handleDelete(restaurant.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
