import React from 'react';
import { storiesOf } from '@storybook/react';
import GitHubProjectCard from './GitHubProjectCard';

const dummyData = [{ value: 'test' }, { value: 'test2' }, { value: 'test3' }];

storiesOf('GitHubProjectCard', module).add('GitHubProjectCard', () => (
  <GitHubProjectCard
    name="Portfolio"
    description="This is example description"
    sourceUrl="github.com/michalpawlaczyk"
  />
));
