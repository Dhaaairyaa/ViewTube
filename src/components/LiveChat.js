import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    let i1 = 1;
    const i = setInterval(() => {
      console.log("poling poling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: `nice video+${i1} 🥰`,
        })
      );
      i1++;
    }, 200);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="h-[600px] p-2 border w-[400px] ml-2  border-black bg-slate-100 rounded-lg overflow-scroll flex flex-col-reverse">
      {ChatMessages.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
