import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isInputFilled, setisInputFilled] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setisInputFilled(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setisInputFilled(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isInputFilled?'invalid':''}`}>
        <label
          // style={{
          //   color: !isInputFilled ? 'red' : 'black'
          // }}
        >
          Course Goal
        </label>

        <input
          // style={{
          //   borderColor: !isInputFilled ? 'red' : '#ccc',
          //   backgroundColor :!isInputFilled ? 'salmon' : 'transparent'
          // }}
          type="text"
          onChange={goalInputChangeHandler} 
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
