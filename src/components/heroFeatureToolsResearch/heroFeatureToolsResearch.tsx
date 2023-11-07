"use client"
import React, { FC, useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";

import HeroSection from "./heroSection/HeroSection";
import FeatureSection from "./feature/FeatureSection";
import ToolsAndResearch from "./toolsAndResearch/ToolsAndResearch";
import AIMobile from "./AI/AIMobile";
import AIWeb from "./AI/AIWeb";

interface HeroFeatureToolsResearchProps { }

const HeroFeatureToolsResearch: FC<HeroFeatureToolsResearchProps> = ({ }) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Add event listener for window resize when the component mounts
		window.addEventListener("resize", handleResize);
		handleResize(); // Initial check

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<Grid>
			<Container
				maxWidth="xl"
				sx={{
					padding: { xs: "0px", sm: "0px" },
					paddingTop: { xs: "150px", sm: "150px", md: "70px" },
					paddingLeft: { md: "75px" },
					paddingRight: { lg: "72px" },
				}}
			>
				<HeroSection />
				<FeatureSection />
				<ToolsAndResearch />
				{isMobile ? <AIMobile /> : <AIWeb />}
			</Container>
		</Grid>
	);
};

export default HeroFeatureToolsResearch;
