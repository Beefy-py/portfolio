import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const SearchComponent = () => {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search Category, Content, Title..."
          required
        />
        <button
          type="submit"
          className="outline-none text-white transition absolute right-2.5 bottom-2.5 bg-logo-shade2 hover:bg-logo-shade1 focus:outline-2 outline-offset-2 focus:ring-none focus:outline-logo-shade3 font-medium rounded-md text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchComponent;
