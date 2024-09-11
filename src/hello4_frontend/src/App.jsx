import React from 'react';
import './App.css';

function App() {
  const groceryItems = [
    'Apples',
    'Bananas',
    'Bread',
    'Milk',
    'Eggs',
    'Chicken',
    'Carrots',
    'Potatoes',
    'Tomatoes',
    'Spinach',
  ];

  return (
    <div className="app-container">
      <h1>Grocery List</h1>
      <ul className="grocery-list">
        {groceryItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
