import React from "react";
import { useSelector } from "react-redux";
import { ConditionConfiguration } from "./Home";
import Dropdown from "../Utilities/DropDown"
import { useParams } from "react-router";

interface IProps {
  conditionConfiguration: ConditionConfiguration;
}

const VendorDetails = () => {
  const {conditionConfiguration} = useSelector(
    (state: { data: IProps }) => state.data
  );
// grab the id from the link url
const {vendor}:{vendor:string} = useParams()
  const vendorDetails = conditionConfiguration.configuration ? conditionConfiguration.configuration.find(
    (item:any) => item.return_value === vendor
    ) : {};
    console.log(vendorDetails);
// console.log(conditionConfiguration.configuration);
  return (
    <Dropdown />
  );
};

export default VendorDetails;
