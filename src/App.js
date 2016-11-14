import React, { Component } from 'react';

  class Signup extends Component {
    constructor(props){
      super()
      this.state = {
        email: "",
        password: ""
      }
    }

    handleClick(){
      this.setState({
        email: prompt("What is your email?"),
        password: prompt("What is your password?")
      })
    }

  render() {
    return (
      <div>
      <form>
          Email:
          <input type="text" email="email" />
          Password:
          <input type="password" password="password" />
          <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Signup;
