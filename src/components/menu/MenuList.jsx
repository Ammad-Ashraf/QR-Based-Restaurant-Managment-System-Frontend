import React from 'react';
import MenuItem from './MenuItem';
import { filterItems } from '../../utils/menuUtils';
import useMenuStore from '../../store/menuStore';

function MenuList() 
{
  const { items, filters } = useMenuStore();
  const filteredItems = filterItems(items, filters.category, filters.searchQuery);

  if (!filteredItems.length) {
    return (
      <div className="text-center py-12">
        <p className="text-orange-500">No items found in this category</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map(item => (
        <MenuItem key={item._id} item={item} />
      ))}
    </div>
  );
}

export default MenuList;