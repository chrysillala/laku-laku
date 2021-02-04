// https://www.gatsbyjs.com/docs/tutorial/part-seven/

// If you want the same functionality for files that are remotely hosted online and not located in your Git repo,
// gatsby-source-filesystem has an API called createRemoteFileNode to solve this.
// we can use the createRemoteFileNode process and get the same benefits of gatsby-transformer-sharp with externally sourced images.

const path = require(`path`)
const { createFilePath, createRemoteFileNode } = require(`gatsby-source-filesystem`)

// create file nodes for the custom featuredImgUrl Frontmatter field.
exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      featuredImg: File @link(from: "featuredImg___NODE")
    }

    type Frontmatter {
      title: String!
      featuredImgUrl: String
      featuredImgAlt: String
    }
  `)
}


exports.onCreateNode = async ({ node, getNode, actions, store, cache, createNodeId }) => {
  const { createNodeField, createNode } = actions

  // create slug from post file name
  if (node.internal.type === `MarkdownRemark`) {
    const slug = await createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }

  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (node.internal.type === `MarkdownRemark` && node.frontmatter.featuredImgUrl !== null) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.featuredImgUrl, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's Redux store
    })

    // if the file was created, attach the new node to the parent node
    if(fileNode) {
      node.featuredImg___NODE = fileNode.id
    }
  }
}


exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post-detail.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })

  // console.log(JSON.stringify(result, null, 4))
}