import Card from "@/components/Card";
import Filter from "@/components/Filter";
import Map from "@/components/Map";
import { listData } from "@/lib/dummydata";


const Listings = () => {
  const data = listData;

  return (
    <div className="relative flex lg:ml-16 lg:mr-16 pl-5 h-[100vh]">
      <div className=" w-[60%] flex flex-col p-5 overflow-y-scroll ">
        <Filter />
        <div className="mt-10 space-y-8" >
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="bg-[#fcf5f3] w-[40%]  ">
        <Map items={data} />
      </div>
    </div>
  );
};

export default Listings;
