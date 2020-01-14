import React from 'react';
import { storiesOf } from '@storybook/react';
import MainView from './MainView';
import image from 'static/webdev3.svg';

storiesOf('MainView', module).add('Main', () => (
  <MainView
    title={`Hey there! 👋 I’m Michał and I’m aspiring to frontend developer`}
    image={image}
    imageAlt={'Web developer.'}
  />
));
