import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module).add('Heading', () => <Heading>Heading Test</Heading>);
storiesOf('Heading', module).add('Heading_topLine', () => <Heading topLine>Heading Test</Heading>);
