import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function AboutInfo() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant='h5' style={{ fontWeight: "bold" }}>
					WHAT DO WE DO?
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Paper style={{ padding: "1rem" }}>
					<Typography
						align='justify'
						gutterBottom={true}
						paragraph={true}>
						We are a collection of online hackers for hire team;
						Provision of discreet hacking services is our priority.
						We range from Social accounts hacking, Phone hack,
						WhatsApp hack, Computer hack, Password hacking/recovery,
						Web hack and Security configuration. Why let the
						government have all the fun *winks*.
					</Typography>
					<Typography
						align='justify'
						gutterBottom={true}
						paragraph={true}>
						We are not limited to these services only, but also we
						offer custom exploit development, software development
						services for you. Certification is nothing for a hacker
						but yet our professional hackers have completed their
						hacking study from various company like CEH, CISSP,
						SCSP. Without up-to-date knowledge of technology, none
						can be a good hacker. Our hackers are updated skill wise
						alongside knowledge. There is no failure. Hacking is not
						magic, it needs, patience, research and time to be real
						hackers.
					</Typography>
					<Typography
						align='justify'
						gutterBottom={true}
						paragraph={true}>
						We have 100% confidence to give you more than 99%
						success rate for any kind of services provided here.
						After a trial you get a referral code, for each client
						you refer you get a discount on your next hack or cash
						if you please.
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
}
