import React, { useState } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
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
	const [feature1, setFeatur1] = useState<boolean>(false);
	const [feature2, setFeatur2] = useState<boolean>(true);
	const [feature3, setFeatur3] = useState<boolean>(false);
	const [feature4, setFeatur4] = useState<boolean>(false);
	const [feature5, setFeatur5] = useState<boolean>(false);
	const [feature6, setFeatur6] = useState<boolean>(false);

	const handleFeatures = (title: string) => {
		if (title === "Feature 1") {
			setFeatur1(!feature1);
			setFeatur2(false);
			setFeatur3(false);
			setFeatur4(false);
			setFeatur5(false);
			setFeatur6(false);
		} else if (title === "Feature 2") {
			setFeatur1(false);
			setFeatur2(!feature2);
			setFeatur3(false);
			setFeatur4(false);
			setFeatur5(false);
			setFeatur6(false);
		} else if (title === "Feature 3") {
			setFeatur1(false);
			setFeatur2(false);
			setFeatur3(!feature3);
			setFeatur4(false);
			setFeatur5(false);
			setFeatur6(false);
		} else if (title === "Feature 4") {
			setFeatur1(false);
			setFeatur2(false);
			setFeatur3(false);
			setFeatur4(!feature4);
			setFeatur5(false);
			setFeatur6(false);
		} else if (title === "Feature 5") {
			setFeatur1(false);
			setFeatur2(false);
			setFeatur3(false);
			setFeatur4(false);
			setFeatur5(!feature5);
			setFeatur6(false);
		} else if (title === "Feature 6") {
			setFeatur1(false);
			setFeatur2(false);
			setFeatur3(false);
			setFeatur4(false);
			setFeatur5(false);
			setFeatur6(!feature6);
		}
	};

	return (
		<React.Fragment>
			<Container maxWidth="xl" sx={{ marginBottom: "40px" }} id="pricing">
				<Box
					sx={{
						...sx.boxTow,
						borderRadius: 5, // Rounded corners for the full section
					}}
				>
					<Typography className={styles.textHeading} id="plans">
						Plans
					</Typography>
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
		</React.Fragment >
	);
};
export default PlansSectionSec;
