import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import Test from "./components/Test";

class App extends Component {
 
  render() {
    return (
      <div className="container">
        {/* inline css yazımı ve className kullanımı */}
        {/* <h4  className="header" style={{color:"red",fontSize:"20px"}}>
          App Component
        </h4>  */}
        <Test test="deneme"></Test>
        <Navbar title="User App"></Navbar>
        <hr></hr>
        <AddUser> </AddUser>
        <Users></Users>
      </div>
    );
  }
}

export default App;
