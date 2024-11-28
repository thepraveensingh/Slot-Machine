import React from 'react'

const Match = (props) => {
  let {x,y,z} = props;

  return (
    <div>
       <div className='shadow-sm shadow-black p-2'>
      <h1>{x} {y} {z}</h1>
      <h1>This is Matching</h1>
      </div> 
    </div>
  )
}

export default Match
