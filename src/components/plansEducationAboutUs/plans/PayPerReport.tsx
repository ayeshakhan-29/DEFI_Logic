import React, { useState } from "react";
import { Container, Box, Typography, Grid, useMediaQuery } from "@mui/material";
import Button from "../../shared/Button";
import styles from "../../../../styles/PlansEducationAboutUs.module.css";
import sx from "./sx";

const PayPerReport = () => {
	const isMobileView = useMediaQuery((theme) => theme.breakpoints.down("xs"));

	return (
		<React.Fragment>
			<Grid>
				<Container maxWidth="xl" sx={{ ...(isMobileView ? sx.mobileMargin : {}), ...sx.col2 }}>
					<Grid container sx={sx.col2} >
						<Box sx={{ marginTop: { xs: "-50px", sm: "0px", md: "0px" }, }} className={styles.report} style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
							<Typography className={styles.textFeature} id='payperreport'>
								Pay-Per-Report
							</Typography>
							<Grid container>
								<Grid sx={{ paddingLeft: { xs: "6px", sm: "0px", md: "0px" } }} item lg={9} md={9} sm={12} xs={12}>
									<Typography className={styles.textNormal}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
									</Typography>
								</Grid>
								<Grid item lg={3} md={3} sm={12} xs={12}>
									<Box
										sx={{
											display: { xs: "none", sm: "none", md: "flex" },
											justifyContent: "flex-end",
											paddingTop: 2,
										}}>
										<Button
											className={styles.textNormal}
											width="175px"
											variant="contained"
											onClick={() => { }}>
											Buy a report now
										</Button>
									</Box>
									<Box
										sx={{
											display: { xs: "none", sm: "flex", md: "none" },
											justifyContent: "flex-start",
											paddingTop: 2,
										}}>
										<Button
											className={styles.textNormal}
											width="175px"
											variant="contained"
											onClick={() => { }}>
											Buy a report now
										</Button>
									</Box>
									<Box
										sx={{
											display: { md: "none", sm: "none", xs: "flex" },
											justifyContent: "center",
											paddingTop: "10px",
										}}>
										<Button
											className={styles.textNormal}
											width="175px"
											variant="contained"
											onClick={() => { }}>
											Buy a report now
										</Button>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Grid>
				</Container>
			</Grid>
		</React.Fragment>
	);
};
export default PayPerReport;