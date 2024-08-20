import React from 'react'
import BlogList from '../views/BlogList'

function blog(props:any) {
  const singleRoute = true;
  return (
    <div>
      <BlogList single = {singleRoute} />
    </div>
  )
}

export default blog
