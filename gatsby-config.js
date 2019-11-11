/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "GitHub",
        // This is the field under which it's accessible
        fieldName: "github",
        // URL to query from
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer a0921bde6a8a1b0febc299d08bb5a3ea912b3acd`,
        },
      },
    },
  ],
}
