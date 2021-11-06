import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ title }) => {
	return (
		<header>
			<FontAwesomeIcon icon={["fab", "angrycreative"]} />
			<h1>{title}</h1>
		</header>
	);
};

export default Header;
