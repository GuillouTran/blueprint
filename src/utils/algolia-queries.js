const escapeStringRegexp = require("escape-string-regexp")

const pageQuery = `
  query LandingQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
    return {
      objectID: id,
      ...frontmatter,
      ...fields,
      ...rest,
    }
  }
  
const queries = [
    {
        query: pageQuery,
        transformer: ({ data }) => data.allMarkdownRemark.edges.map(pageToAlgoliaRecord), // optional
        indexName: 'Posts', // overrides main index name, optional
    },
    ];

    module.exports = queries