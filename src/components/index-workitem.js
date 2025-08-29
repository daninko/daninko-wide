import React, { useState } from "react"
import Slideshow from "./slideshow"

const IndexWorkItem = ({ data }) => {
	const [hover, setHover] = useState(false)

	return (
		<div className="flex flex-nowrap block mr-[300px]" style={{ width: "fit-content" }}>
			{data.frontmatter.case == "yes" ? (
				<>
					<Slideshow />

					<div className="h-[100dvh] w-[35ch] pl-[100px] flex items-end">
						<div className="my-[15dvh]">
							<p>{data.frontmatter.blurb}</p>
							<ul>
								{data.frontmatter.results.map((i) => {
									return <li>{i}</li>
								})}
							</ul>
							{data.frontmatter.case == "yes" && (
								<div>
									<span>in depth</span>
								</div>
							)}
						</div>
					</div>
				</>
			) : (
				<>
					{/* <Slideshow />
					<div className="h-[100dvh] w-[35ch] pl-[100px] flex items-end">
						<div className="my-[15dvh]">
							<p>{data.frontmatter.blurb}</p>
							<ul>
								{data.frontmatter.results.map((i) => {
									return <li>{i}</li>
								})}
							</ul>
							{data.frontmatter.case == "yes" && (
								<div>
									<span>in depth</span>
								</div>
							)}
						</div>
					</div> */}
				</>
			)}
		</div>
	)
}

export default IndexWorkItem
