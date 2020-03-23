/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'GitHub',
        // This is the field under which it's accessible
        fieldName: 'github',
        // URL to query from
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer 55fc457840bbde4196945e670ef6f481b48930a7`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        Theme: path.join(__dirname, 'src/Theme'),
        static: path.join(__dirname, 'src/static'),
      },
    },
  ],
};
