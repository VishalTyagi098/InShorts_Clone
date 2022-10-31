import * as React from 'react';
import menuIcon from '../images/menuIcon.png'


export default function Header() {
  return (
    <div className='w-full flex justify-center items-center h-[72px] relative shadow-[0_2px_5px_0px_rgba(0,0,0,0.16)] '>

      <div className="mr-auto ml-5">
        <img src={menuIcon} alt="" width={30}/>
      </div>

      <div className="h-[50px] absolute">
        <a href="https://www.inshorts.com/">
          <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="" width={140}/>
        </a>
      </div>
    </div>
      
  );
}
