import React from "react";
import "./Hexagon.scss";

function Hexagon() {
	return (
		<div className="hexagon">
			<div class="clip-wrap">

					<img
					src={require("../assets/myPict.jpg")}
					alt="demo-clip-path"
					width="40"
					height="40"
					class="clip-polygon"
				/>
			</div>

			<svg class="clip-svg">
				<defs>
					<clipPath id="clip-svg-demo" clipPathUnits="objectBoundingBox">
						<polygon points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}

export default Hexagon;
