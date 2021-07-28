import {FC} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

interface Counter {
  count: number;
}

interface Action {
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

const view: FC<Counter> = s => {
  return (
    <SafeAreaView>
      <Text>{s.count}</Text>
      <Button title={'Increase'} />
    </SafeAreaView>
  );
};

export const counter = {
  init: init,
  update: update,
  command: command,
  view: view,
};
