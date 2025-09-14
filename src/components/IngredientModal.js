import React from 'react';

const IngredientModal = ({ dish, onClose }) => {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Ingredient List</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            X
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Ingredients</h4>
                <p className="text-sm text-gray-600 mb-3">For 2 people</p>
                
                {dish.ingredients && dish.ingredients.length > 0 ? 
                  dish.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex justify-between items-center py-1 border-b border-gray-100">
                      <span className="text-gray-700">{ingredient.name}</span>
                      <span className="text-gray-600 text-sm">{ingredient.quantity}</span>
                    </div>
                  ))
                  :
                  <div className="text-gray-500">No ingredients data available</div>
                }
              </div>
            </div>
            
            {/* Dish Image */}
            <div className="modal-dish-image ml-4 flex-shrink-0">
              {dish.image ? (
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="modal-image-img"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className="modal-image-placeholder" style={{ display: dish.image ? 'none' : 'flex' }}>
                <span className="text-gray-400 text-xs">No Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientModal;