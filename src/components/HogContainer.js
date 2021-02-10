import React, { Component} from 'react'
import HogTile from './HogTile'


class HogContainer extends Component {

    render(){

        return(
            <div className="ui grid container">
                {this.props.hogs.map(hog=> <HogTile {...hog} />)}

            </div>
        )
    }
}

export default HogContainer