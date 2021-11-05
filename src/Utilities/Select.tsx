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
  return_value?: string;
  condition?: Condition;
}

interface SelectProps {
  vendorDetails?: Configurations;
}

const SelectForm = ({ vendorDetails }: SelectProps) => {
  return (
    <Form.Select className="select" aria-label="Default select example">
      <Form.Label>Yes</Form.Label>
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
};

export default SelectForm;
