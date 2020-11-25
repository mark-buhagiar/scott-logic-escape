import React from "react";
import LinkButton from "../linkbutton";

const OptionsSection = ({ label, items }) => {
  return (
    <>
      <label>{label}</label>
      <div className="button-group">
        {items.map(({ destination, label },idx) => (
          <LinkButton to={`/room/${destination}`} key={idx}>
            {label}
          </LinkButton>
        ))}
      </div>
    </>
  );
};

export default OptionsSection;
