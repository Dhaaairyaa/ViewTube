import React from "react";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={`col-span-10 ${isMenuOpen ? "ml-[200px]" : "ml-[10px]"}`}>
      <ButtonList></ButtonList>
      <VideoContainer></VideoContainer>
    </div>
  );
};

export default MainContainer;
