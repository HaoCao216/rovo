import React from 'react'
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: [],
      color: 'green',
      autoPlay: true,
      time: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.ListItems = this.ListItems.bind(this);
    this.PushArray = this.PushArray.bind(this);
    this.RemoveArray = this.RemoveArray.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  PushArray() {
    if (this.state.value.length > 1) {
      this.state.data.push(
        {
          name: this.state.value
        }
      )
      this.setState({
        data: this.state.data
      })
    }
    else {
      return;
    }
  }

  RemoveArray(e) {
    var index = e.target.value;
    var updateddata = this.state.data.filter(data => {
      return data.name !== index;
    })
    const data3 = [].concat(updateddata)
    this.setState({
      data: data3
    })
  }

  ListItems() {
    return (
      <div>
        <ul>
          {this.state.data.map((item, index) =>
            <li key={index}>
              <span>{item.name}</span>
              <button onClick={this.RemoveArray} value={item.name}> x </button>
            </li>
          )}
        </ul>
      </div>
    )
  }


  render() {
    const ListItems = this.ListItems
    return (
      <div id='App'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
        <button onClick={this.PushArray}>Add</button>
        <ListItems />
        <div  >
          <h1 >
            Hello! i will be stronger
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
