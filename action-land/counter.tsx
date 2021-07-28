import React, {FC} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {emitter} from './bootstrap';

export interface Counter {
  count: number;
}

export interface Action {
  type: string | number;
  value?: unknown;
}

const init: () => Counter = () => {
  return {
    count: 0,
  };
};

const update: (a: Action, s: Counter) => Counter = (a, s) => {
  switch (a.type) {
    case 'increase':
      return {
        ...s,
        count: s.count + 1,
      };
    case 'reset':
      return {
        ...s,
        count: 0,
      };
    default:
      return s;
  }
};

const command: (a: Action, s: Counter) => Action = (a, s) => {
  switch (a.type) {
    case 'save':
      return {
        type: 'makeAPI',
        value: {
          url: 'www.google.com',
          count: s.count,
        },
      };
    default:
      return {
        type: '',
      };
  }
};

interface ViewParams {
  s: Counter;
  e: emitter;
}

const view: FC<ViewParams> = viewParams => {
  return (
    <SafeAreaView>
      <Text>{viewParams.s.count}</Text>
      <Button
        title={'Increase'}
        onPress={() => {
          viewParams.e({type: 'increase'});
        }}
      />
    </SafeAreaView>
  );
};

export const counter = {
  init: init,
  update: update,
  command: command,
  view: view,
};
