import React, { Component } from 'react';
import {styles, profiles, colors} from '../sampleContent';
import Styles from './Styles';
import RenderBox from './RenderBox';


class App extends Component {
  constructor() {
    super();
    this.state = {
      renderBox: {
        style: {
          baseImage: 'http://unsplash.it/1600/800'
        },
        color: 'red',
        profile: 'tuffRib'
      },
      styles: styles,
      profiles: profiles,
      colors: colors,
      loadingImage: 'test'
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
        <RenderBox bkgImage={this.state.renderBox.style.baseImage} color={this.state.renderBox.color} profile={this.state.renderBox.profile} />
      </div>
    );
  }
}

export default App;
