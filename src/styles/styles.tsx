import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import bg from "./../data/images/bg.jpg";

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grow: {
			flexGrow: 1,
		},
		headerLogo: {
			marginRight: theme.spacing(2),
		},
		headerButtonSpacing: {
			padding: theme.spacing(1),
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
		},
		headerSectionDesktop: {
			display: "none",
			[theme.breakpoints.up("md")]: {
				display: "flex",
			},
		},
		headerSectionMobile: {
			display: "flex",
			[theme.breakpoints.up("md")]: {
				display: "none",
			},
		},
		jumbotronPaper: props => ({
			position: "relative",
			height: props ? "80vh" : "20rem",
			background: `linear-gradient(45deg, rgba(0,0,0,0.5), rgba(0,0,0,0.75)), url('${bg}') center center/cover`,
			[theme.breakpoints.up("sm")]: {
				height: props ? "90vh" : "50vh",
			},
		}),
		jumbotronContent: {
			position: "absolute",
			bottom: theme.spacing(2),
			left: theme.spacing(2),
			color: "#fff",
			[theme.breakpoints.up("sm")]: {
				bottom: theme.spacing(5),
				left: theme.spacing(5),
			},
		},
		jumbotronText: {
			textTransform: "uppercase",
			paddingBottom: theme.spacing(2),
		},
		servicePaperCard: {
			height: "auto",
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			padding: theme.spacing(2),
			background: theme.palette.primary.main,
			[theme.breakpoints.up("sm")]: {
				height: "15rem",
			},
		},
	})
);
