
const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD':
      const newPerson = {
          id: Math.random(),
          name: action.personData.name,
          age: action.personData.age
      };
      const newPersons = state.persons.concat(newPerson);
      return {
        ...state,
        persons: newPersons
      };
    case 'DELETE':
      const updatedPersons = state.persons.filter(person => person.id !== action.value);
      return {
        ...state,
        persons: updatedPersons
      };
  }
  return state;
}

export default reducer;
