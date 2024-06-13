import Card from "@/components/Card";
import Filter from "@/components/Filter";
import Map from "@/components/Map";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const Listings = () => {
  const data = useLoaderData();

  return (
    <div className="relative flex max-sm:flex-col lg:ml-16 lg:mr-16 max-sm:p-3 sm:pl-5 sm:h-[100vh]">
      <div className="w-full sm:w-[60%] flex flex-col sm:p-5 overflow-y-scroll mb-2">
        <Filter />
        <div className="mt-10 space-y-8">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading package location!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((item) => (
                  <Card key={item.id} item={item} />
                ))
              }
            </Await>
          </Suspense>
          {/* {data.map((item) => (
            <Card key={item.id} item={item} />
          ))} */}
        </div>
      </div>
      <div className="bg-[#fcf5f3] w-full h-80 sm:h-[100%]  sm:w-[40%]  ">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading package location!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default Listings;
