import React from 'react';
import LoadingSpinner from './LoadingSpinner';

class RenderBox extends React.Component
{
    constructor() {
        super();
        this.state = {
            loaded: false 
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.bkgImage !== this.props.bkgImage) {
            this.setState({loaded: false});
        }
    }

    render() {
        const {color, profile, style, bkgImage} = this.props;

        return (
            <div className="render-box">
                <img onLoad={() => this.setState({loaded: true})} className="render-box__bkg" src={bkgImage} alt="" />
                { !this.state.loaded &&
                    <LoadingSpinner />
                }
                <img className="render-box__frg" src={'images/' + style.toLowerCase() + '_' + color + '_' + profile + '.png'} alt="" />
            </div>
        );
    }

}

export default RenderBox;