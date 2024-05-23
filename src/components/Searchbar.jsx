import { SearchIcon } from "lucide-react";

const Searchbar = () => {
  const types = ["buy", "rent"];

  return (
    <div className="flex flex-col">
      <div className="flex justify-start items-center">
        {types.map((type) => (
          <button
            key={type}
            className="p-2 text-sm font-semibold w-20 border-black border-t border-r border-l uppercase focus:bg-black focus:text-white "
          >
            {type}
          </button>
        ))}
      </div>
      <form action="" className="flex justify-s items-center ">
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="  border-black border-t border-l border-b h-12 "
        />
        <input
          type="number"
          name="minprice"
          placeholder="Min. Price"
          className=" border-black border-t  border-b h-12"
        />
        <input
          type="number"
          name="maxprice"
          placeholder="Max. Price"
          className=" border-black border-t  border-b h-12 "
        />
        <button
          type="submit"
          className="bg-yellow-400 h-12 w-12 flex justify-center items-center  border-black border-t border-r border-b "
        >
          <SearchIcon className="text-white text-center  " />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
