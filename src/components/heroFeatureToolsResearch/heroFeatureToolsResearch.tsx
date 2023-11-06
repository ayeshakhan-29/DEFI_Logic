import Link from "next/link";
import React, { FC } from "react";
import { Container, Grid } from "@mui/material";

import HeroSection from "./heroSection/HeroSection";
import FeatureSection from "./feature/FeatureSection";
import ToolsAndResearch from "./toolsAndResearch/ToolsAndResearch";
import AI from "./AI/AI";
interface HeroFeatureToolsResearchProps { }

const HeroFeatureToolsResearch: FC<HeroFeatureToolsResearchProps> = ({ }) => {
	return (
		<Grid>
			<Container
				maxWidth="xl"
				sx={{
					padding: { xs: "0px", sm: "0px" },
					paddingTop: { xs: "150px", sm: "150px", md: "70px" },
					paddingLeft: { md: "75px" }, paddingRight: { lg: "72px" }
				}}>
				<HeroSection />
				<FeatureSection />
				<ToolsAndResearch />
				<AI />
			</Container>
		</Grid>
	);
};
export default HeroFeatureToolsResearch;
