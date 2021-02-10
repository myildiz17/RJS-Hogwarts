import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from "./Filter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs: hogs,
      greased: false,
      sortBy: ""
    };
  }

  handleToggle = () => {
    this.setState((prev) => {
      return {
        greased: !prev.greased,
      };
    });
  };

  hogsToShow = () => {
    let updatedHogs = this.state.hogs;
    if (this.state.greased) {
      updatedHogs = this.state.hogs.filter((hog) => hog.greased);
    }
    if(this.state.sortBy === "weight"){

    }
    return updatedHogs;
  };

  sortBy=(e)=>{
    
    this.setState({
      sortBy: e.target.value
    })
  }
  render() {
    const showHogs = this.hogsToShow();
    return (
      <div className="App">
        <Nav handleToggle={this.handleToggle} sortBy={this.sortBy}/>
        <HogContainer hogs={showHogs} />
        <Filter />
      </div>
    );
  }
}

export default App;
