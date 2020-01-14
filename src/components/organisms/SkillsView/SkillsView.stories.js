import React from 'react';
import { storiesOf } from '@storybook/react';
import SkillsView from './SkillsView';

const listData = [
  {
    list: {
      listTitle: 'Working knowlage',
      listItems: [
        { value: 'HTML5' },
        { value: 'CSS' },
        { value: 'Figma' },
        { value: 'JavaScript' },
        { value: 'GIT' },
      ],
    },
  },
];

storiesOf('Skills View', module).add('Skills View', () => (
  <>
    <SkillsView mainTitle="Skills" listData={listData} />
    <SkillsView
      listData={[
        {
          list: {
            listTitle: 'Know something about',
            listItems: [
              { value: 'Progressive web apps' },
              { value: 'NPM' },
              { value: 'Gulp' },
              { value: 'React JS' },
            ],
          },
        },
      ]}
    />
    <SkillsView
      listData={[
        {
          list: {
            listTitle: 'Want to learn',
            listItems: [{ value: 'React native' }, { value: 'Node.js' }],
          },
        },
      ]}
    />
  </>
));
