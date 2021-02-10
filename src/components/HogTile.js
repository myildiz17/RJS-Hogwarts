import React, { Component } from "react";

class HogTile extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: true,
    };
  }
  renderImage = () => {
    const { greased, name, speciality, weight } = this.props;
    let pigName = name.split(" ").join("_").toLowerCase();
    let pigImage = require(`../hog-imgs/${pigName}.jpg`);
    return <img src={pigImage} width={300} height={300} />;
  };

  renderDetails = () => {
    const { greased, name, speciality, weight } = this.props;
    return (
        <div>
        <p>{speciality}</p>
        <p>{weight}</p>
      </div>
    );
};

showDetails = () => {
    this.setState((prev) => {
        return {
            showDetails: !prev.showDetails,
        };
    });
};

render() {
    const { greased, name, speciality, weight } = this.props;
    return (
      <div className="ui seven wide column pigTile">
        <p>{name}</p>
        {this.renderImage()}
        <div>
          <button onClick={this.showDetails}>Show Details</button>
        </div>
        <div>
          <button onClick={()=>this.props.hideMe(name)}>Hide Me</button>
        </div>
        {this.state.showDetails ? this.renderDetails() : null}
      </div>
    );
  }
}

export default HogTile;
