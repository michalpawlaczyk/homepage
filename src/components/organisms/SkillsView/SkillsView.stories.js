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
      ]}
    />
  </>
));
