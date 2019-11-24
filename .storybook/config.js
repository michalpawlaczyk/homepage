import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

// import { configure } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// // automatically import all files ending in *.stories.js
// configure(require.context('../src', true, /\.stories\.js$/), module);
// global.___loader = {
//   enqueue: () => {},
//   hovering: () => {},
// };
// global.__PATH_PREFIX__ = '';
// window.___navigate = pathname => {
//   action('NavigateTo:')(pathname);
// };
// addDecorator(story => <GlobalStyle>{story()}</GlobalStyle>);
