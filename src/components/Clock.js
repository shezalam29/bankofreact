import React from 'react';

// Clock component taken from React Docs/Class 
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  // Now it greets the user 
  render() {
    return (
      // Span tag now to be manipulated by Javascript
      <div align = 'center'>
        <h1> Greetings, <span id = "username">guest user</span>. It's currently {this.state.date.toLocaleTimeString()}. </h1>
      </div>
    );
  }
}
// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

export default Clock;