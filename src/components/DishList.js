import React from 'react';
import DishCard from './DishCard';

const DishList = ({ dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients }) => {
  return (
    <div className="p-4 dish-list space-y-4">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          isSelected={selectedDishes.includes(dish.id)}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
};


export default DishList;