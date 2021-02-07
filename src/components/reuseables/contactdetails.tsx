import React, { ChangeEvent } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { contactDetailsData } from "./../../data/data";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from "./../../styles/styles";

export default function ContactDetails() {
	const classes = useStyles();

	const [formEmail, setEmail] = React.useState("");
	const [formSubject, setSubject] = React.useState("");
	const [formMessage, setMessage] = React.useState("");

	const [status, setStatus] = React.useState("");

	const submitForm = (ev: ChangeEvent<HTMLFormElement>) => {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				setEmail("");
				setSubject("");
				setMessage("");
				setStatus("SUCCESS");
			} else {
				setStatus("ERROR");
			}
		};
		xhr.send(data);
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant='h5' style={{ fontWeight: "bold" }}>
					CONTACT US
				</Typography>
			</Grid>
			<Grid item sm={12} md={6}>
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
			<Grid item sm={12} md={6}>
				<form
					className={classes.formRoot}
					noValidate
					autoComplete='off'
					onSubmit={submitForm}
					action='https://formspree.io/f/xwkwzazg'
					method='POST'>
					<TextField
						required
						id='standard-required'
						label='Email'
						name='Email'
						value={formEmail}
						onChange={ev => setEmail(ev.target.value)}
						fullWidth
					/>
					<TextField
						required
						id='standard-required'
						label='Subject'
						name='Subject'
						value={formSubject}
						onChange={ev => setSubject(ev.target.value)}
						fullWidth
					/>
					<TextField
						id='filled-multiline-static'
						label='Message'
						name='Message'
						value={formMessage}
						onChange={ev => setMessage(ev.target.value)}
						multiline
						rows={4}
						variant='filled'
						fullWidth
					/>
					{status === "SUCCESS" ? (
						<Typography>Thanks!</Typography>
					) : (
						<Button variant='outlined' type='submit'>
							Send
						</Button>
					)}
					{status === "ERROR" && (
						<Typography>Ooops! There was an error.</Typography>
					)}
				</form>
			</Grid>
		</Grid>
	);
}
