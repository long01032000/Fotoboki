import React from "react";
import { Form } from "antd";

type Props = {
  name: string;
  children: any;
  message?: string;
  dependencies: [string];
  required?: boolean;
};

type Rule = {
  required?: boolean;
  message?: string;
};

export default function FormItem({
  name,
  message,
  children,
  dependencies,
  required,
}: Props) {
  const rules: Rule[] = [{ required: required, message: message }];
  return (
    <Form.Item
      name={name}
      rules={rules}
      dependencies={dependencies}    
    >
      {children}
    </Form.Item>
  );
}


