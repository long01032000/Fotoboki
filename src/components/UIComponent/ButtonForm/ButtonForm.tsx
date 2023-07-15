import React from "react";
import { Button } from "antd";
import "./styles.scss";

type Props = {
  name: string;
  children : string 
};

export default function ButtonForm({name,children}: Props) {
  return (
    <Button 
    htmlType="submit"
    className={`${name}`}>
      {`${children}`}
    </Button>
  );
}
