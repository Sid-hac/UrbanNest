import { SearchIcon } from "lucide-react";
import { useState } from "react";

const Searchbar = () => {
  const types = ["buy", "rent"];
  const [query , setQuery] = useState({
    type: "buy",
    location: "",
    minprice: 0,
    maxprice: 0,
  })
  const switchType = (value) => {
    setQuery(prev => ({...prev , type :value} ))
  }

  return (
    <div className="flex flex-col max-md:pr-5 ">
      <div className="flex justify-start items-center text-sm sm:text-xl">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type) }
            className={`p-2 text-sm font-semibold w-20 border-black border-t border-r border-l uppercase rounded-t-md ${query.type === type ? 'bg-black text-white' : ""} `}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="" className="flex max-md:flex-col  justify-start max-md:justify-center items-center ">
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="flex  border-black border-t md:border-l border-b w-32 max-md:w-full  h-12 focus:outline-none focus:border-b-2 focus:border-b-black-200"
        />
        <input
          type="number"
          name="minprice"
          placeholder="Min. Price"
          className="flex flex-shrink border-black border-t  border-b w-32 max-md:w-full h-12 focus:outline-none focus:border-b-2 focus:border-b-black-200 "
        />
        <input
          type="number"
          name="maxprice"
          placeholder="Max. Price"
          className="flex border-black border-t  border-b w-32  max-md:w-full h-12 focus:outline-none focus:border-b-2 focus:border-b-black-200"
        />
        <button
          type="submit"
          className="bg-yellow-400 h-12 w-14 max-md:w-full max-md:h-10 max-md:rounded-md max-md:mt-5 flex justify-center items-center  border-black border-t border-r border-b "
        >
          <SearchIcon className="text-white text-center  " />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
