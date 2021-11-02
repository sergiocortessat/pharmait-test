// export const userFetch using async fetch

export const fetchUser = async () => {
  const setting = {
    method: "GET",
    headers: {
      accept: "application/json",
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
