import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div
      className="w-48 p-5 shadow-lg bg-white h-lvh overflow-scroll"
      style={{ position: "fixed", top: 70, left: 0, zIndex: 100 }}
    >
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>movies</li>
      </ul>
      <h1 className="font-bold pt-5 ">WatchLater</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>movies</li>
      </ul>
      <h1 className="font-bold pt-5">WatchLater</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>movies</li>
      </ul>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>movies</li>
      </ul>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>movies</li>
      </ul>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>movies</li>
      </ul>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
