import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from "./Filter";

class App extends Component {
  constructor() {
    let newHogs = hogs.map((hog) => {
      return {
        ...hog,
        hidden: false,
      };
    });

    super();
    this.state = {
      hogs: newHogs,
      greased: false,
      sortBy: "",
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
    let updatedHogs = this.state.hogs.filter(hog=>hog.hidden === false)
    if (this.state.greased) {
      updatedHogs = this.state.hogs.filter((hog) => hog.greased);
    }
    if (this.state.sortBy === "weight") {
    }
    return updatedHogs;
  };

  sortBy = (e) => {
    this.setState({
      sortBy: e.target.value,
    });
  };

  hideMe = (hname) => {
    let updateHogs = this.state.hogs.map(hog=>{
      if(hog.name === hname){
        return {
          ...hog,
          hidden: true
        }
      }else{
        return hog
      }
    })

    this.setState({
      hogs: updateHogs
    })
  };

  render() {
    const showHogs = this.hogsToShow();
    return (
      <div className="App">
        <Nav handleToggle={this.handleToggle} sortBy={this.sortBy} />
        <HogContainer hogs={showHogs} hideMe={this.hideMe} />
        <Filter />
      </div>
    );
  }
}

export default App;
