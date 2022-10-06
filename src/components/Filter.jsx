import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { categoryFilter, ratingFilter } from '../data';
const Filter = () => {
  const {
    filterProductState: { byCategory, byRating, bySearch },
    filterProductdispatch,
  } = CartState();

  return (
    <div class=" flex items-center filterSection justify-between p-6">
      <div className="inline-flex">
        <select
          id="countries"
          class="bg-gray-50 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={byCategory}
          onChange={() => {
            filterProductdispatch({
              type: 'FILTER_BY_CATEGORY',
              payload: event.target.value,
            });
          }}
        >
          <option value="all">Category</option>
          {categoryFilter.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        <select
          id="countries"
          class="bg-gray-50 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={byRating}
          onChange={() => {
            filterProductdispatch({
              type: 'FILTER_BY_RATING',
              payload: event.target.value,
            });
          }}
        >
          <option value="all" selected>
            Rating
          </option>
          {ratingFilter.map((item) => {
            return <option value={item}>{item + '☆'}</option>;
          })}
        </select>
        <button
          class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          onClick={() => {
            filterProductdispatch({
              type: 'CLEAR_FILTER',
            });
          }}
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Clear Filters
          </span>
        </button>
      </div>

      <div class="flex items-center filterSectionSearch justify-between">
        <div class="flex bg-gray-50 items-center p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            class="bg-gray-50 outline-none ml-1 block "
            type="text"
            name=""
            id=""
            value={bySearch}
            placeholder="search..."
            onChange={() => {
              filterProductdispatch({
                type: 'FILTER_BY_SEARCH',
                payload: event.target.value,
              });
            }}
          />
        </div>
        <div class="lg:ml-40 ml-10 space-x-8">
          <Link to="cart">
            <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Filter;
