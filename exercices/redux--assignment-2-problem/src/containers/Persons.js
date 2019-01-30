import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import { connect } from 'react-redux';

class Persons extends Component {


    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        // this.setState( ( prevState ) => {
        //     return { persons: prevState.persons.concat(newPerson)}
        // } );
        this.props.onAddPerson(newPerson);
    }

    personDeletedHandler = (personId) => {
        // this.setState( ( prevState ) => {
        //     return { persons: prevState.persons.filter(person => person.id !== personId)}
        // } );
        this.props.onDeletePerson(personId);
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.storedPersons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    storedPersons: state.persons
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPerson: (name, age) => dispatch({type: 'ADD', personData: {name: name, age: age}}),
    onDeletePerson: (id) => dispatch({type: 'DELETE', value: id}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
