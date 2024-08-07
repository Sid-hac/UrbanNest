import Card from "@/components/Card";
import Filter from "@/components/Filter";
import Footer1 from "@/components/Footer1";
import Map from "@/components/Map";
import { Loader2 } from "lucide-react";

import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const Listings = () => {
  const data = useLoaderData();

  return (
    <section className="flex flex-col gap-4" >

    
    <div className="relative flex max-sm:flex-col lg:ml-16 lg:mr-16 max-sm:p-3 sm:pl-5 sm:h-[100vh]">
      <div className="w-full sm:w-[60%] flex flex-col sm:p-5 overflow-y-scroll mb-2">
        <Filter />
        <div className="mt-10 space-y-8">
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center">
                <Loader2 className="w-5 h-5 text-center animate-spin" />
              </div>
            }
          >
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading Posts</p>}
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
        <Suspense
          fallback={
            <div className="w-full h-full flex justify-center items-center">
              <Loader2 className="w-5 h-5 text-center animate-spin" />
            </div>
          }
        >
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading package location!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
    <Footer1/>
    </section>
  );
};

export default Listings;
