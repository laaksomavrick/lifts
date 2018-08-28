import * as React from "react";
import { Route } from "react-router-dom";
import WorkoutContainer from "../workout/WorkoutContainer/workout-container.component";
import "./app.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Route exact={true} path="/" component={WorkoutContainer} />
      </div>
    );
  }
}

export default App;
