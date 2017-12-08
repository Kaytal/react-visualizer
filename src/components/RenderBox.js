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
        if (nextProps.bkgImage != this.props.bkgImage) {
            this.setState({loaded: false});
        }
    }

    render() {
        return (
            <div className="render-box">
                <img onLoad={() => this.setState({loaded: true})} className="render-box__bkg" src={this.props.bkgImage} />
                { !this.state.loaded &&
                    <LoadingSpinner />
                }
                <div className="render-box__frg">
                    <h1>{this.props.color}</h1>
                    <h2>{this.props.profile}</h2>
                </div>
            </div>
        );
    }

}

export default RenderBox;