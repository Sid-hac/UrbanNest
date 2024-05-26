import { SearchIcon } from "lucide-react";

const Filter = () => {


  return (
    <div className="space-y-4 w-full ">
      <h2 className="text-lg font-sans ">
        {" "}
        Search Results for{" "}
        <span className="font-bold text-lg blue_gradient">London</span>{" "}
      </h2>
      <div>
        <div className="flex flex-col justify-center items-start gap-1">
          <label htmlFor="location" className="text-sm">
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="City Location"
            className="border border-slate-300 w-full rounded-md p-2 "
          />
        </div>
        <div className=" h-fit  justify-between items-end">
          <div className="mt-5 gap-5 grid lg:grid-cols-6 sm:grid-cols-3 max-sm:grid-cols-2 ">
            <div className="flex flex-col w-full  justify-center items-start gap-1">
              <label htmlFor="type" className="text-sm">
                Type
              </label>
              <select
                name="type"
                id="type"
                className="p-2 border w-full border-slate-300 rounded-md"
              >
                <option value="">any</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
              </select>
            </div>
            <div className="flex flex-col justify-center items-start gap-1 ">
              <label htmlFor="type" className="text-sm">
                Property
              </label>
              <select
                name="type"
                id="type"
                className="p-2 border w-full border-slate-300 rounded-md"
              >
                <option value="">any</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="flex flex-col  justify-center items-start gap-1 ">
              <label htmlFor="type" className="text-sm">
                Min
              </label>
              <input
                type="text"
                name="minPrice"
                placeholder="any"
                className="border w-full border-slate-300 rounded-md p-2 "
              />
            </div>
            <div className=" flex flex-col  justify-center items-start gap-1 ">
              <label htmlFor="type" className="text-sm">
                Max 
              </label>
              <input
                type="text"
                name="maxPrice"
                placeholder="any"
                className="border w-full border-slate-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1 ">
              <label htmlFor="type" className="text-sm">
                Bedrooms
              </label>
              <input
                type="number"
                name="bedrooms"
                className="border w-full border-slate-300 rounded-md p-2"
              />
            </div>
            <button className=" flex justify-center items-center border border-slate-300 p-1 bg-yellow-400 rounded-md h-full ">
              <SearchIcon className="text-center text-white"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
