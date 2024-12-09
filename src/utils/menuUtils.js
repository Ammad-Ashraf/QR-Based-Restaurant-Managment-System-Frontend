export const extractCategories = (items) => {
  const uniqueCategories = [...new Set(items.map(item => item.category))];
  return uniqueCategories.map(category => ({
    id: category,
    name: category
  }));
};

export const filterItems = (items, category, searchQuery) => {
  return items.filter(item => {
    const matchesCategory = !category || item.category === category;
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
};