// import React from 'react';
// import useMenuStore from '../../store/menuStore';

// function MenuFilters()
// {
//   const { categories, filters, setFilter } = useMenuStore();

//   return (
//     <div className="flex flex-col md:flex-row gap-4 mb-6">
//       <select
//         value={filters.category || ''}
//         onChange={(e) => setFilter('category', e.target.value || null)}
//         className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//       >
//         <option value="">All Categories</option>
//         {categories.map(category => (
//           <option key={category.id} value={category.id}>
//             {category.name}
//           </option>
//         ))}
//       </select>

//       <input
//         type="text"
//         placeholder="Search menu items..."
//         value={filters.searchQuery}
//         onChange={(e) => setFilter('searchQuery', e.target.value)}
//         className="p-2 border rounded-lg flex-grow max-w-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//       />
//     </div>
//   );
// }

// export default MenuFilters;