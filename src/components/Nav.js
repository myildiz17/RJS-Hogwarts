import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <div>
          <input type="checkbox" onChange={props.handleToggle} />
          <label for="vehicle1"> Select Greased</label>
        </div>
        Select to sort: 
          <select name="list" id="personlist" onChange={props.sortBy}>
            <option value="11"></option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
       
    </div>
  );
};

export default Nav;
