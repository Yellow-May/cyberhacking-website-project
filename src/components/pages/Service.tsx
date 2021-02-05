import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Jumbotron from "../reuseables/jumbotron";
import ServiceCard from "./../reuseables/servicecard";
import ContactDetails from "./../reuseables/contactdetails";
import { moreHacks } from "./../../data/data";

export default function Service() {
	return (
		<>
			<Jumbotron full={false} name={"Our Services"} />
			<Grid container style={{ margin: "5rem 0" }}>
				<Grid item xs />

				<Grid item container xs={12} sm={9} spacing={5}>
					<Grid item xs={12} style={{ margin: "2.5rem 0" }}>
						<ServiceCard />
					</Grid>

					<Grid
						container
						item
						xs={12}
						spacing={2}
						style={{ margin: "2.5rem 0" }}>
						<Grid item xs={12}>
							<Typography variant='h5'>MORE HACKS</Typography>
						</Grid>

						<Grid item xs={12}>
							<Paper elevation={0}>
								<ul>
									<Grid item xs={12} container spacing={2}>
										{moreHacks.map((item, index) => (
											<Grid
												item
												xs={12}
												sm={4}
												key={index}>
												<li>{item}</li>
											</Grid>
										))}
									</Grid>
								</ul>
							</Paper>
						</Grid>
					</Grid>

					<Grid item xs={12} style={{ margin: "2.5rem 0" }}>
						<ContactDetails />
					</Grid>
				</Grid>

				<Grid item xs />
			</Grid>
		</>
	);
}
