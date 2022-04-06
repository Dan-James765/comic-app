import axios from "axios";

export const getMarvelList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: "FAVOURITE_LIST_LOADING",
    });

    const apiURL =
      "https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288";
    const res = await axios.get(apiURL);
    dispatch({
      type: "FAVOURITE_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "FAVOURITE_LIST_FAIL",
    });
  }
};
