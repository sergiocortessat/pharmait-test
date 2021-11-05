import React from "react";
import { useSelector } from "react-redux";
import "../Styles/Home.scss";
import Table from "../Utilities/Table";

export interface Condition {
  condition_parameter_1: string;

  condition_operator: string;

  condition_parameter_2: string;
}

export interface UserData {
  id: number;
  organization_id: number;
  first_name: string;
  last_name: string;
  profile_img: string;
}

export interface Configurations {
  return_value: string;
  condition: Condition;
}

export interface ConditionConfiguration {
  id: number;
  name: string;
  author_id: number;
  created_at: string;
  updated_at: string;
  configuration_type: string;
  configuration: Configurations[];
}

export interface IProps {
  data: {
    userData: UserData;
    conditionConfiguration: ConditionConfiguration;
  };
}

const Home = () => {
  const { userData, conditionConfiguration } = useSelector(
    (state: IProps) => state.data
  );
  console.log(userData);
  console.log(conditionConfiguration);
  const { configuration } = conditionConfiguration;
  return (
    <div className="table-container">
      <Table configuration={configuration} />
    </div>
  );
};

export default Home;
