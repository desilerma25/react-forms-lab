import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      // sets initial state of maxChars at 280 and message to empty str.
      maxChars: 280,
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      // updates state of maxChars - length of input value
      maxChars: this.props.maxChars - event.target.value.length,
      // updates state of message to input value
      message: event.target.value
    })
  } 

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value={this.state.message} type="text" name="message" id="message" />
        Characters remaining: {this.state.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
