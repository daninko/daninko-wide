// exports.onCreateNode = ({ node, getNode, actions }) => {
// 	const { createNodeField } = actions
// 	if (node.internal.type === `Mdx`) {
// 		const parent = getNode(node.parent)
// 		let collection = parent.sourceInstanceName
// 		createNodeField({
// 			node,
// 			name: 'collection',
// 			value: collection,
// 		})
// 	}
// }

// exports.shouldUpdateScroll = ({
// 	routerProps: { location },
// 	getSavedScrollPosition
//   }) => {
// 	const currentPosition = getSavedScrollPosition(location)
// 	const queriedPosition = getSavedScrollPosition({ pathname: `/random` })
  
// 	window.scrollTo(...(currentPosition || [0, 0]))
  
// 	return false
//   }

// exports.createPages = async ({ actions, graphql, reporter }) => {
// 	const result = await graphql(`
// 	  query {
// 		allMdx {
// 		  nodes {
// 			frontmatter {
// 			  tag
// 			}
// 		  }
// 		}
// 	  }
// 	`);
  
// 	if (result.errors) {
// 	  reporter.panic("failed to create posts ", result.errors);
// 	}
  
// 	const pages = result.data.allMdx.nodes;
  
// 	pages.forEach((page) => {
// 	  actions.createPage({
// 		path: page.frontmatter.tag,
// 		component: require.resolve("./src/templates/case-template.js"),
// 		context: {
// 		  pathSlug: page.frontmatter.tag,
// 		},
// 	  });
// 	});
//   };

// exports.createPages = async ({ graphql, actions: { createPage } }) => {
// 	const result = await graphql(`
// 		query MyQuery {
// 			allMdx(filter: { fields: { collection: { eq: "projects" } }, id: {} }) {
// 				nodes {
// 					id
// 					frontmatter {
// 						caption
// 						tag
// 						client
// 						description
// 					}
// 					internal {
// 						contentFilePath
// 					}
// 				}
// 			}
// 		}
// 	`)
// 	if (result.errors) {
// 		console.log(result.errors)
// 		return
// 	}
// 	const postTemplate = require.resolve('./src/templates/case-template.js')
// 	result.data.allMdx.nodes.forEach((post) => {
// 		createPage({
// 			path: post.frontmatter.tag,
// 			component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
// 			context: {
// 				id: post.id,
// 			},
// 		})
// 	})
// }