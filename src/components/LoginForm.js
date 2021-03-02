import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    // set initial state of username/password to empty str.
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    // when char are input re-render input fields w/updated data
    this.setState({
      // keeping funct generic by using [event.target.name]
      [event.target.name]: event.target.value
    })
  }

  // callback of onSubmit event
  handleSubmit = event => {
    // prevent default to maintain control of form
    event.preventDefault()
    // handleLogin is only called IF BOTH fields are filled in
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }
  
//   handleSubmit = event => {
//     
//     event.preventDefault()
//     
//     if (!this.state.username && !this.state.password) {
//       // handleLogin gets called when form is submitted
//       this.props.handleLogin(this.state)
//     }
//   }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;