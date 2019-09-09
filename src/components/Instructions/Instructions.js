import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { ADD_INSTRUCTIONS, ADD_RECIPE } from "./../../store";

class Instructions extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState()
    this.state = {
      instructions: reduxState.instructions,
      input: ""
    };
  }
componentDidMount() {
  store.subscribe(() => {
    const reduxState = store.getState()
    this.setState({instructions: reduxState.instructions})
  })
}

  handleChange(val) {
    this.setState({
      input: val
    });
  }
  addInstruction() {
    store.dispatch({
      type: ADD_INSTRUCTIONS,
      payload: this.state.input
    })
    // Send data to Redux state
    this.setState({
      input: ""
    });
  }
  create() {
    store.dispatch({
      type: ADD_RECIPE,
      payload: this.state.input
    })

    this.setState({input:""})
    // Create new recipe in Redux state
  }
  render() {
    const instructions = this.state.instructions.map((instructions, i) => {
      return <li key={i}>{instructions}</li>;
    });
    return (
      <div className="List forms">
        <h2>Instructions:</h2>
        <div className="form_items_container">
          <ol className='list'>{instructions}</ol>
        </div>
        <div className="add_container">
          <input
            value={this.state.input}
            onChange={e => this.handleChange(e.target.value)}
          />
          <button className="add_button" onClick={() => this.addInstruction()}>
            Add Instruction
          </button>
        </div>
        <Link to="/add/ingredients">
          <button className='left_button'>Previous</button>
        </Link>
        <Link to="/">
          <button className='right_button' onClick={() => this.create()}>Create</button>
        </Link>
      </div>
    );
  }
}

export default Instructions;
