import App from "next/app";
import { withRouter } from "next/router";
import React from "react";
import { ThemeProvider } from "react-jss";
import { Box } from "../components";

export default withRouter(
	class extends App {
		componentDidMount = () => {
			const style = document.getElementById("server-side-styles");

			style?.parentNode?.removeChild(style);
		};

		render = () => {
			const { Component, pageProps } = this.props;

			return <Component {...pageProps} />;
		};
	}
);
