import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className="footer-text">
				Made with{" "}
				<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
					React
				</a>{" "}
				and{" "}
				<a href="https://mui.com/" target="_blank" rel="noreferrer">
					MUI
				</a>{" "}
				@{" "}
				<a href="https://www.lereacteur.io" target="_blank" rel="noreferrer">
					Le Reacteur
				</a>{" "}
				by{" "}
				<a href="https://www.github.com/cchau8" target="_blank" rel="noreferrer">
					Cedric Chau
				</a>
			</div>
		</footer>
	);
};

export default Footer;
