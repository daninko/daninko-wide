import React from "react";

import Nav from "../components/nav";

import Cloud from "../images/cloud.png"
import Forest from "../images/forest.png"
import Gold from "../images/gold.png"
import Salmon from "../images/salmon.png"
import Sky from "../images/sky.png"

const Index = () => {
	return(
		<>
			<Nav></Nav>
			<main className="home-main">
				<section className="slide-container">
					<div className="slide-element">
						<figure className="slide-figure">
							<figcaption className="slide-figure-caption">testing</figcaption>
							<img src={Cloud} />
						</figure>
					</div>
					<div className="slide-element">
						<figure className="slide-figure">
							<figcaption className="slide-figure-caption">testing</figcaption>
							<img src={Forest} />
						</figure>
					</div>
					<div className="slide-element">
						<figure className="slide-figure">
							<figcaption className="slide-figure-caption">testing</figcaption>
							<img src={Gold} />
						</figure>
					</div>
					<div className="slide-element">
						<figure className="slide-figure">
							<figcaption className="slide-figure-caption">testing</figcaption>
							<img src={Salmon} />
						</figure>
					</div>
					<div className="slide-element">
						<figure className="slide-figure">
							<figcaption className="slide-figure-caption">testing</figcaption>
							<img src={Sky} />
						</figure>
					</div>
				</section>
			</main>
		</>
	)
}

export default Index