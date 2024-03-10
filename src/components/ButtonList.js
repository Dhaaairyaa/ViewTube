import React from 'react';
import Button from './Button';

const ButtonList = () => {

  const list = ["All", "News","Cartoon","Gaming","Bollywood Hits","Cricket","Punjabi POP" ];
  return (

      <div className='flex'>
        {list.map((item,index)=>(
          <Button key={index} name={item}></Button>
        ))}
      </div>

  );
};

export default ButtonList;