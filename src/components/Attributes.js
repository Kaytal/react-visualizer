import React from 'react';
import LocationToggle from './LocationToggle';

class Attributes extends React.Component
{

    render() {

        const {addWall} = this.props;


        return (
            <aside className="options-selector">
                <LocationToggle style={this.props.style} addWall={addWall} {...this.props} />
            </aside>
        );
    }

}

export default Attributes;