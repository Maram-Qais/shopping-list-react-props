import React from 'react';

function ShoppingListItem({ item, quantity, completed }) {
  const styles = {
    color: completed ? 'gray' : 'red',
    textDecoration: completed ? 'line-through' : 'none',
  };

  return (
    <li style={styles} className="shopping-list-item">
      {item} - {quantity}
    </li>
  );
}

export default ShoppingListItem;
