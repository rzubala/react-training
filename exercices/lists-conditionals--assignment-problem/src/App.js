import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    inputText: ""
  }

  textChangeHandler = (event) => {
      const text = event.target.value;
      this.setState({inputText: text});
  }

  deleteCharAtIndex = (event, index) => {
    const text = this.state.inputText;
    const charsArray = text.split('');
    charsArray.splice(index, 1);
    const newText = charsArray.join('');
    this.setState({inputText: newText});
  }

  render() {

    const charsArray = this.state.inputText.split('');
    const chars = charsArray.map((char, index) => {
      return (
        <CharComponent char={char} key={index} click={(event) => this.deleteCharAtIndex(event, index)}/>
      );
    });

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <input type="text" onChange={this.textChangeHandler} value={this.state.inputText} />
        <p>{this.state.inputText}</p>
        <ValidationComponent textLength={this.state.inputText.length} />
        {chars}
      </div>
    );
  }
}

export default App;
