// export const userFetch using async fetch

export const fetchUser = async () => {
  const setting = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "https://api-test.pharmit.de",
    },
  };
  try {
    const response = await fetch(
      "https://api-test.pharmit.de/users/42",
      setting
    );
    const user = await response.json();
    return user;
  } catch (error) {
    return {
      id: 42,
      organization_id: 8,
      first_name: "Morpheus",
      last_name: "Neo",
      profile_img: "https://api-test.pharmit.de/profile_img/56",
    };
  }
};

export const fetchConditionConfiguration = async () => {
  const setting = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "https://api-test.pharmit.de",
    },
  };
  try {
    const response = await fetch(
      "https://api-test.pharmit.de/condition_configurations/1681",
      setting
    );
    const user = await response.json();
    return user;
  } catch (error) {
    return {
      id: 1681,
      name: "Shipment Provider Config - does not work for us",
      author_id: 42,
      created_at: "2017-12-16T13:00+00:00",
      updated_at: "2021-09-03T11:23+00:00",
      configuration_type: "shipment_provider",
      configuration: [
        {
          return_value: "UPS",
          condition: {
            condition_parameter_1: "Order.total_weight",
            condition_operator: ">=",
            condition_parameter_2: "15000",
          },
        },
        {
          return_value: "DHL",
          condition: {
            condition_parameter_1: "Order.total_weight",
            condition_operator: ">",
            condition_parameter_2: "5000",
          },
        },
        {
          return_value: "GLS",
          condition: {
            condition_parameter_1: "Order.total_weight",
            condition_operator: ">",
            condition_parameter_2: "0",
          },
        },
      ],
    };
  }
};
