import React from "react";
import { Form } from "antd";
import { NamePath } from "antd/es/form/interface";

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
  getFieldValue?: (name: NamePath) => any;
};

export default function FormItem({
  name,
  message,
  children,
  dependencies,
  required,
}: Props) {
  const rules: Rule[] = [
    { required: required, message: message },
    { getFieldValue: (any) => any },
  ];
  return (
    <Form.Item name={name} rules={rules} dependencies={dependencies}>
      {children}
    </Form.Item>
  );
}
