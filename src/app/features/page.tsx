import React from 'react'
import Feature from '../views/Feature'

function features(props:any) {
  const singleRoute = true;
  return (
    <div>
      <Feature single={singleRoute} />
    </div>
  )
}

export default features
