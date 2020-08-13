import React, { Component } from "react";
import "./login.css";
import { Redirect } from "react-router-dom";

export default class login extends Component {
  constructor(props) {
    super(props);
    let loggeddIn = false;
    this.state = {
      username: "",
      password: "",
      loggeddIn,
    };
    this.onChange = this.onChange.bind(this);
    this.submitform = this.submitform.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitform(e) {
    e.preventDefault();
    const { username, password } = this.state;
    if (username == "a" && password == "b") {
      localStorage.setItem("token", "kuhscukscah");
      this.setState({
        loggeddIn: true,
      });
    }

    //login magic
  }

  render() {
    if (this.state.loggeddIn) {
      return <Redirect to="/home"></Redirect>;
    }
    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.submitform}>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />

          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <br />
          <input type="submit"></input>
          <br />
        </form>
      </div>
    );
  }
}
