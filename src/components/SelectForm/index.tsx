import { Form } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import { Select } from "antd";
import { Roles } from "../../interface/enum-list";

export interface ISelectForm {
  value: number | undefined;
  onChange: Dispatch<SetStateAction<number | undefined>> ;
}

const SelectForm = ({ value, onChange }: ISelectForm) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      className="selectForm"
      options={[
        { value: 0, label: Roles.CLIENT },
        { value: 1, label: Roles.MODEL },
        { value: 2, label: Roles.PHOTOGRAPHER },
        { value: 3, label: Roles.STUDIO },
      ]}
    ></Select>
  );
};

export default SelectForm;
