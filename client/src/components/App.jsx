import React from 'react';
import AddCow from './AddCow.jsx';
import CurrentCow from './CurrentCow.jsx';
import CowList from './CowList.jsx';
import exampleData from '../../../database/exampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: exampleData,
      currentCow: '',
      currentDescription: '',
      newCow: '',
      newDescription: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCowChange = this.handleCowChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleCowChange(e) {
    this.setState({newCow: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({newDescription: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = this.state.list;
    const newCow = {};
    newCow.name = this.state.newCow;
    newCow.description = this.state.newDescription;
    newCow.id = list.length + 1;
    list.push(newCow);
    this.setState({list});
  }

  handleClick(index) {
    const list = this.state.list;
    this.setState({
      currentCow: list[index].name,
      currentDescription: list[index].description
    });
  }

  render() {
    return (
      <div>
        <div><br></br></div>
        <div>
          <AddCow handleCowChange={this.handleCowChange} handleDescriptionChange={this.handleDescriptionChange} handleSubmit={this.handleSubmit}/>
        </div>
        <div>
          <CurrentCow currentCow={this.state.currentCow} currentDescription={this.state.currentDescription} />
        </div>
        <div>
          <CowList cows={this.state.list} handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default App;