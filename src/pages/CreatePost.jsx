import UploadWidget from "@/components/UploadWidget";
import axios from "axios";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);

  const navigate= useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const inputs = Object.fromEntries(formData);

    try {
      const res = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/post`, {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetails: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      }, {
        withCredentials: true
      });
      console.log(res.data);
      navigate("/" + res.data.id)
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex max-md:flex-col lg:ml-16 lg:mr-16 max-md:p-3 md:pl-5  md:h-[100vh] max-md:space-y-5 ">
      <div className="w-full md:w-[60%] flex flex-col md:p-5 overflow-y-scroll space-y-6 mb-2">
        <h1 className="text-xl font-bold ">Add New Post</h1>
        <div>
          <form
            onSubmit={handleSubmit}
            className="grid max-sm:grid-cols-2 grid-cols-3 gap-4 "
          >
            <div className="flex flex-grow flex-col justify-center items-start gap-1 col-span-1 ">
              <label htmlFor="title" className="text-sm font-semibold">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="border border-black rounded-md  h-10 p-1  w-32 lg:w-40 "
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1 col-span-1 ">
              <label htmlFor="price" className="text-sm font-semibold">
                Price
              </label>
              <input
                id="price"
                name="price"
                type="number"
                className="border border-black rounded-md  h-10 p-1 w-32 lg:w-40"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1 max-sm:col-span-2 col-span-1">
              <label htmlFor="address" className="text-sm font-semibold">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                className="border border-black rounded-md  h-10 p-1 w-32 max-sm:w-full lg:w-40"
              />
            </div>
            <div className="flex flex-col justify-center items-start col-span-3 max-sm:col-span-2 gap-1 max-sm:mb-20 mb-10">
              <label htmlFor="desc" className="text-sm font-semibold">
                Description
              </label>
              <ReactQuill
                theme="snow"
                onChange={setValue}
                value={value}
                className="w-full h-36 "
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1 col-span-1">
              <label htmlFor="city" className="text-sm font-semibold">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                className="border border-black rounded-md  h-10 p-1 w-32 lg:w-40"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1 col-span-1">
              <label htmlFor="bedroom" className="text-sm font-semibold">
                Bedroom{" "}
              </label>
              <input
                min={1}
                id="bedroom"
                name="bedroom"
                type="number"
                className="border border-black rounded-md  h-10 p-1 w-32 lg:w-40"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1 col-span-1">
              <label htmlFor="bathroom" className="text-sm font-semibold">
                Bathroom{" "}
              </label>
              <input
                min={1}
                id="bathroom"
                name="bathroom"
                type="number"
                className="border border-black rounded-md  h-10 p-1 w-32 lg:w-40"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1 col-span-1">
              <label htmlFor="latitude" className="text-sm font-semibold">
                Latitude
              </label>
              <input
                id="latitude"
                name="latitude"
                type="text"
                className="border border-black rounded-md  h-10 p-1 w-32 lg:w-40"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1 col-span-1">
              <label htmlFor="longitude" className="text-sm font-semibold">
                Longitude
              </label>
              <input
                id="longitude"
                name="longitude"
                type="text"
                className="border border-black rounded-md  h-10 p-1 w-32 lg:w-40"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1 col-span-1">
              <label htmlFor="type" className="text-sm font-semibold">
                Type
              </label>
              <select
                name="type"
                className="border border-black rounded-md  h-10 p-1  w-32 lg:w-40"
              >
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="flex flex-col justify-center items-start gap-1 col-span-1">
              <label htmlFor="type" className="text-sm font-semibold">
                Property
              </label>
              <select
                name="property"
                className="border border-black rounded-md text-sm h-10 p-1 w-32  lg:w-40 "
              >
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="flex flex-col justify-center items-start gap-1 col-span-1">
              <label htmlFor="utilities" className="text-sm font-semibold">
                Utilities Policy
              </label>
              <select
                name="utilities"
                className="border border-black rounded-md text-sm h-10 p-1 col-span-1 w-32 lg:w-40 "
              >
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="flex flex-col justify-center items-start gap-1 col-span-1">
              <label htmlFor="pet" className="text-sm font-semibold">
                Pet Policy
              </label>
              <select
                name="pet"
                className="border border-black rounded-md text-sm h-10 col-span-1 p-1 w-32 lg:w-40 "
              >
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="flex flex-col justify-center items-start gap-1 col-span-1">
              <label htmlFor="income" className="text-sm font-semibold">
                Income Policy
              </label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
                className="border border-black rounded-md text-sm h-10 p-1 col-span-1 w-32 lg:w-40 "
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1 col-span-1">
              <label htmlFor="size" className="text-sm font-semibold">
                Total Size (sqft)
              </label>
              <input
                min={0}
                id="size"
                name="size"
                type="number"
                className="border border-black rounded-md  h-10 p-1 w-32 lg:w-40"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1 col-span-1">
              <label htmlFor="school" className="text-sm font-semibold">
                School
              </label>
              <input
                min={0}
                id="school"
                name="school"
                type="number"
                placeholder="in meters"
                className="border border-black rounded-md  h-10 p-1 w-32 lg:w-40"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1 col-span-1">
              <label htmlFor="bus" className="text-sm font-semibold">
                bus 
              </label>
              <input
                min={0}
                id="bus"
                name="bus"
                type="number"
                placeholder="in meters"
                className="border border-black rounded-md  h-10 p-1 w-32 lg:w-40"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1 col-span-1">
              <label htmlFor="restaurant" className="text-sm font-semibold">
                Restaurant 
              </label>
              <input
                min={0}
                id="restaurant"
                name="restaurant"
                type="number"
                placeholder="in meters"
                className="border border-black rounded-md  h-10 p-1 w-32 lg:w-40"
              />
            </div>
            <div className="flex justify-center items-center ">
              <button className="p-2 bg-yellow-300 rounded-md w-40 text-lg font-bold">
                Create
              </button>
            </div>
          </form>
          {error && <span className="text-red-500 text-sm ">{error}</span>}
        </div>
      </div>
      <div className="bg-[#fcf5f3] w-full max-sm:h-52 md:h-full flex flex-col justify-center items-center  md:w-[40%] px-5 pb-5 rounded-md gap-5 overflow-y-scroll ">
        <div className="flex flex-col justify-center items-center gap-2 mt-40" >
          {images.map((image, i) => (
            <img src={image} alt="images" key={i} className="w-40 border border-black " />
          ))}
        </div>
        <UploadWidget
          uwConfig={{
            cloudName: "dkfaywt7t",
            uploadPreset: "estate",
            folder: "posts",
          } 
        }
        setState={setImages}
        />
      </div>
    </div>
  );
};

export default CreatePost;
