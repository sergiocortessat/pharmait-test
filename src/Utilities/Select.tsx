import React from "react";
import { Form } from "react-bootstrap";
import "../Styles/Select.scss";
//interface for vendordetails in select components
export interface Condition {
  condition_parameter_1: string;

  condition_operator: string;

  condition_parameter_2: string;
}

export interface Configurations {
  return_value: string;
  condition: Condition;
}

interface SelectProps {
  vendorDetails: Configurations;
}

const SelectForm = ({ vendorDetails }: SelectProps) => {
  console.log(vendorDetails);
  return (
    <Form.Select className="select" aria-label="Default select example">
      <option value={vendorDetails.condition.condition_operator}>{vendorDetails.condition.condition_operator}</option>
      <option value="<=">{'<='}</option>
      <option value="==">{'='}</option>
    </Form.Select>
  );
};

export default SelectForm;
