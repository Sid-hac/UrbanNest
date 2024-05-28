import { useState } from "react";

const Slider = ({ images }) => {
  const [viewImages, setViewImages] = useState(images);

  const handleView = (i) => {
     // Create a copy of the current images array
     const updatedImages = [...viewImages];
     // Swap the elements
     const temp = updatedImages[0];
     updatedImages[0] = updatedImages[i];
     updatedImages[i] = temp;
     // Update the state with the new array
     setViewImages(updatedImages);
  };

  return (
    <div className="flex justify-center items-center gap-2 w-full ">
      <div className="w-full h-64">
        <img
          src={viewImages[0]}
          alt="bigImg"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        {viewImages.slice(1).map((image, i=1) => (
          <div key={i} className="w-32 h-20  " onClick={() => handleView(i)}>
            <img
              src={image}
              alt="smallImg"
              className="w-full h-full object-cover rounded-md "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
