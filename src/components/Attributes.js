import React from 'react';
import ColorCard from './ColorCard';
import ProfileCard from './ProfileCard';

class Attributes extends React.Component
{


    renderColor(color,key) {

        return (
            <ColorCard key={key} color={color} />
        )
    }

    render() {

        const {colors, profiles} = this.props;


        return (
            <aside className="options-selector">
                <div className="colors">
                    {colors.map((color,idx) => this.renderColor(color,idx))}
                </div>
            </aside>
        );
    }

}

export default Attributes;