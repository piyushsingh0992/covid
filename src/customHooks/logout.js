import { useDispatch } from "react-redux";
import { resetauthSlice } from "../container/login/authSlice";

export default function useLogout() {
  const dispatch = useDispatch();

  return function () {
    dispatch(resetauthSlice());
    setupAuthHeader();
  };
}
