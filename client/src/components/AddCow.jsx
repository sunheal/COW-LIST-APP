import React from 'react';

const AddCow = (props) => (
  <form id='AddCow' onSubmit={props.handleSubmit}>
    <div>
      <label>Name: <input onChange={props.handleCowChange} /></label><br></br>
      <label>Description: <input onChange={props.handleDescriptionChange} /></label><br></br>
    </div>
      <button type='submit' form='AddCow' >Add Cow</button>
  </form>
);

export default AddCow;