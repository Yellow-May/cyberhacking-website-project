import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { faqData } from "./../../data/data";

export default function Faq() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant='h5' style={{ fontWeight: "bold" }}>
					FAQ
				</Typography>
			</Grid>

			<Grid item xs={12}>
				{faqData.map((item, index) => (
					<Accordion key={index}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1a-content'
							id='panel1a-header'>
							<Typography variant='subtitle2'>
								{item.head}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant='body2'>{item.body}</Typography>
						</AccordionDetails>
					</Accordion>
				))}
			</Grid>
		</Grid>
	);
}
