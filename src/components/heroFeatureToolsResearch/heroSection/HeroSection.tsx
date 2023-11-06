import React from "react";
import { Container, Box, Typography } from "@mui/material";
import styles from "../../../../styles/HeroFeatureToolsResearch.module.css";
import Button from "../../shared/Button";
import Image from "next/image";
import { assets } from "../../../assets";

const HeroSection = () => {
	const sx = {
		container: {
			// marginTop: "64px",
		},
		hero: {
			textAlign: "center",
			padding: {
				lg: "100px 380px 60px 380px",
				md: "80px 175px 60px 175px",
				sm: "60px 100px 60px 100px",
				xs: "0px 30px 40px 30px",
			},
		},
	};

	const handleScroll = () => {
		const element = document.getElementById("plans");
		if (element) {
			
				const scrollOffset = -100;
				const targetPosition = element.getBoundingClientRect().top;
		  		window.scrollBy(0, targetPosition + scrollOffset);
			
		  
		  
		}
	};

	return (
		<React.Fragment>
			<Container maxWidth="xl" sx={sx.container}></Container>
			<Box sx={sx.hero} className={styles.herosection}>
				{/* <Image src={assets.heroText} alt="Hero Text" className={styles.heroText} /> */}
				<Typography className={styles.heading} variant="h1">
					The crypto think-tank for better decisions.
				</Typography>
				<Typography className={styles.textNormal}>
					A comprehensive cooperative service.
				</Typography>
				<Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
					<Button
						className={styles.textNormal}
						width="150px"
						variant="contained"
						onClick={() => handleScroll()}>
						See our plans
					</Button>
				</Box>
				<Box sx={{ display: { md: "none" } }}>
					<Button
						className={styles.textNormal}
						width="280px"
						variant="contained"
						onClick={() => handleScroll()}>
						Join our cooperative for FREE
					</Button>
				</Box>
			</Box>
		</React.Fragment>
	);
};
export default HeroSection;
