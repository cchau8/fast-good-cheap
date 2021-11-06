import React from "react";
import { useState } from "react";
import Switch from "@mui/material/Switch";

const FastGoodCheap = () => {
	const [slider1, setSlider1] = useState(false);
	const [slider2, setSlider2] = useState(false);
	const [slider3, setSlider3] = useState(false);

	const handleChange = (slider, setSlider, other1, setOther1, other2, setOther2) => {
		const rdm = Math.floor(Math.random() * 2);
		if (!slider) {
			if (!other1 || !other2) {
				setSlider(true);
			} else {
				if (rdm === 1) {
					setSlider(true);
					setOther1(false);
				} else {
					setSlider(true);
					setOther2(false);
				}
			}
		} else {
			setSlider(false);
		}
	};

	return (
		<main>
			<div className="slider">
				<Switch
					checked={slider1}
					onChange={() => {
						handleChange(slider1, setSlider1, slider2, setSlider2, slider3, setSlider3);
					}}
					color="primary"
					// className="toggle"
				/>
				<span>FAST</span>
			</div>
			<div className="slider">
				<Switch
					checked={slider2}
					onChange={() => {
						handleChange(slider2, setSlider2, slider1, setSlider1, slider3, setSlider3);
					}}
					color="success"
				/>
				<span>GOOD</span>
			</div>
			<div className="slider">
				<Switch
					checked={slider3}
					onChange={() => {
						handleChange(slider3, setSlider3, slider1, setSlider1, slider2, setSlider2);
					}}
					color="secondary"
				/>
				<span>CHEAP</span>
			</div>
		</main>
	);
};

export default FastGoodCheap;
