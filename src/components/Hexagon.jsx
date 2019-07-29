import React from "react";
import "./Hexagon.scss";

function Hexagon() {
	return (
		<div className="hexagon">
			<div class="clip-wrap">

					<img
					src="http://karenmenezes.com/shapes-polygon/clip-demo.jpg"
					alt="demo-clip-path"
					width="140"
					height="140"
					class="clip-polygon"
				/>
			</div>

			<svg class="clip-svg">
				<defs>
					<clipPath id="clip-svg-demo" clipPathUnits="objectBoundingBox">
						<polygon points="0.25 0, 0.75 0, 1 0.5, 0.75 1, 0.25 1, 0 0.5" />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}

export default Hexagon;
