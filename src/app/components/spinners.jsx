import React from "react";
import { PulseLoader } from "react-spinners";  // You can choose any spinner component from react-spinners

const Spinner = ({ loading }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <PulseLoader loading={loading} size={25} color="#3498db" />
    </div>
  );
};

export default Spinner;