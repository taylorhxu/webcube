
import styles from './App.scss';
import React, { Component } from 'react';
import cssModules from 'react-css-modules';

@cssModules(styles)
export default class App extends Component {

  render() {
    return (
      <div
        id="{{camelCase entryName}}Root"
        styleName="root">
        <div styleName="page">
        </div>
      </div>
    );
  }

}
