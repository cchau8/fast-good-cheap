import "./App.css";
import Slider from "./Slider";
import { useState } from "react";
function App() {
	const [slider1, setSlider1] = useState(false);
	const [slider2, setSlider2] = useState(false);
	const [slider3, setSlider3] = useState(false);

	const handleNotThree = () => {
		const trueArr = [slider1, slider2, slider3].filter((el) => el === true);
		if (trueArr.length === 2) {
			const rdm = Math.floor(Math.random() * 2);
			if (slider1 === false) {
				rdm === 0 ? setSlider3(false) : setSlider2(false);
			} else if (slider2 === false) {
				rdm === 0 ? setSlider3(false) : setSlider1(false);
			} else if (slider3 === false) {
				rdm === 0 ? setSlider1(false) : setSlider2(false);
			}
		}
	};
	return (
		<div>
			<Slider
				name="FAST"
				onClick={() => {
					setSlider1(!slider1);
				}}
				onChange={handleNotThree}
				slider={slider1}
			/>
			<Slider
				name="GOOD"
				onClick={() => {
					setSlider2(!slider2);
				}}
				slider={slider2}
				onChange={handleNotThree}
			/>
			<Slider
				name="CHEAP"
				onClick={() => {
					setSlider3(!slider3);
					handleNotThree();
				}}
				slider={slider3}
				onChange={handleNotThree}
			/>
		</div>
	);
}

export default App;
