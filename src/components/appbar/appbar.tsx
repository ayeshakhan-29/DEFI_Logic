import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import {isMobile} from 'react-device-detect';

import {
	AppBar,
	Box,
	Button,
	Grid,
	Toolbar,
	IconButton,
	Drawer,
} from "@mui/material";
import { Container } from "@mui/system";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { navItem } from "./data";
import GenericButton from "../shared/Button";
import { assets } from "../../assets";
import styles from "../../../styles/Appbar.module.css";
import ScrollToColor from "./scrollToColor";

const ResponsiveAppBar = () => {
	const [openDrawer, setOpenDrawer] = useState(false);
	const container =
		typeof window !== undefined ? () => window.document.body : undefined;
	const handleToggleDrawer = () => {
		setOpenDrawer(!openDrawer);
	};

	const handleScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			if (isMobile){
				const scrollOffset = id === "dfleducation" ? -470 : -100; //470
				const targetPosition = element.getBoundingClientRect().top;
		  		window.scrollBy(0, targetPosition + scrollOffset);
				  setOpenDrawer(!openDrawer);
			}
			else{
				const scrollOffset = id === "dfleducation" ? -170 : -100; //470
				const targetPosition = element.getBoundingClientRect().top;
		  		window.scrollBy(0, targetPosition + scrollOffset);
			}
		  
		  
		}
	};

	//Drawer Component
	const drawer = (
		<Box className={styles.mobileNav}>
			<Box
				className={styles.mobileLogo}
				sx={{ padding: { xs: "0 16px", sm: "0 24px" } }}>
				<Link href="/">
					<Image
						src={assets.logo}
						alt="Logo"
						width={100}
						className={styles.logo}
					/>
				</Link>
				<IconButton aria-label="open drawer" onClick={handleToggleDrawer}>
					<CloseRoundedIcon color="info" />
				</IconButton>
			</Box>
			<Box className={styles.mobilenavLinks}>
				{navItem.map((item, index) => {
					return (
						<Button
							// href={`#${item.id}`}
							onClick={() => handleScroll(item.id)}
							key={index}
							style={{ textDecoration: "none" }}>
							<Button
								className={styles.navItems}
								sx={{ "&:hover": { color: "#ED6AA9" } }}
								onClick={() => setOpenDrawer(!openDrawer)}>
								{item.name}
							</Button>
						</Button>
					);
				})}
			</Box>
			<Box className={styles.navButtons}>
				{/* <GenericButton variant="outlined" className={styles.navItems}>
					Sign in
				</GenericButton> */}
				<GenericButton
					variant="contained"
					className={styles.navItems}
					width="160px"
					onClick={() => handleScroll("plans")}>
					Join for FREE
				</GenericButton>
			</Box>
		</Box>
	);

	return (
		<Grid container>
			<ScrollToColor>
				<AppBar
					sx={{
						paddingTop: "8px",
						marginTop: { md: "30px", sm: "0px", xs: "0px" },
					}}
					elevation={0}
					position="fixed">
					<Container
						maxWidth="xl"
						sx={{
							padding: { xs: "0px", sm: "0px" },
							paddingX: { md: "60px" },
						}}>
						<Toolbar className={styles.toolbar}>
							<Box
								sx={{
									display: { xs: "flex", sm: "block", md: "none" },
									textAlign: "center",
								}}>
								<IconButton
									aria-label="open drawer"
									onClick={handleToggleDrawer}>
									<MenuRoundedIcon color="info" />
								</IconButton>
							</Box>
							<Box>
								<Link href="/" style={{ textDecoration: "none" }}>
									<Image src={assets.logo} alt="Logo" width={187} />
								</Link>
							</Box>
							<Box sx={{ display: { md: "none" } }}>
								<Link href="/" style={{ textDecoration: "none" }}>
									<Image src={assets.profile} alt="Profile" width={25} />
								</Link>
							</Box>
							<Box
								className={styles.navLinks}
								sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
								{navItem.map((item, index) => {
									return (
										// <Link
										// 	href={`#${item.id}`}
										// 	key={index}
										// 	style={{ textDecoration: "none" }}
										// 	onClick={() => handleScroll(item.id)}
										// 	shallow={true}
										// >
										<Button
											key={index}
											className={styles.navItems}
											sx={{ "&:hover": { color: "#ED6AA9" } }}
											onClick={() => handleScroll(item.id)}>
											{item.name}
										</Button>
										// </Link>
									);
								})}
							</Box>
							<Box
								className={styles.actions}
								sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
								{/* <GenericButton className={styles.navItems}>Sign in</GenericButton> */}
								<GenericButton
									className={styles.navItems}
									width="160px"
									variant="contained"
									onClick={() => handleScroll("plans")}>
									Join for FREE
								</GenericButton>
							</Box>
						</Toolbar>
						{/* Drawer */}
						<Box component="nav">
							<Drawer
								container={container}
								variant="temporary"
								anchor="top"
								open={openDrawer}
								onClose={handleToggleDrawer}
								ModalProps={{
									keepMounted: false, // Better open performance on mobile.
								}}
								transitionDuration={700}
								sx={{
									display: { xs: "block", sm: "block", md: "none" },
								}}>
								{drawer}
							</Drawer>
						</Box>
					</Container>
				</AppBar>
			</ScrollToColor>
		</Grid>
	);
};

ResponsiveAppBar.propTypes = {
	window: PropTypes.func,
};
export default ResponsiveAppBar;
