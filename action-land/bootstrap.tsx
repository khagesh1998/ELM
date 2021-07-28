import React from 'react';
import {Action, counter} from './counter';
import {SafeAreaView} from 'react-native';

export type emitter = (a: Action) => void;

export class Bootstrap extends React.Component {
  state = counter.init();

  e: emitter = a => {
    const newState = counter.update(a, this.state);
    this.setState(newState);
  };

  render() {
    return (
      <SafeAreaView>
        <counter.view s={this.state} e={this.e} />
      </SafeAreaView>
    );
  }
}
