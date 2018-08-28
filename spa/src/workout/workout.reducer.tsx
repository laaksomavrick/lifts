import { Reducer } from "redux";
import { IWorkout } from "../common/common.interface";

interface IWorkoutState {
  data: IWorkout[];
  errors: any;
  loading: boolean;
}

const initialState: IWorkoutState = {
  data: [],
  errors: [],
  loading: false
};

const WorkoutReducer: Reducer<IWorkoutState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    default:
      return initialState;
  }
};

export default WorkoutReducer;
