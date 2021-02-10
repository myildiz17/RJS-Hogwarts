import React, { Component} from 'react'
import HogTile from './HogTile'


class HogContainer extends Component {

    render(){

        return(
            <div className="ui grid container">
                {this.props.hogs.map(hog=> <HogTile {...hog} hideMe={this.props.hideMe}/>)}

            </div>
        )
    }
}

export default HogContainer