import { Reducer } from "redux";
import { ActionConstant } from "../common/common.constants";
import { IWorkout } from "../common/common.interface";

export interface IWorkoutState {
  data: IWorkout[];
  errors: any;
  loading: boolean;
}

const initialState: IWorkoutState = {
  data: [],
  errors: [],
  loading: false
};

// todo define type safey of actions?
const WorkoutReducer: Reducer<IWorkoutState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionConstant.WORKOUT_SET:
      return { ...state, data: action.newState };
    default:
      return initialState;
  }
};

export default WorkoutReducer;
