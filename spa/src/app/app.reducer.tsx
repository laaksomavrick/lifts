import { combineReducers } from "redux";
import WorkoutReducer from "../workout/workout.reducer";

const AppReducer = combineReducers({
  workout: WorkoutReducer
});

export default AppReducer;
