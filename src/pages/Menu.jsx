import React, { useEffect } from 'react';
import useMenuStore from '../store/menuStore';
import CategoryTabs from '../components/menu/CategoryTabs';
import SearchBar from '../components/menu/SearchBar';
import MenuList from '../components/menu/MenuList';
import LoadingSpinner from '../components/common/LoadingSpinner';

function Menu() {
  const { loading, error, fetchMenuItems } = useMenuStore();

  useEffect(() => {
    fetchMenuItems();
  }, [fetchMenuItems]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center text-red-600">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
      <SearchBar />
      <CategoryTabs />
      <MenuList />
    </div>
  );
}

export default Menu;