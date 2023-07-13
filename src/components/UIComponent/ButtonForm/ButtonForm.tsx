import React from "react";
import { Button } from "antd";

type Props = {
  classname: string;
  children : string
};

export default function ButtonForm({classname,children}: Props) {
  return (
    <Button 
    htmlType="submit"
    className={`${classname}`}>
      {`${children}`}
    </Button>
  );
}
