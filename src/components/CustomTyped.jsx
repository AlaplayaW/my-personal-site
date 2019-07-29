import React from "react";
import Typed from "react-typed";

function CustomTyped({customStrings}) {
	return (
		<Typed
			strings={customStrings}
			typeSpeed={60}
			backSpeed={30}
			backDelay={2000}
			loop
			loopCount={2}
		/>
	);
}

export default CustomTyped;
