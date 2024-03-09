import React from 'react';
import './App.css'; 

import ShoppingListItem from './ShoppingListItem';

function ShoppingList({ items }) {
  return (
    <ul className="shopping-list"> 
      {items.map((i) => (
        <ShoppingListItem
          key={i.id}
          {...i}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;
