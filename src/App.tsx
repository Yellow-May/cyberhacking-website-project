import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<CssBaseline />
			<Paper>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/service' component={Service} />
				</Switch>
				<Footer />
			</Paper>
		</>
	);
}

export default App;
