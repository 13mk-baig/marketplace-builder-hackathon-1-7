// components/ProductFilter.js
export default function ProductFilter() {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 mb-6">
      <select className="bg-white border rounded-md p-2">
        <option>Sort by Price: Low to High</option>
        <option>Sort by Price: High to Low</option>
        <option>Sort by Name</option>
      </select>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Apply Filters</button>
    </div>
  )
}
