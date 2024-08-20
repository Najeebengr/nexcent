import React from 'react'
import Community from '../views/Community'

function community(props: any) {
  const singleRoute = true
  return (
    <div>
      <Community single={singleRoute} />
    </div>
  )
}

export default community
