import React from 'react';

class ColorCard extends React.Component
{

    render() {
        const {color} = this.props;
        return <h2>{color}</h2>;
    }

}

export default ColorCard;