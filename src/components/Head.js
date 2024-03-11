import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import {
  toggleRecomendation,
  closeRecomendation,
} from "../utils/recomendationSlice";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const isshowrecomendation = useSelector(
    (store) => store.searchRecomendation.showrecomendation
  );

  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  // const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(
      () =>
        // if(searchCache[searchQuery]){
        //  // make dont make api call
        // and setSearchQuery(searchCache[searchQuery])
        // }
        // else{
        //   getSearchSuggestions()
        // }
        getSearchSuggestions(),
      200
    );
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      console.log(json[1]);

      //updating cache
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const handleRecomendations = () => {
    dispatch(toggleRecomendation());
  };

  const handleCloseRecomendation = (e) => {
    if (!inputRef.current.contains(e.target)) {
      dispatch(closeRecomendation());
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseRecomendation);
    return () => {
      document.removeEventListener("click", handleCloseRecomendation);
    };
  }, []);

  return (
    <div
      className="grid grid-flow-col p-2 shadow-lg h-[70px] bg-white"
      style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100 }}
    >
      <div className="flex colspan-1 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          alt="menu"
          className="h-10 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        ></img>

        <a href="/">
          <img
            alt="logo"
            className="h-12 mx-2"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          ></img>
        </a>
      </div>

      <div className="col-span-10">
        <div>
          <input
            ref={inputRef}
            onClick={handleRecomendations}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2 text-center border border-grey-400 p-2 rounded-l-full"
          />
          <button className="border border-grey-400 p-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {isshowrecomendation ? (
          <div className="fixed bg-white w-[33rem] py-2 px-2 border-gray-100 border">
            <ul>
              <li className="hover:bg-gray-300 shadow-sm py-1">TechBurner</li>
              <li className="hover:bg-gray-300 shadow-sm py-1">
                Namastey JavaScript
              </li>
              <li className="hover:bg-gray-300 shadow-sm py-1">AWS</li>
              <li className="hover:bg-gray-300 shadow-sm py-1">
                MERN stack developer
              </li>
              <li className="hover:bg-gray-300 shadow-sm py-1">REACT</li>
              <li className="hover:bg-gray-300 shadow-sm py-1">Node</li>
            </ul>
          </div>
        ) : null}
      </div>

      <div className="colspan-1">
        <img
          src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
          className="h-8"
          alt="user-icon"
        ></img>
      </div>
    </div>
  );
};

export default Head;
