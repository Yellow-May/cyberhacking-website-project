import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { cardData } from "./../../data/data";
import { useStyles } from "./../../styles/styles";

const ServiceCard = () => {
	const classes = useStyles();
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant='h5' style={{ fontWeight: "bold" }}>
					WHAT CAN WE OFFER?
				</Typography>
			</Grid>

			<Grid item xs={12} container spacing={2}>
				{cardData.map((item, index) => (
					<Grid item xs={12} sm={4} key={index}>
						<Paper className={classes.servicePaperCard}>
							<Typography
								variant='subtitle1'
								style={{ fontWeight: "bold" }}>
								{item.title}
							</Typography>
							<Typography
								variant='body2'
								style={{
									padding: "1rem 0",
									color: "#aaa",
								}}
								align='justify'>
								{item.text}
							</Typography>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

export default ServiceCard;
