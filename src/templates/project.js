import React, { useEffect, useRef, useState } from "react"
import { MDXProvider } from "@mdx-js/react"
import { graphql } from "gatsby"
import { ReactLenis } from "lenis/react"
import { Header } from "../components/header"
import { Foot } from "../components/foot"

const shortcodes = { Foot }

const Post = ({ data, children }) => {
	return (
		<>
			<div className="flex flex-nowrap h-[100dvh]" style={{ width: "fit-content" }}>
				<ReactLenis
					root
					options={{
						orientation: "horizontal",
					}}
				/>
				<div className="project-title flex items-center pl-[100px] pr-[300px] min-w-[100dvw]">
					<h1 className="thanger">
						<span>{data.mdx.frontmatter.client}</span>
						<span>{data.mdx.frontmatter.project}</span>
					</h1>
				</div>
				<MDXProvider components={shortcodes}>{children}</MDXProvider>
			</div>
		</>
	)
}

export const Head = ({ data }) => {
	return (
		<>
			<Header data={data} />
		</>
	)
}

export const query = graphql`
	query ($id: String!) {
		site {
			siteMetadata {
				author
				description
				title
				url
				position
				homeHeadline
				contactMethods {
					link
					text
				}
			}
		}
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				client
				project
			}
		}
	}
`

export default Post
