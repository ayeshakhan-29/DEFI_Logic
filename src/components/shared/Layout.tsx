import React, { FC } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import ResponsiveAppBar from "../appbar/appbar";
import Footer from "../footer/footer";
import styles from "../../../styles/Layout.module.css";
import Image from "next/image";
import { assets } from "../../assets";

interface layoutProps {
	children: React.ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
	return (
		<Grid className={styles.background}>
			<Box
				display={{ lg: "flex", md: "flex", sm: "none", xs: "none" }}
				sx={{
					backgroundColor: "#9B67F7",
					height: 40,
					alignItems: "center",
					position: "sticky",
					width: "100%",
					zIndex: 99,
				}}>
				<Container
					maxWidth="lg"
					sx={{ display: "flex", justifyContent: "center" }}>
					<Image src={assets.notification} alt="notification" width={19} />
					<Typography className={styles.textHeading}>Live Event:</Typography>
					<Typography className={styles.textNormal}>
						June 3-5, 2023 – This is where a notification would appear. In this
						case a live – Learn more
					</Typography>
					<Image
						src={assets.forward}
						alt="forward"
						width={15}
						style={{ marginTop: 3, marginLeft: 5 }}
					/>
				</Container>
			</Box>
			<ResponsiveAppBar />
			{children}
			<Footer />
		</Grid>
	);
};

export default Layout;
