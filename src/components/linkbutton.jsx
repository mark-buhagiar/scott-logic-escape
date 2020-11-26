import React from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";

const LinkButton = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    key,
    buttonText,
    ...rest
  } = props;
  return (
    <Button
      key={key}
      {...rest}
      variant="contained"
      size="medium"
      color="primary"
      onClick={(event) => {
        onClick && onClick(event);
        history.push(to);
      }}
    >
      {buttonText}
    </Button>    
  );
};

export default withRouter(LinkButton);
