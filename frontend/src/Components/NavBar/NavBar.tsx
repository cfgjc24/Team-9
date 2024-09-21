import * as React from "react";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	MenuItem,
	Container,
	Avatar,
	Button,
	Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";

const pages = ["Dashboard", "Providers", "Assign"];
const settings = ["Profile", "Logout"];
type Props = {};

const NavBar = (props: Props) => {
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="sticky">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Link to="">
						<img
							src={require("../../Assets/logo_noBG.png")}
							alt="logo"
						/>
					</Link>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						}}
					>
						{pages.map((page) => (
							<Link
								to={`/${page.toLowerCase()}`}
								style={{ textDecoration: "none" }}
							>
								<Button
									key={page}
									sx={{
										my: 2,
										color: "white",
										display: "block",
									}}
								>
									{page}
								</Button>
							</Link>
						))}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar
									alt="Remy Sharp"
									src="/static/images/avatar/2.jpg"
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<Link
									to={`/${setting.toLowerCase()}`}
									style={{ textDecoration: "none" }}
								>
									<MenuItem
										key={setting}
										onClick={handleCloseUserMenu}
									>
										<Typography
											sx={{ textAlign: "center" }}
										>
											{setting}
										</Typography>
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
