import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./../../styles/styles";
import Typewriter from "typewriter-effect";

export default function Jumbotron(props: { full: boolean; name: string }) {
	const classes = useStyles(props.full);

	return (
		<Paper elevation={0} square className={classes.jumbotronPaper}>
			<div className={classes.jumbotronContent}>
				<Typography variant='h4' className={classes.jumbotronText}>
					{props.name}
				</Typography>
				{props.full && (
					<>
						<Typography
							variant='h5'
							className={classes.jumbotronText}>
							{" "}
							<Typewriter
								onInit={(typewriter: any) => {
									typewriter
										.typeString("Guaranteed Discretion")
										.pauseFor(1000)
										.deleteAll()
										.typeString("100% Succes Rate")
										.pauseFor(1000)
										.deleteAll()
										.typeString("Reliable and Trusted")
										.pauseFor(1000)
										.deleteAll()
										.typeString("Begin inquiries now!")
										.start();
								}}
							/>
						</Typography>
						<Button
							variant='outlined'
							color='inherit'
							component={Link}
							to='/about'>
							Learn More
						</Button>
					</>
				)}
			</div>
		</Paper>
	);
}
