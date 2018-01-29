import React, { Component } from 'react';
import {styles, profiles, colors} from '../sampleContent';
import Styles from './Styles';
import RenderBox from './RenderBox';
import Attributes from './Attributes';


class App extends Component {
  constructor() {
    super();
    this.state = {
      renderBox: {
        style: {
          baseImage: 'images/simple.jpg',
          name: styles[Object.keys(styles)[0]].name
        },
        color: colors[0],
        profile: {
          name: profiles[Object.keys(profiles)[0]].name
        },
        wall: {
          color: colors[0],
          profile: {
            name: profiles[Object.keys(profiles)[0]].name
          },
          style: {
            name: 'Industrial'
          }
        }
      },
      styles: styles,
      profiles: profiles,
      colors: colors
    }
    this.addStyle = this.addStyle.bind(this);
    this.addProfile = this.addProfile.bind(this);
    this.addColor = this.addColor.bind(this);
    this.addWall = this.addWall.bind(this);
    this.addWallColor = this.addWallColor.bind(this);
    this.addWallProfile = this.addWallProfile.bind(this);
  }

  addStyle(key) {
    let renderBox = this.state.renderBox;
    renderBox.style = this.state.styles[key];
    this.setState({renderBox: renderBox});
  }

  addProfile(key) {
    let renderBox = this.state.renderBox;
    renderBox.profile = this.state.profiles[key];
    this.setState({renderBox: renderBox});
  }

  addColor(color) {
    let renderBox = this.state.renderBox;
    renderBox.color = color;
    this.setState({renderBox: renderBox});
  }

  addWall(
    color = this.state.renderBox.wall.color ? this.state.renderBox.wall.color : this.state.renderBox.color, 
    profile = this.state.renderBox.wall.profile.name ? this.state.renderBox.wall.profile.name : this.state.renderBox.profile.name,
    style = 'industrial') {
    let renderBox = this.state.renderBox;
    renderBox.wall = {
      color: color,
      profile: {
        name: profile
      },
      style: {
        name: style
      }
    };
    this.setState({renderBox: renderBox});
  }

  addWallColor(color) {
    let renderBox = this.state.renderBox;
    renderBox.wall.color = color;
    this.setState({renderBox: renderBox});
  }

  addWallProfile(profile) {
    let renderBox = this.state.renderBox;
    renderBox.wall.profile = this.state.profiles[profile];
    this.setState({renderBox: renderBox});
  }

  render() {
    return (
      <div className="App">
        <Styles styles={this.state.styles} addStyle={this.addStyle} />
        <div className="building-container">
          <RenderBox style={this.state.renderBox.style.name} bkgImage={this.state.renderBox.style.baseImage} color={this.state.renderBox.color} profile={this.state.renderBox.profile} />
          <Attributes style={this.state.renderBox.style.name} profiles={this.state.profiles} colors={this.state.colors} addProfile={this.addProfile} addColor={this.addColor} addWallColor={this.addWallColor} addWallProfile={this.addWallProfile} />
        </div>
      </div>
    );
  }
}

export default App;
