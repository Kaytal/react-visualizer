import React from 'react';

class ColorCard extends React.Component
{

    render() {
        const {color, addColor} = this.props;
        return <h2 onClick={() => addColor(color)}>
            {color}
        </h2>;
    }

}

export default ColorCard;