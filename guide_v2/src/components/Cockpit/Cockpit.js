import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = '';
  const assignedClasses = [];

  if (props.showPersons) {
      btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>it's working</p>
      <button className={btnClass} onClick={props.click}>Toggle Persons</button>
    </div>
  );
}

export default cockpit;
