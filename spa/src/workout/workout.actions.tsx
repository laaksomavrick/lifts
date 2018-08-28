import axios from "axios";
import { Dispatch } from "redux";
import { ActionConstant } from "../common/common.constants";
import { IWorkout } from "../common/common.interface";

export const getWorkout = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get("workout");
    const workout: IWorkout[] = res.data;
    dispatch(setWorkout(workout));
  };
};

export const setWorkout = (newState: IWorkout[]) => {
  return {
    newState,
    type: ActionConstant.WORKOUT_SET
  };
};
