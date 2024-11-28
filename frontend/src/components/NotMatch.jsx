import React from 'react'

const NotMatch = (props) => {
  let {x,y,z} = props;

  return (
    <div>
       <div className='shadow-sm shadow-black p-2'>
      <h1>{x} {y} {z}</h1>
      <h1>This is Not Matching</h1>
      </div> 
    </div>
  )
}

export default NotMatch
