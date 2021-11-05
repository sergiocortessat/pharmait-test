import React from "react";
import { useSelector } from "react-redux";
import { ConditionConfiguration } from "./Home";
import Dropdown from "../Utilities/DropDown";
import { useParams } from "react-router";
import SelectForm from "../Utilities/Select";
import '../Styles/VendorDetails.scss'

interface IProps {
  conditionConfiguration: ConditionConfiguration;
}

const VendorDetails = () => {
  const { conditionConfiguration } = useSelector(
    (state: { data: IProps }) => state.data
  );
  // grab the id from the link url
  const { vendor }: { vendor: string } = useParams();
  const vendorDetails:any = conditionConfiguration.configuration
    ? conditionConfiguration.configuration.find(
        (item) => item.return_value === vendor
      )
    : {};
  console.log(vendorDetails);
  return (
    <form className="vendor-details">
      <label>Edit details</label>
      <h2>{`Vendor: ${vendor}`}</h2>
      <SelectForm vendorDetails={vendorDetails} />
      <input type="number" placeholder={vendorDetails.condition ? vendorDetails.condition.condition_parameter_2 : 0} onChange={(e) => console.log(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default VendorDetails;
