import { Dispatch, AnyAction } from 'redux';
import { conditionConfiguration } from '../Actions';

interface IProps {
  type: string,
  payload: unknown;
}

export const fetchConfigurationCondition = () => async (dispatch: any) => {
  const setting = {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': 'https://api-test.pharmit.de',
    },
  };
  try {
    const response = await fetch(
      'https://api-test.pharmit.de/condition_configurations/1681',
      setting,
    );
    const data = await response.json();
    dispatch(conditionConfiguration(data));
  } catch (error) {
    dispatch(conditionConfiguration({
      id: 1681,
      name: 'Shipment Provider Config - does not work for us',
      author_id: 42,
      created_at: '2017-12-16T13:00+00:00',
      updated_at: '2021-09-03T11:23+00:00',
      configuration_type: 'shipment_provider',
      configuration: [
        {
          return_value: 'UPS',
          condition: {
            condition_parameter_1: 'Order.total_weight',
            condition_operator: '>=',
            condition_parameter_2: '15000',
          },
        },
        {
          return_value: 'DHL',
          condition: {
            condition_parameter_1: 'Order.total_weight',
            condition_operator: '>',
            condition_parameter_2: '5000',
          },
        },
        {
          return_value: 'GLS',
          condition: {
            condition_parameter_1: 'Order.total_weight',
            condition_operator: '>',
            condition_parameter_2: '0',
          },
        },
      ],
    }));
  }
};
