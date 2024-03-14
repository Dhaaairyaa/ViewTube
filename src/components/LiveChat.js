import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setliveMessage] = useState();

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
    }, 3000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div>
        <div className="h-[600px] p-2 border w-[400px] ml-2  border-black bg-slate-100 rounded-lg overflow-scroll flex flex-col-reverse">
          {ChatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-[400px] p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Dhairya Patel",
              message: liveMessage,
            })
          );
          setliveMessage("");
        }}
      >
        <input
          type="text"
          className=" px-2 mx-2 w-[300px] "
          value={liveMessage}
          onChange={(e) => {
            setliveMessage(e.target.value);
          }}
        ></input>
        <button className="w-[40px] bg-green-100 px-2 mx-2" type="text">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
