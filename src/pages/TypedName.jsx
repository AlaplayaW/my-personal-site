import React from "react";
import Overlay from "../Overlay.png";
import Typed from "react-typed";


const imgStyle = {
	background: `url(${Overlay}) bottom center`,
	width: "100%",
	height: "100vh",
  display: "table",
  textAlign: "left"
};

function TypedName() {
	return (
		<div style={imgStyle}>
			<h1>
				Hello! I am Perrine,
				<Typed
          style={{textAlign: 'left'}}
					strings={[
						"&nbsp; a Junior Developper",
						"&nbsp; Searching for an internship"
					]}
					typeSpeed={40}
					backSpeed={50}
					loop
				>
				</Typed>
			</h1>
		</div>
	);
}

export default TypedName;


  //   // HOME TYPED JS
  //   if ($('.element').length) {
  //     $('.element').each(function () {
  //         $(this).typed({
  //             strings: [$(this).data('text1'), $(this).data('text2')],
  //             loop: $(this).data('loop') ? $(this).data('loop') : false ,
  //             backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000 ,                
  //             typeSpeed: 10,
  //         });
  //     });
  // }