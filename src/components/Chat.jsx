import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { SendHorizontal, X } from "lucide-react";
import { useContext, useState } from "react";
import { format } from "timeago.js";

const Chat = ({ chats }) => {
  const [chat, setChat] = useState(null);

  const { currentUser } = useContext(AuthContext);

  axios.defaults.withCredentials = true;

  const handleChatOpen = async (id, receiver) => {
    try {
      const res = await axios.get("http://localhost:5000/api/chat/" + id);
      setChat({ ...res.data, receiver });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col space-y-4 ">
      <h3 className="text-lg font-bold ">Messages</h3>
      <div className="flex flex-col space-y-3 h-[300px] overflow-scroll ">
        {chats.map((c) => (
          <div
            key={c.id}
            className="flex justify-between items-center gap-2 p-3 bg-white  rounded-md hover:cursor-pointer "
            onClick={() => handleChatOpen(c.id, c.receiver)}
          >
            <div className="flex justify-center items-center gap-2 ">
              <div className="flex justify-center items-center gap-1">
                <img
                  src={c.receiver.avatar || "./noavatar.png"}
                  alt="profileimg"
                  className="w-5 h-5 rounded-full object-cover"
                />
                <h3 className="text-sm font-bold ">{c.receiver.username}</h3>
              </div>
              <p className="text-xs text-center flex justify-center items-center">
                {c.lastMessage}
              </p>
            </div>
            <div>
              <span
                className={`flex w-3 h-3 rounded-full bg-yellow-300 ${
                  c.seenby.includes(currentUser.id) ? "hidden" : "flex"
                } `}
              />
            </div>
          </div>
        ))}
      </div>
      {chat && (
        <div>
          <div className="flex justify-between items-center bg-yellow-200 p-2 h-full ">
            <div className="flex justify-between items-center gap-2">
              <img
                src={chat.receiver.avatar || "./noavatar.png" }
                alt="profileimg"
                className="w-8 h-8 rounded-full object-cover"
              />
              <h3 className="text-sm font-semibold ">
                {chat.receiver.username}
              </h3>
            </div>
            <X className="text-xs" onClick={() => setChat(null)} />
          </div>
          <div className="bg-white h-[300px] overflow-scroll ">
            <div className=" flex flex-col space-y-4 p-4   ">
              {chat.messages.map((message) => (
                <div key={message.id}  className={`w-full flex ${message.userId === currentUser.id ? "justify-end items-center" : "justify-start items-center"}`}>
                  <div className="flex flex-col bg-yellow-50 w-[50%] p-1 rounded-md ">
                    <p>{message.text}</p>
                    <span className="text-xs text-end">{format(message.createdAt)}</span>
                  </div>
                </div>
              ))}
             
            </div>
          </div>
          <div className="flex justify-between items-center">
            <textarea
              name=""
              id=""
              className="w-full border border-black rounded-md"
            ></textarea>
            <button className="bg-yellow-300 p-3 ring-2 ring-yellow-200 rounded-sm">
              <SendHorizontal className="w-5 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
