import React, { useState } from 'react';
import './App.css';
import { dishes } from './data/mockDishes';
import Filters from './components/Filters';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';

const App = () => {
  // State variables
  const [selectedCategory, setSelectedCategory] = useState('STARTER');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  // Filtering logic
  const filteredDishes = dishes.filter(dish => {
    const matchesCategory = dish.mealType === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVegFilter = !vegOnly || dish.type === 'VEG';
    
    return matchesCategory && matchesSearch && matchesVegFilter;
  });

  // Handler functions
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleVegOnlyChange = (vegOnlyValue) => {
    setVegOnly(vegOnlyValue);
  };

  const handleAddDish = (dishId) => {
    setSelectedDishes([...selectedDishes, dishId]);
  };

  const handleRemoveDish = (dishId) => {
    setSelectedDishes(selectedDishes.filter(id => id !== dishId));
  };

  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentDish(null);
  };

  return (
    <div className="app-container body max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Filters Component */}
      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        vegOnly={vegOnly}
        onVegOnlyChange={handleVegOnlyChange}
        selectedDishes={selectedDishes}
        dishes={dishes}
      />

      {/* DishList Component */}
      <DishList
        dishes={filteredDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        selectedDishes={selectedDishes}
        onViewIngredients={handleViewIngredients}
      />

      {/* Bottom Summary */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-3">
            <span className="text-gray-600">Total Dish Selected: </span>
            <span className="font-semibold">{selectedDishes.length}</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg font-medium">
            Continue
          </button>
        </div>
      </div>

      {/* Ingredient Modal */}
      {isModalOpen && (
        <IngredientModal
          dish={currentDish}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;