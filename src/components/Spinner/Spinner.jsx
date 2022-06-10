import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div>
      <BallTriangle color="#00BFFF" height={80} width={80} />
    </div>
  )
}

export default Spinner