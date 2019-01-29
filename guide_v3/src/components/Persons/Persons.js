import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons;
  //   //return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] Inside render');
    return this.props.persons.map((person, index) => {
      return (<Person
        ref={this.lastPersonRef}
        key={person.id}
        click={() => {this.props.clicked(index)}}
        position={index}
        name={person.name}
        age={person.age}
        changed={(event) => this.props.changed(event, person.id)}
      />
      );
    });
  }
}

export default Persons;
