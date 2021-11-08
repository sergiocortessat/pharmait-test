import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Dropdown from '../Utilities/DropDown';
import SelectForm from '../Utilities/Select';
import '../Styles/VendorDetails.scss';
import { Configurations, ConditionConfiguration } from './Home';

interface IProps {
  conditionConfiguration: ConditionConfiguration;
}

const VendorDetails = () => {
  const { conditionConfiguration } = useSelector(
    (state: { data: IProps }) => state.data,
  );
  // grab the id from the link url
  const { vendor }: { vendor: string } = useParams();

  // create condition variables
  const vendorDetails = conditionConfiguration.configuration
    ? conditionConfiguration.configuration.find(
      (config: Configurations) => config.return_value === vendor,
    ) : undefined;
  console.log(vendorDetails);
  return (
    <>
      {vendorDetails && (
      <form className="vendor-details">
        <label htmlFor={vendor}>
          <h2>{`Vendor: ${vendor}`}</h2>
          <SelectForm vendorDetails={vendorDetails} />
          <input
            type="number"
            placeholder={vendorDetails.condition.condition_parameter_2}
            onChange={(e) => console.log(e.target.value)}
            id={vendor}
          />
          <button type="submit">Submit</button>
        </label>
      </form>
      )}
    </>
  );
};

export default VendorDetails;
