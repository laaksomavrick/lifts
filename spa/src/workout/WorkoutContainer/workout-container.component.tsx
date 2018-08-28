import * as React from "react";
import { connect } from "react-redux";
import { IWorkout } from "../../common/common.interface";
import { getWorkout } from "../workout.actions";

interface IWorkoutContainerProps {
  setup: () => void;
  workouts: IWorkout[];
}

class WorkoutContainer extends React.Component<IWorkoutContainerProps> {
  public componentDidMount() {
    const { setup } = this.props;
    setup();
  }

  public render() {
    const { workouts } = this.props;

    return (
      <div>
        <h1>workouts</h1>
        {workouts.map((workout: IWorkout) => {
          return <h1 key={workout.name}>{workout.name}</h1>;
        })}
      </div>
    );
  }
}

/* tslint:disable-next-line:no-any */
const mapStateToProps = (state: any) => {
  return {
    workouts: state.workout.data
  };
};

/* tslint:disable-next-line:no-any */
const mapDispatchToProps = (dispatch: any) => {
  return {
    setup: () => {
      dispatch(getWorkout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutContainer);
