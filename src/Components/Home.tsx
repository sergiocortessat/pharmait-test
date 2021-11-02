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
console.log(conditionConfiguration);
console.log(userData);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
