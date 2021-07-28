import React, {FC} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {Smitten} from '@action-land/smitten';
import {Action} from '@action-land/core';
import {matchC, matchR} from '@action-land/tarz';

export interface Counter {
  count: number;
}

const init: () => Counter = () => {
  return {
    count: 0,
  };
};

const update = matchR({
  increase: (a, s: Counter) => ({
    ...s,
    count: s.count + 1,
  }),
});

const command = matchC({
  save: (a, s: Counter) =>
    Action.of('makeAPI', {url: 'www.google.com', count: s.count}),
});

interface ViewParams {
  s: Counter;
  e: Smitten;
}

const view: FC<ViewParams> = viewParams => {
  return (
    <SafeAreaView>
      <Text>{viewParams.s.count}</Text>
      <Button
        title={'Increase'}
        onPress={() => {
          viewParams.e.of('increase').emit({});
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
