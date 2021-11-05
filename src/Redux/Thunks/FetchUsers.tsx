import {userData} from '../Actions'
import { Dispatch, AnyAction } from 'redux'


interface IProps {
  type: string, 
  payload: {};
}
export const fetchStaff = () => {
    return async function (dispatch: any) {
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
        dispatch(userData(user));
      } catch (error) {
        dispatch(userData({
          id: 42,
          organization_id: 8,
          first_name: "Morpheus",
          last_name: "Neo",
          profile_img: "https://api-test.pharmit.de/profile_img/56",
        }
        ));
      }
    }
  }