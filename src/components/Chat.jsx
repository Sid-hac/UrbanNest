// import { SendHorizontal, X } from "lucide-react";
// import { useState } from "react";

const Chat = ({chats}) => {

    // const [chat, setChat] = useState(true);

   console.log(chats);
  return (
    <div>
        hello
    </div>
    // <div className="flex flex-col space-y-4 ">
    //   <h3 className="text-lg font-bold ">Messages</h3>
    //   <div className="flex flex-col space-y-3 h-[300px] overflow-scroll ">
    //     <div className="flex gap-2 p-3 bg-white  rounded-md hover:cursor-pointer ">
    //       <img
    //         src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //         alt="profileimg"
    //         className="w-5 h-5 rounded-full object-cover"
    //       />
    //       <h3 className="text-sm font-semibold ">John Doe</h3>
    //       <p className="text-sm">Lorem ipsum, dolor sit amet ...</p>
    //     </div>
    //     <div className="flex gap-2 p-3 bg-white  rounded-md hover:cursor-pointer  ">
    //       <img
    //         src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //         alt="profileimg"
    //         className="w-5 h-5 rounded-full object-cover"
    //       />
    //       <h3 className="text-sm font-semibold ">John Doe</h3>
    //       <p className="text-sm">Lorem ipsum, dolor sit amet ...</p>
    //     </div>
    //     <div className="flex gap-2 p-3 bg-white  rounded-md hover:cursor-pointer  ">
    //       <img
    //         src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //         alt="profileimg"
    //         className="w-5 h-5 rounded-full object-cover"
    //       />
    //       <h3 className="text-sm font-semibold ">John Doe</h3>
    //       <p className="text-sm">Lorem ipsum, dolor sit amet ...</p>
    //     </div>
    //     <div className="flex gap-2 p-3 bg-white  rounded-md hover:cursor-pointer  ">
    //       <img
    //         src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //         alt="profileimg"
    //         className="w-5 h-5 rounded-full object-cover"
    //       />
    //       <h3 className="text-sm font-semibold ">John Doe</h3>
    //       <p className="text-sm">Lorem ipsum, dolor sit amet ...</p>
    //     </div>
    //     <div className="flex gap-2 p-3 bg-white  rounded-md hover:cursor-pointer  ">
    //       <img
    //         src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //         alt="profileimg"
    //         className="w-5 h-5 rounded-full object-cover"
    //       />
    //       <h3 className="text-sm font-semibold ">John Doe</h3>
    //       <p className="text-sm">Lorem ipsum, dolor sit amet ...</p>
    //     </div>
    //     <div className="flex gap-2 p-3 bg-white  rounded-md hover:cursor-pointer  ">
    //       <img
    //         src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //         alt="profileimg"
    //         className="w-5 h-5 rounded-full object-cover"
    //       />
    //       <h3 className="text-sm font-semibold ">John Doe</h3>
    //       <p className="text-sm">Lorem ipsum, dolor sit amet ...</p>
    //     </div>
    //   </div>
    //   {chat && (
    //     <div>
    //       <div className="flex justify-between items-center bg-yellow-200 p-2 h-full ">
    //         <div className="flex justify-between items-center gap-2">
    //           <img
    //             src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //             alt="profileimg"
    //             className="w-8 h-8 rounded-full object-cover"
    //           />
    //           <h3 className="text-sm font-semibold ">John Doe</h3>
    //         </div>
    //         <X className="text-xs" onClick={() => setChat(null)} />
    //       </div>
    //       <div className="bg-white h-[300px] overflow-scroll ">
    //         <div className=" flex flex-col space-y-4 p-4   ">
    //           <div className="w-full flex justify-start  items-center ">
    //             <div className="flex flex-col bg-yellow-50 w-[50%] p-1 rounded-md ">
    //               <p>Lorem ipsum dolor, sit amet</p>
    //               <span className="text-xs text-end">1 hr ago</span>
    //             </div>
    //           </div>
    //           <div className="w-full flex justify-end items-center ">
    //             <div className="flex flex-col bg-yellow-50 w-[50%] p-1 rounded-md ">
    //               <p>Lorem ipsum dolor, sit amet</p>
    //               <span className="text-xs text-end">1 hr ago</span>
    //             </div>
    //           </div>
    //           <div className="w-full flex justify-start items-center ">
    //             <div className="flex flex-col bg-yellow-50 w-[50%] p-1 rounded-md ">
    //               <p>Lorem ipsum dolor, sit amet</p>
    //               <span className="text-xs text-end">1 hr ago</span>
    //             </div>
    //           </div>
    //           <div className="w-full flex justify-end items-center ">
    //             <div className="flex flex-col bg-yellow-50 w-[50%] p-1 rounded-md ">
    //               <p>Lorem ipsum dolor, sit amet</p>
    //               <span className="text-xs text-end">1 hr ago</span>
    //             </div>
    //           </div>
    //           <div className="w-full flex justify-start items-center ">
    //             <div className="flex flex-col bg-yellow-50 w-[50%] p-1 rounded-md ">
    //               <p>Lorem ipsum dolor, sit amet</p>
    //               <span className="text-xs text-end">1 hr ago</span>
    //             </div>
    //           </div>
    //           <div className="w-full flex justify-end items-center ">
    //             <div className="flex flex-col bg-yellow-50 w-[50%] p-1 rounded-md ">
    //               <p>Lorem ipsum dolor, sit amet</p>
    //               <span className="text-xs text-end block">1 hr ago</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex justify-between items-center">
    //         <textarea
    //           name=""
    //           id=""
    //           className="w-full border border-black rounded-md"
    //         ></textarea>
    //         <button className="bg-yellow-300 p-3 ring-2 ring-yellow-200 rounded-sm">
    //           <SendHorizontal className="w-5 h-6" />
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default Chat;
