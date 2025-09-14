import React from 'react';

const DishCard = ({ dish, onAddDish, onRemoveDish, isSelected, onViewIngredients }) => {
  return (
    <div className="bg-white dish-card rounded-lg shadow-sm p-4">
      <div className="flex items-start space-x-4">
        {/* Dish Image */}
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-gray-400 text-xs">No Image</span>
        </div>

        {/* Dish Details */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-800">{dish.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{dish.description}</p>
              <div className="flex items-center mt-2 space-x-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  dish.type === 'VEG' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {dish.type}
                </span>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-3">
            <button
              onClick={() => onViewIngredients(dish)}
              className="text-orange-500 text-sm font-medium"
            >
              🥄 Ingredient
            </button>
            
            <button
              onClick={() => isSelected ? onRemoveDish(dish.id) : onAddDish(dish.id)}
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                isSelected
                  ? 'bg-red-500 text-white'
                  : 'bg-green-500 text-white'
              }`}
            >
              {isSelected ? (
                <>
                  <span className="inline-block mr-1">−</span>
                  Remove
                </>
              ) : (
                <>
                  <span className="inline-block mr-1">+</span>
                  Add +
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;