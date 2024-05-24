import Card from "@/components/Card";
import Filter from "@/components/Filter";
import { listData } from "@/lib/dummydata";

const Listings = () => {
  const data = listData;

  return (
    <div className="relative flex lg:ml-28 lg:mr-28 pl-5 h-[100vh]">
      <div className=" w-[60%] flex flex-col p-5">
        <Filter />
        <div className="mt-10 space-y-5" >
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="bg-[#fcf5f3] w-[40%] ">map</div>
    </div>
  );
};

export default Listings;
