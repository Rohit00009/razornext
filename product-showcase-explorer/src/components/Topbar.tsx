import { Search } from "lucide-react";

interface Props {
  searchTerm: string;
  onSearch: (value: string) => void;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  sortOption: string;
  onSortChange: (value: string) => void;
  cartCount?: number;
  favoriteCount?: number;
}

export default function Topbar({
  searchTerm,
  onSearch,
  categories,
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
  cartCount = 0,
  favoriteCount = 0,
}: Props) {
  return (
    <header className="backdrop-blur-md bg-white/60 border-b border-white/40 shadow-glow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
          TakeHub
        </h1>

        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm rounded-full border border-gray-200 bg-white/70 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
          />
        </div>

        <div className="flex items-center gap-3">
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className="text-sm border border-gray-200 rounded-full px-4 py-2 bg-white/70 hover:bg-white focus:ring-2 focus:ring-blue-300 outline-none transition-all"
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="title-asc">A → Z</option>
            <option value="title-desc">Z → A</option>
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="text-sm border border-gray-200 rounded-full px-4 py-2 bg-white/70 hover:bg-white focus:ring-2 focus:ring-pink-300 outline-none transition-all"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          <div className="flex gap-2 ml-4">
            <span className="text-xs sm:text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full shadow">
              🛒 {cartCount}
            </span>
            <span className="text-xs sm:text-sm px-3 py-1 bg-pink-100 text-pink-600 rounded-full shadow">
              ❤️ {favoriteCount}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
