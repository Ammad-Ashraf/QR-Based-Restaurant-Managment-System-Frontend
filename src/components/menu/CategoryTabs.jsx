import React from 'react';
import useMenuStore from '../../store/menuStore';

function CategoryTabs() {
  const { categories, filters, setFilter } = useMenuStore();

  return (
    <div className="w-full overflow-x-auto mb-8 pb-2">
      <div className="flex w-max gap-3 px-2 sm:gap-4 md:gap-6">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setFilter('category', category.id)}
            className={`whitespace-nowrap px-4 sm:px-5 md:px-6 py-2 rounded-full text-sm font-medium transition-colors shrink-0
              ${filters.category === category.id 
                ? 'bg-yellow-400 text-black' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryTabs;
