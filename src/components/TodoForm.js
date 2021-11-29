import React from 'react';

export default class TodoForm extends React.Component {
  constructor(){
    super();

  }

  render(){
    return(
      <form>
        <input type='text' name='todo' placeholder='TODO'/>
        <button>Add a Todo!</button>
      </form>
    )
  }
}
