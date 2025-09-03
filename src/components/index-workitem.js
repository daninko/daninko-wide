import React, { useState } from "react"
import Slideshow from "./slideshow"

const IndexWorkItem = ({ data }) => {
	const [hover, setHover] = useState(false)

	return (
		<div className="flex flex-nowrap block mr-[30rem]">
			{data.frontmatter.case == "yes" ? (
				<a href={"/" + data.frontmatter.slug}>
					<Slideshow />
				</a>
			) : (
				<>
					<Slideshow />
				</>
			)}

			<div className="h-[100dvh] ml-[100px] flex items-end">
				<div className="my-[15dvh]">
					{data.frontmatter.case == "yes" ? (
						<a href="#">
							<p className="w-[35ch]">{data.frontmatter.blurb}</p>
							<ul>
								{data.frontmatter.results.map((i) => {
									return <li>{i}</li>
								})}
							</ul>
							<div>
								<span>in depth</span>
							</div>
						</a>
					) : (
						<>
							<p className="w-[35ch]">{data.frontmatter.blurb}</p>
							<ul>
								{data.frontmatter.results.map((i) => {
									return <li key={"list-"+i}>{i}</li>
								})}
							</ul>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default IndexWorkItem
