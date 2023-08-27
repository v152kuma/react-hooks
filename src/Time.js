import React from "react";
class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleString(),
      close: false
    };
  }

  componentDidUpdate(prevState) {
    if (prevState.currentTime !== this.state.currentTime) {
      console.log("Time is changing");
    }
  }

  componentWillUnmount() {
    console.log(
      `The time component is going to unmount at ${this.state.currentTime}`
    );
  }

  componentDidMount() {
    console.log(`This component is mounted at ${this.state.currentTime}`);

    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    return <h1>${this.state.currentTime}</h1>;
  }
}

export default Time;
