import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "./containers/Container";
// import containers
import "./App.css";

class App extends Component {
  componentDidMount() {
    getData();
    //anything you want to run straight away
  }

  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getData() {
    dispatch(() => {
      fetch(`API URL`)
        .then(res => res.json())
        .then(items => {
          dispatch({
            type: "ADD_ITEMS",
            items
          });
        });
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(App);
