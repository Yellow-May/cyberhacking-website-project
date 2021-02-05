import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./../styles/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import logo from "./../data/images/cyberhacking.png";

export default function Header() {
	const classes = useStyles();

	const [
		mobileMoreAnchorEl,
		setMobileMoreAnchorEl,
	] = React.useState<null | HTMLElement>(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}>
			<MenuItem>
				<Link
					to='/about'
					style={{ color: "inherit", textDecoration: "none" }}>
					<Typography>About Us</Typography>
				</Link>
			</MenuItem>
			<MenuItem>
				<Link
					to='/service'
					style={{ color: "inherit", textDecoration: "none" }}>
					<Typography>Our Services</Typography>
				</Link>
			</MenuItem>
		</Menu>
	);

	return (
		<>
			<AppBar>
				<Toolbar>
					<Button
						component={Link}
						to='/'
						className={classes.headerLogo}
						aria-label='company logo'>
						<img src={logo} alt='logo' style={{ width: "3rem" }} />
					</Button>
					<Link
						to='/'
						style={{
							color: "inherit",
							textDecoration: "none",
							fontFamily: "inherit",
						}}>
						<Typography
							variant='h5'
							className={classes.headerHeading}
							noWrap>
							CYBERHACKING FIRM
						</Typography>
					</Link>

					<div className={classes.grow} />
					<div className={classes.headerSectionDesktop}>
						<Button component={Link} to='/about'>
							<Typography className={classes.headerButtonSpacing}>
								About Us
							</Typography>
						</Button>
						<Button component={Link} to='/service'>
							<Typography className={classes.headerButtonSpacing}>
								Services
							</Typography>
						</Button>
					</div>
					<div className={classes.headerSectionMobile}>
						<IconButton
							aria-label='show more'
							aria-controls={mobileMenuId}
							aria-haspopup='true'
							onClick={handleMobileMenuOpen}
							color='inherit'>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</>
	);
}
