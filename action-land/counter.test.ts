import {counter} from './counter';
// import * as assert from 'assert';
import {assert} from 'chai';

describe('counter', () => {
  describe('update', () => {
    test('increase', () => {
      const state = counter.init();
      const actual = counter.update({type: 'increase'}, state).count;
      const expected = 1;
      assert.deepEqual(actual, expected);
    });
  });
});
