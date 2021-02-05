import Grid from "@material-ui/core/Grid";
import Jumbotron from "./../reuseables/jumbotron";
import AboutInfo from "./../reuseables/aboutinfo";
import ServiceCard from "./../reuseables/servicecard";
import Faq from "./../reuseables/faq";
import ContactDetails from "./../reuseables/contactdetails";

export default function Home() {
	return (
		<>
			<Jumbotron full={true} name={"CyberHacking Firm"} />
			<Grid container style={{ margin: "5rem 0" }}>
				<Grid item xs />

				<Grid item container xs={12} sm={9} spacing={5}>
					<Grid item xs={12} style={{ margin: "2.5rem 0" }}>
						<AboutInfo />
					</Grid>
					<Grid item xs={12} style={{ margin: "2.5rem 0" }}>
						<ServiceCard />
					</Grid>
					<Grid item xs={12} style={{ margin: "2.5rem 0" }}>
						<Faq />
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
