import React, { useState } from "react";
import { Container, Box, Typography, Grid, useMediaQuery } from "@mui/material";
import styles from "../../../../styles/PlansEducationAboutUs.module.css";
import Accordion from "../../shared/Accordion";
import StarterPlanMobile from "./mobilePlans/StarterPlanMobile";
import StarterPlan from "./desktopPlans/StarterPlan";
import ProPlan from "./desktopPlans/ProPlan";
import ProPlanMobile from "./mobilePlans/ProPlanMobile";
import ElitePlan from "./desktopPlans/ElitePlan";
import ElitePlanMobile from "./mobilePlans/ElitePlan";
import data from "./plansdata";
import sx from "./sx";
import GenericButton from "../../shared/Button";

const PlansSectionSec = () => {
	const [feature1, setFeature1] = useState<boolean>(false);
	const [feature2, setFeature2] = useState<boolean>(true);
	const [feature3, setFeature3] = useState<boolean>(false);
	const [feature4, setFeature4] = useState<boolean>(false);
	const [feature5, setFeature5] = useState<boolean>(false);
	const [feature6, setFeature6] = useState<boolean>(false);

	const handleFeatures = (title: string) => {
		if (title === "Feature 1") {
			setFeature1(!feature1);
			setFeature2(false);
			setFeature3(false);
			setFeature4(false);
			setFeature5(false);
			setFeature6(false);
		} else if (title === "Feature 2") {
			setFeature1(false);
			setFeature2(!feature2);
			setFeature3(false);
			setFeature4(false);
			setFeature5(false);
			setFeature6(false);
		} else if (title === "Feature 3") {
			setFeature1(false);
			setFeature2(false);
			setFeature3(!feature3);
			setFeature4(false);
			setFeature5(false);
			setFeature6(false);
		} else if (title === "Feature 4") {
			setFeature1(false);
			setFeature2(false);
			setFeature3(false);
			setFeature4(!feature4);
			setFeature5(false);
			setFeature6(false);
		} else if (title === "Feature 5") {
			setFeature1(false);
			setFeature2(false);
			setFeature3(false);
			setFeature4(false);
			setFeature5(!feature5);
			setFeature6(false);
		} else if (title === "Feature 6") {
			setFeature1(false);
			setFeature2(false);
			setFeature3(false);
			setFeature4(false);
			setFeature5(false);
			setFeature6(!feature6);
		}
	};

	const isMobileView = useMediaQuery((theme) => theme.breakpoints.down("sm"));

	return (
		<React.Fragment>
			<Container maxWidth="xl" sx={{ marginBottom: isMobileView ? "40px" : "0" }} id="pricing">
				<Box
					sx={{
						...sx.boxTow,
						borderRadius: 5, // Rounded corners for the full section
					}}
				>
					<Typography className={styles.textHeading} id="plans" sx={{ marginTop: !isMobileView ? "0" : undefined }}>
						Plans
					</Typography>
					{!isMobileView && (
						<Typography
							sx={{
								marginTop: { xs: "-10px", sm: "0px", md: "0px" },
								marginLeft: { xs: "18px", sm: "0px", md: "0px" },
							}}
							className={styles.textJustify}
						>
							Payments can be made in either fiat or crypto.<br></br>
							Crypto payments allow you to subscribe anonymously (via web3 wallet connected with a Discord account)
						</Typography>
					)}
				</Box>

				<Box sx={{ paddingX: { xs: 0, sm: 0, md: 0 } }} marginTop={5}>
					{/* Web Plan components */}
					<Grid container>
						<Grid
							item
							lg={4}
							md={4}
							style={{
								backgroundColor: "rgba(0, 0, 0, 0.4)",
							}}
							sx={{
								borderTopRightRadius: { xs: 0, sm: 0, md: 0, lg: 0 },
								borderBottomRightRadius: { xs: 0, sm: 0, md: 0, lg: 0 },

								borderRadius: { xs: 5, sm: 5 },
								marginBottom: { xs: 5, sm: 5, md: 0, lg: 0 },
							}}
						>
							<StarterPlan
								item1={feature1}
								item2={feature2}
								item3={feature3}
								item4={feature4}
								item5={feature5}
								item6={feature6}
							/>
						</Grid>
						<Grid
							item
							lg={4}
							md={4}
							sx={{
								borderRadius: { xs: 5, sm: 5, md: 0, lg: 0 },
								borderBottomRightRadius: { xs: 5, sm: 5, md: 0, lg: 0 },
								marginBottom: { xs: 5, sm: 5, md: 0, lg: 0 },
								backgroundColor: {
									xs: "rgba(0, 0, 0, 0.4)",
									sm: "rgba(0, 0, 0, 0.4)",
									md: "#2A143F",
								},
							}}
						>
							<ElitePlan
								item1={feature1}
								item2={feature2}
								item3={feature3}
								item4={feature4}
								item5={feature5}
								item6={feature6}
							/>
						</Grid>
						<Grid
							item
							lg={4}
							md={4}
							style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
							sx={{
								borderTopLeftRadius: { xs: 5, sm: 5, md: 0, lg: 0 },
								borderBottomLeftRadius: { xs: 5, sm: 5, md: 0, lg: 0 },
								borderBottomRightRadius: { xs: 5, sm: 5, md: 0, lg: 0 },
								borderRadius: { xs: 5, sm: 5 },
								marginBottom: { xs: 5, sm: 5, md: 0, lg: 0 },
							}}
						>
							<ProPlan
								item1={feature1}
								item2={feature2}
								item3={feature3}
								item4={feature4}
								item5={feature5}
								item6={feature6}
							/>
						</Grid>
					</Grid>
				</Box>

				<Box sx={{ paddingX: { xs: 0, sm: 0, md: 0 } }} marginTop={3}>
					{/* Mobile Plan components (conditionally rendered based on screen size) */}
					<Grid container>
						<Grid
							item
							xs={12}
							sm={12}
							md={4}
							sx={{
								backgroundColor: "rgba(0, 0, 0, 0.4)",
								borderRadius: 5,
								marginBottom: 3,
							}}
						>
							<StarterPlanMobile />
						</Grid>
						<Grid
							item
							xs={12}
							sm={12}
							md={4}
							sx={{
								backgroundColor: "rgba(0, 0, 0, 0.4)",
								borderRadius: 5,
								marginBottom: 3,
							}}
						>
							<ElitePlanMobile />
						</Grid>
						<Grid
							item
							xs={12}
							sm={12}
							md={4}
							sx={{
								backgroundColor: "rgba(0, 0, 0, 0.4)",
								borderRadius: 5,
								marginBottom: 3,
							}}
						>
							<ProPlanMobile />
						</Grid>
					</Grid>
				</Box>

				{/* Rest of your code for buttons, etc. */}
			</Container>
		</React.Fragment>
	);
};

export default PlansSectionSec;
