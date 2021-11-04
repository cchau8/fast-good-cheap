import React from "react";

const Slider = (props) => {
	return (
		<div>
			<label className="switch">
				<input
					type="checkbox"
					onClick={props.onClick}
					onChange={props.onChange}
					checked={props.slider}
				/>

				<span className="slider round"></span>
			</label>
			<span>{props.name}</span>
		</div>
	);
};

export default Slider;
