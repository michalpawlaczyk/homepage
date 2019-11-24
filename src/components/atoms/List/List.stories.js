import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List';

const dummyData = [{ value: 'test' }, { value: 'test2' }, { value: 'test3' }];

storiesOf('List', module).add('List', () => <List items={dummyData} />);
