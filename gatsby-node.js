const path = require("path")
const postTemplate = path.resolve(`./src/templates/project.js`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `Mdx`) {
		const parent = getNode(node.parent)
		let collection = parent.sourceInstanceName
		createNodeField({
			node,
			name: "collection",
			value: collection,
		})
	}
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
	const result = await graphql(`
		query MyQuery {
			allMdx(filter: { frontmatter: { collection: { eq: "projects" } } }) {
				nodes {
					frontmatter {
						slug
					}
					id
					internal {
						contentFilePath
					}
				}
			}
		}
	`)
	if (result.errors) {
		reporter.panicOnBuild("Error loading MDX result", result.errors)
	}
	// Create blog post pages.
	const posts = result.data.allMdx.nodes 

	posts.forEach((node) => {
		createPage({
			// As mentioned above you could also query something else like frontmatter.title above and use a helper function
			// like slugify to create a slug
			path: node.frontmatter.slug,
			// Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
			component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
			// You can use the values in this context in
			// our page layout component
			context: { id: node.id },
		})
	})

	// result.data.allMdx.edges.forEach((post) => {
	// 	createPage({
	// 		path: post.node.frontmatter.tag,
	// 		component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
	// 		context: {
	// 			id: post.node.id,
	// 		},
	// 	})
	// })
}
