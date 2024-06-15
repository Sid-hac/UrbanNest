import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {

  const [searchParams , setSearchParams] = useSearchParams()
  
  const [query , setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 1000000,
    bedroom: searchParams.get("bedroom") || 1,
  }) 

  const handleChange = e => {
    setQuery({...query, [e.target.name] : e.target.value})
  }

  const handleFilter = () => {
     setSearchParams(query)
  }


  return (
    <div className="space-y-4 w-full ">
      <h2 className="text-lg font-sans ">
        {" "}
        Search Results for{" "}
        <span className="font-bold text-lg blue_gradient">{searchParams.get("city")}</span>{" "}
      </h2>
      <div>
        <div className="flex flex-col justify-center items-start gap-1">
          <label htmlFor="location" className="text-sm">
            Location
          </label>
          <input
            type="text"
            name="city"
            placeholder="City Location"
            className="border border-slate-300 w-full rounded-md p-2 "
            onChange={handleChange}
            defaultValue={query.city}
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
                onChange={handleChange}
                defaultValue={query.type}
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
                onChange={handleChange}
                defaultValue={query.property}
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
                onChange={handleChange}
                defaultValue={query.minPrice}
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
                onChange={handleChange}
                defaultValue={query.maxPrice}
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1 ">
              <label htmlFor="type" className="text-sm">
                Bedrooms
              </label>
              <input
                type="number"
                name="bedroom"
                className="border w-full border-slate-300 rounded-md p-2"
                onChange={handleChange}
                defaultValue={query.bedroom}
              />
            </div>
            <button className=" flex justify-center items-center border border-slate-300 p-1 bg-yellow-400 rounded-md h-full " onClick={handleFilter} >
              <SearchIcon className="text-center text-white"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
