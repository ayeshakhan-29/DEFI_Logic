import React, { FC } from "react";
import PlansSection from "./plans/PlansSection";
import EducatioAndAboutUs from "./educatioAndAboutUs/EducatioAndAboutUsSection";
import PayPerReport from "./plans/PayPerReport";
import AiResearch from "./plans/AiResearch"
import BuyTradingViewIndicator from "./plans/BuyTradingViewIndicator"
import PlansSectionSec from "./plans/PlansSectionSec";
import { Container, Grid } from "@mui/material";

interface PlansEducationAboutUs { }

const PlansEducationAboutUs: FC<PlansEducationAboutUs> = ({ }) => {
	return (
		<Grid>
			<Container
				maxWidth="xl"
				sx={{ padding: { xs: "0px", sm: "0px" }, paddingLeft: { md: "75px" }, paddingRight: { md: "60px" } }}
			>
				{/* <PlansSection /> */}
				<PlansSectionSec />
				<BuyTradingViewIndicator />
				<AiResearch />
				<PayPerReport />
				<EducatioAndAboutUs />
			</Container>
		</Grid>
	);
};
export default PlansEducationAboutUs;
