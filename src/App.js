import "./App.css";
import "./components/header-footer/header-footer.css";
import Header from "./components/header-footer/Header";
import Footer from "./components/header-footer/Footer";
import FastGoodCheap from "./components/FastGoodCheap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faAngrycreative } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faAngrycreative);

function App() {
	return (
		<div className="container">
			<Header title="FAST GOOD CHEAP" />
			<FastGoodCheap />
			<Footer />
		</div>
	);
}

export default App;
