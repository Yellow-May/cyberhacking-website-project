import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default function Footer() {
	return (
		<Paper
			style={{
				textAlign: "center",
				padding: "0.5rem",
				borderTop: "thin solid",
			}}>
			<Typography variant='subtitle1'>
				Copyright &copy; {new Date().getFullYear()} CyberSpy Firm |
				Powered by CyberSpy Firm
			</Typography>
		</Paper>
	);
}
