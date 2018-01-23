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
          name: 'Simple'
        },
        color: 'red',
        profile: 'tuffRib'
      },
      styles: styles,
      profiles: profiles,
      colors: colors
    }
    this.addStyle = this.addStyle.bind(this);
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

  addColor(key) {
    let renderBox = this.state.renderBox;
    renderBox.color = this.state.colors[key];
    this.setState({renderBox: renderBox});
  }

  render() {
    return (
      <div className="App">
        <Styles styles={this.state.styles} addStyle={this.addStyle} />
        <RenderBox style={this.state.renderBox.style.name} bkgImage={this.state.renderBox.style.baseImage} color={this.state.renderBox.color} profile={this.state.renderBox.profile} />
        <Attributes profiles={this.state.profiles} colors={this.state.colors} addProfile={this.addProfile} addColor={this.addColor} />
      </div>
    );
  }
}

export default App;
