import { HIDE_ALERT, SHOW_ALERT } from "./types";

export const hideAlert = () => ({ type: HIDE_ALERT });

export const showAlert = (text, shortMessage, type) => ({
  type: SHOW_ALERT,
  payload: { text, shortMessage, type },
});
