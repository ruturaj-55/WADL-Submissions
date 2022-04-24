import React from "react";
import { Button } from "antd";
const ButtonComponent = (props) => {
  return <Button type="primary" onClick={props.action} style={{margin:"2%"}}>{props["type"]}</Button>;
};

export default ButtonComponent;
