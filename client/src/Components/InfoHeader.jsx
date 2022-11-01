import * as React from 'react';
function InfoHeader() {
  return (
      <div className='flex items-center px-8 py-1 w-full text-white bg-[#f44237] mt-[40px] mb-[10px] shadow-card'>

        <div className='mr-auto'>
          For the best experience use <b>inshorts</b>  app on your  smartphone.
        </div>

        <div className="w-[140px]"><img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="" /></div>
        <div className="w-[140px]"><img src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="" /></div>
        
        

      </div>
  )
}

export default InfoHeader