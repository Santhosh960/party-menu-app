import React from 'react';

const Filters = ({ 
  activeCategory, 
  onCategoryChange, 
  searchTerm, 
  onSearchChange, 
  vegOnly, 
  onVegOnlyChange,
  selectedDishes,
  dishes 
}) => {
  const categories = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'];
  
  // Count selected dishes by category
  const getSelectedCountByCategory = (category) => {
    return dishes.filter(dish => 
      dish.mealType === category && selectedDishes.includes(dish.id)
    ).length;
  };

  return (
    <div className="bg-white p-4 pb-4 ">
      {/* Search Bar */}
      <div className="relative mb-4 ">
        <input
          type="text"
          placeholder="Search dish for your party....."
          className="w-full pl-5 pr-4 py-3 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
         <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </div>

      {/* Category Tabs */}
      <div className="flex space-x-2 mb-4  overflow-x-auto pb-2">
        {categories.map((category) => {
          const count = getSelectedCountByCategory(category);
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`flex-shrink-0 px-4 py-2 text-lg font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category} {count > 0 && <span className="ml-1 text-xs">{count}</span>}
            </button>
          );
        })}
      </div>

      {/* Selected Summary */}
      <div className="flex justify-between items-center">
        <div className="text-sm font-medium text-gray-800">
          {activeCategory} Selected ({getSelectedCountByCategory(activeCategory)})
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};


export default Filters;