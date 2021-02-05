import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import App from "./App";

const theme = createMuiTheme({
	palette: {
		type: "dark",
	},
});

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
