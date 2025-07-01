function Search({ setSearchText }) {
  return (
    <div className="flex flex-col justify-center items-center h-36 space-y-2 bg-[#222222] text-white">
      <h2 className="font-bold text-2xl mb-4">Search</h2>
      <div className="flex flex-wrap space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 px-4 py-2 rounded w-64 text-white"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
