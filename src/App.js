import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/styles.css';
import RestaurantList from './components/RestaurentList';
import AddRestaurant from './components/AddRestaurent';
import EditRestaurant from './components/EditRestaurant';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<RestaurantList />} />
      <Route path="/add" element={<AddRestaurant />} />
      <Route path="/edit/:id" element={<EditRestaurant />} />
    </Routes>
  </div>
);

export default App;
