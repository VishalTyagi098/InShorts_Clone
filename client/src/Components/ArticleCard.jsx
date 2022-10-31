import React from 'react'

function ArticleCard({data}) {
  return (
    <div>
      <img src={data.url} alt="" />
    </div>
  )
}

export default ArticleCard