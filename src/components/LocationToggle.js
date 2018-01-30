import React from 'react';
import ColorCard from './ColorCard';
import ProfileCard from './ProfileCard';

class LocationToggle extends React.Component
{

  constructor() {
    super()
    this.state = {
      isWall: false
    }
  }

  toggle() {
    let wallToggle = this.state.isWall;
    wallToggle = !wallToggle;
    this.setState({isWall: wallToggle});
  }

  renderProfile(profile,key) {

    return (
        <ProfileCard key={key} profile={profile} addProfile={this.state.isWall ? this.props.addWallProfile : this.props.addProfile} />
    )
  }


  renderColor(color,key) {

      return (
          <ColorCard key={key} color={color} addColor={this.state.isWall ? this.props.addWallColor : this.props.addColor} />
      )
  }


  render() {

    const {colors, profiles} = this.props;

    const toggleControls = this.props.style === "Industrial"
    ? 
    <div onClick={ this.toggle.bind(this) }>
        <div>
           wall
        </div>
        <div>
            roof
        </div>
    </div>
    : '' ;

    return (
      <div>
        
        {toggleControls}

        <div className="profiles">
            {Object.keys(profiles).map((profile,idx) => this.renderProfile(profile,idx))}
        </div>

        <div className="colors">
            {colors.map((color,idx) => this.renderColor(color,idx))}
        </div>
      </div>
    )
  }
};

export default LocationToggle;