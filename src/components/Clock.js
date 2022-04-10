import React from 'react';

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
  render() {
    return (
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