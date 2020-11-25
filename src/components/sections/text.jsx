import React from "react";

const TextSection = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default TextSection;
