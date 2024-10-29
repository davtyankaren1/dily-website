import React from "react";
import "../../styles/Loading.scss";

const Loading: React.FC = () => {
  return (
    <div className='loading-container'>
      <div className='loader'></div>
      <p>MASO...</p>
    </div>
  );
};

export default Loading;
