import Card from "@/components/Card";
import Filter from "@/components/Filter";
import Map from "@/components/Map";
import { listData } from "@/lib/dummydata";


const Listings = () => {
  const data = listData;

  return (
    <div className="relative flex max-sm:flex-col lg:ml-16 lg:mr-16 max-sm:p-3 sm:pl-5 sm:h-[100vh]">
      <div className="w-full sm:w-[60%] flex flex-col sm:p-5 overflow-y-scroll mb-2">
        <Filter />
        <div className="mt-10 space-y-8" >
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="bg-[#fcf5f3] w-full h-80 sm:h-[100%]  sm:w-[40%]  ">
        <Map items={data} />
      </div>
    </div>
  );
};

export default Listings;
