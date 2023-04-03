import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        { id: 0, value: 'React', done: false, delete: false }
      ]
    }
  }

  render () {
    return (
      <div>
        <h1>My First React App -- todo-list</h1>
        <div>
          <input type="text" placeholder="add something ..." />
          <button type="submit">添加</button>
        </div>
        <ul>
          {
            this.state.todoItems.map((item) => {
              if (item.delete) return;
              return (
                <li key={item.id}>
                  <label>{item.value}</label>
                  <button>删除</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}