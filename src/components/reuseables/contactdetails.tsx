import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { contactDetailsData } from "./../../data/data";

export default function ContactDetails() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant='h5' style={{ fontWeight: "bold" }}>
					CONTACT US
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<List>
					{contactDetailsData.map((item, index) => (
						<ListItem key={index}>
							<ListItemAvatar>
								<Avatar>{item.icon}</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary={item.primary}
								secondary={item.secondary}
							/>
						</ListItem>
					))}
				</List>
			</Grid>
		</Grid>
	);
}
