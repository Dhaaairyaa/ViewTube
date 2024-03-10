import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>

      <div className='flex colspan-1 items-center'>
        <img 
        onClick={()=>toggleMenuHandler()}
        alt ="menu" className="h-10 cursor-pointer"
        src = "https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp">
        </img>

        <a href = "/">
          <img alt= "logo"  className="h-12 mx-2" 
          src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg'></img>     
        </a>
      </div>

        <div className='col-span-10'>
          <input type="text" className='w-1/2 text-center border border-grey-400 p-2 rounded-l-full'/>
          <button className='border border-grey-400 p-2 rounded-r-full bg-gray-100'>Search</button>
        </div>
        
        <div className='colspan-1'>
          <img src="https://cdn-icons-png.freepik.com/256/1077/1077114.png" className="h-8" alt ="user-icon"></img>
        </div>
      
    </div>
  );
};

export default Head;