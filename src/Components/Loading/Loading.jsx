import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css"


export default function Loading() {
  return (
    <div className='Loading'>
      <h2 className='loading-text'>Loading...</h2>
      <ReactLoading type="bars" color="hsl(211, 27%, 70%)"
        height={100} width={50} />
     </div>
  );
}
