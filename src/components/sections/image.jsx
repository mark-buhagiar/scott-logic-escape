import React from "react";

const ImageSection = ({ label, source }) => {
  return (
    <>
      <label>{label}</label>
      <img src={source} alt={label} />
    </>
  );
};

export default ImageSection;
