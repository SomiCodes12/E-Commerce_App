import axios from "axios";
import { server } from "../../server";

export const loadUser = () => {
  return async (dispatch: any) => {
    try {
      dispatch({
        type: "loadUserRequest",
      }); 
      const { data } = await axios.get(`${server}/getUser`,);
      dispatch({
        type: "loadUserSuccess",
        payload: data.user,
      });
    } catch (error : any) {
      dispatch({
        type: "loadUserFail",
        payload: error?.response?.data?.message,
      });
    }
  };
};
