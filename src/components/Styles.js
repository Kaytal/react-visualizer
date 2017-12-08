import React from 'react';

class Styles extends React.Component {

    constructor() {
        super();
        this.renderStyle = this.renderStyle.bind(this);
    }

    renderStyle(key) {
        const style = this.props.styles[key];

        return (
            <div onClick={() => this.props.addStyle(key)} className="style" style={{backgroundImage: 'url(' + style.thumbImage + ')'}}>
                <p>{style.name}</p>
            </div>
        )
    }

    render() {
        return (
            <div className="styles-row">
                { Object.keys(this.props.styles).map(this.renderStyle) }
            </div>
        );
    }
}

export default Styles;