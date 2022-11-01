import React from 'react'

function ArticleCard({data}) {
  return (
    <div className='flex h-[284px] py-4 px-2 my-6 shadow-card'>

      <div className="w-[35%] overflow-hidden rounded-lg ">
        <img src={data.url} alt="" className='h-[270px] w-90% object-cover'/>
      </div>


      <div className="w-[65%] ml-5 flex flex-col">
        <div className="my-1 text-[22px] leading-[27px]">{data.title}</div>
        <div className="text-[12px] leading-[22px] text-[#808290]"><b className='text-black'>short</b> by {data.author} / {new Date(data.timestamp).toGMTString()}</div>
        <div className="my-2 text-[16px] leading-[22px] text-[#44444d]">{data.description}</div>
        <div className="mt-auto text-[12px]">read more at <b>{data.publisher}</b></div>
      </div>
    </div>
  )
}

export default ArticleCard