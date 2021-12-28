const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query pageLink {
      allStrapiReviews {
        nodes {
          strapiId
          link
        }
      }
    }

  `)

  data.allStrapiReviews.nodes.forEach(node => {
    actions.createPage({
      path: '/page/' + node.strapiId + '/' + node.link,
      component: path.resolve('./src/pages/page.js'),
      context: { strapiId: node.strapiId, link: node.link }
    })
  })

}