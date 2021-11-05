import React from "react";
import { useSelector } from "react-redux";
import Dropdown from "../Utilities/DropDown";
import { useParams } from "react-router";
import SelectForm from "../Utilities/Select";
import '../Styles/VendorDetails.scss'
import { Configurations, ConditionConfiguration } from "../Components/Home";

interface IProps {
  conditionConfiguration: ConditionConfiguration;
}


const VendorDetails = () => {
  const { conditionConfiguration } = useSelector(
    (state: { data: IProps }) => state.data
  );
  // grab the id from the link url
  const { vendor }: { vendor: string } = useParams();

  // create condition variables 
  const vendorDetails = conditionConfiguration.configuration ? conditionConfiguration.configuration.find(
    (config: Configurations) => config.return_value === vendor
  ) : undefined;
  console.log(vendorDetails);
  return ( 
    <>
    {vendorDetails && (
        <form className="vendor-details">
        <label>Edit details</label>
        <h2>{`Vendor: ${vendor}`}</h2>
        <SelectForm vendorDetails={vendorDetails} />
        <input type="number" placeholder={vendorDetails.condition.condition_parameter_2} onChange={(e) => console.log(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    )}
    </>
  );
};

export default VendorDetails;
