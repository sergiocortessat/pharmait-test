import React from "react";
import { useSelector } from "react-redux";

interface UserData {
  id: number;
  organization_id: number;
  first_name: string;
  last_name: string;
  profile_img: string; 
}

interface Configurations {
  return_value: string;
  condition: {
    condition_parameter_1: string;
    condition_parameter_2: string;
    condition_operator: string;
  }
}

interface ConditionConfiguration {
  id: number;
  name: string;
  author_id: number;
  created_at: string;
  updated_at: string;
  configuration_type: string;
  configuration: Configurations[];
}

interface IProps {
    data: {
        userData: UserData,
        conditionConfiguration: ConditionConfiguration
    }
}

const Home = () => {
  const { userData, conditionConfiguration } = useSelector(
    (state: IProps) => state.data
  );
  console.log(userData);
  console.log(conditionConfiguration);
  return (
    <div>
      {conditionConfiguration.configuration && conditionConfiguration.configuration.map((item) => {
        return (
          <div key={item.return_value}>
            <h1>{item.return_value}</h1>
            <p>{item.condition.condition_parameter_1}</p>
            <p>{item.condition.condition_operator}</p>
            <p>{item.condition.condition_parameter_2}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
