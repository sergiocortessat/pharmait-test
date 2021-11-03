import React from "react";
import { useSelector } from "react-redux";

interface IProps {
    data: {
        userData: any,
        conditionConfiguration: any
    }
}

const Home = () => {
  const { userData, conditionConfiguration } = useSelector(
    (state: IProps) => state.data
  );
  return (
    <div>
      {conditionConfiguration.configuration && conditionConfiguration.configuration.map((item: any) => {
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
