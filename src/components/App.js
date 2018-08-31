import React, { Component } from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Exercises from './Excercises/index';
import { muscles, exercises } from '../store';

class App extends Component {
  state = {
    exercises
  }

  getExercisesByMuscles = () => {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;
      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise];

      return exercises;
    }, {}));
  }

  render() {
    return (
      <div>
        <Header />
        <Exercises exercises={this.getExercisesByMuscles()} />
        <Footer muscles={muscles} />
      </div>
    );
  }
}

export default App;
