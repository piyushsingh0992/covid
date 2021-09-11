import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNews } from "../container/home/newsSlice";
export function useSearchNews(setter) {
  const dispatch = useDispatch();
  const [timer, timerSetter] = useState(null);
  return function (arg) {
    clearTimeout(timer);

    timerSetter(
      setTimeout(() => {
        if (arg?.length > 0) {
          dispatch(getNews(arg));
          setter(true);
        }
      }, 800)
    );
  };
}
