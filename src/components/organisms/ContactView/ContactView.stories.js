import React from 'react';
import { storiesOf } from '@storybook/react';
import ContactView from './ContactView';

storiesOf('ContactView', module).add('ContactView', () => (
  <ContactView
    title="Contact me 😄"
    paragraph="I’m open for new opportunities. If you have one for me we should talk!"
    linkedInLink="https://pl.linkedin.com/"
    githubLink="https://github.com/"
    email="michallpawlaczyk@gmail.com"
  />
));
