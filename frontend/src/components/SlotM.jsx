import React from 'react'
import Match from './Match';
import NotMatch from './NotMatch';

const SlotM = (props) => {
  // let x = props.x;
  // let y= props.y;
  // let z = props.z;
  let {x,y,z} = props;
  

  // if(x===y && y===z){
  //   return<>
  //       <Match x={x} y= {y} z = {z}/>
  //   </>
  // }
  // else{
  // return (
  //   <>
  //      <NotMatch x={x} y= {y} z = {z}/>
  //   </>
  // )
  return (<>
        {x===y && y===z ? (<Match x={x} y= {y} z = {z}/>) : (<NotMatch x={x} y= {y} z = {z}/>)}
  </>
  )
  }


export default SlotM
