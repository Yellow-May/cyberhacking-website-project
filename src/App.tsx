import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<CssBaseline />
			<Paper style={{ position: "relative" }}>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/service' component={Service} />
				</Switch>
				<a href='https://wa.link/1krx15'>
					<Fab
						color='primary'
						aria-label='add'
						style={{
							position: "fixed",
							bottom: "1.5%",
							right: "1.5%",
						}}>
						<WhatsApp />
					</Fab>
				</a>
				<Footer />
			</Paper>
		</>
	);
}

export default App;
