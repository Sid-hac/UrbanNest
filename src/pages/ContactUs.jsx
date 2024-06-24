import Contact from "@/components/Contact";
import ContactMap from "@/components/ContactMap";

const ContactUs = () => {
  return (
    <div className="flex max-md:flex-col lg:ml-16 lg:mr-16 max-md:p-3 md:pl-5  md:h-[100vh] max-md:space-y-5 ">
      <div className="w-full md:w-[60%] flex flex-col md:p-5 overflow-y-scroll space-y-6 mb-2">
        <Contact />
      </div>
      <div className="bg-[#fcf5f3] w-full h-full md:h-full  md:w-[40%]  pb-5 rounded-md ">
        <h1 className="text-2xl font-serif font-bold mb-7">Visit Us</h1>

        <ContactMap />
      </div>
    </div>
  );
};

export default ContactUs;
