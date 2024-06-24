import { AuthContext } from "@/context/AuthContext";
import { SocketContext } from "@/context/SocketContext";
import { useNotificationStore } from "@/lib/notificationStore";
import axios from "axios";
import { SendHorizontal, X } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { format } from "timeago.js";

const Chat = ({ chats }) => {
  const [chat, setChat] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const messageEndRef = useRef();
  const decrease = useNotificationStore((state) => state.decrease)

  axios.defaults.withCredentials = true;

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleChatOpen = async (id, receiver) => {
    try {
      // eslint-disable-next-line no-undef
      const res = await axios.get(`https://urbannest-backend-244i.onrender.com/api/chat/` + id);
      if (!res.data.seenby.includes(currentUser.id)) {
        decrease();
      }
      // await axios.put(`https://urbannest-backend-244i.onrender.com/api/chat/read/` + chat.id);
      setChat({ ...res.data, receiver });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get("text");

    if (!text) return;

    try {
      const res = await axios.post(
        // eslint-disable-next-line no-undef
        `https://urbannest-backend-244i.onrender.com/api/message/` + chat.id,
        { text },
        {
          withCredentials: true,
        }
      );
      setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
      e.target.reset();

      socket.emit("newMessage", {
        receiverId: chat.receiver.id,
        data: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const read = async () => {
      try {
        // eslint-disable-next-line no-undef
        await axios.put(`https://urbannest-backend-244i.onrender.com/api/chat/read/` + chat.id);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat && socket) {
      socket.on("getMessage", (data) => {
        if (chat.id === data.chatId) {
          setChat((prev) => ({
            ...prev,
            messages: [...prev.messages, data],
          }));
          read();
        }
      });
    }

    return () => {
      socket.off("getMessage");
    };
  }, [chat, socket]);

  return (
    <div className="flex flex-col space-y-4 ">
      <h3 className="text-lg font-bold ">Messages</h3>
      <div className="flex flex-col space-y-3 h-fit overflow-scroll ">
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
                  c.seenby.includes(currentUser.id) || chat?.id === c.id
                    ? "hidden"
                    : "flex"
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
                src={chat.receiver.avatar || "./noavatar.png"}
                alt="profileimg"
                className="w-8 h-8 rounded-full object-cover"
              />
              <h3 className="text-sm font-semibold ">
                {chat.receiver.username}
              </h3>
            </div>
            <X className="text-xs" onClick={() => setChat(null)} />
          </div>
          <div className="bg-white h-[400px] overflow-scroll ">
            <div className=" flex flex-col space-y-4 p-4   ">
              {chat.messages.map((message) => (
                <div
                  key={message.id}
                  className={`w-full flex ${
                    message.userId === currentUser.id
                      ? "justify-end items-center"
                      : "justify-start items-center"
                  }`}
                >
                  <div className="flex flex-col bg-yellow-50 w-[50%] p-1 rounded-md ">
                    <p>{message.text}</p>
                    <span className="text-xs text-end">
                      {format(message.createdAt)}
                    </span>
                  </div>
                  <div ref={messageEndRef}></div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex justify-between items-center w-full"
            >
              <textarea
                name="text"
                id=""
                className="w-full border border-black rounded-md"
              ></textarea>
              <button className="bg-yellow-300 p-3 ring-2 ring-yellow-200 rounded-sm">
                <SendHorizontal className="w-5 h-6" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
