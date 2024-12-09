import React from 'react';
import useMenuStore from '../../store/menuStore';

function CategoryTabs() {
  const { categories, filters, setFilter } = useMenuStore();
  
  return (
    <div className="flex overflow-x-auto gap-4 mb-8 pb-2 scrollbar-hide">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => setFilter('category', category.id)}
          className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-colors
            ${filters.category === category.id 
              ? 'bg-yellow-400 text-black' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;