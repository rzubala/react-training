import React from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
  let btnClass = classes.Button;
  const assignedClasses = [];

  if (props.showPersons) {
      btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>it's working</p>
      <button className={btnClass} onClick={props.click}>Toggle Persons</button>
      <button onClick={props.login}>Log in</button>
    </Aux>
  );
}

export default cockpit;
