import React from "react";
import dynamic from 'next/dynamic';
import { Container, Box, Typography, Grid } from "@mui/material";
import ReactPlayer from 'react-player';
import VideoPlayer from "./VideoPlayer";
import styles from "../../../../styles/HeroFeatureToolsResearch.module.css";
import { assets } from "../../../assets";
import sx from "./sx";
import GenericButton, { OutlinedButton } from "../../shared/Button";


const DynamicVideoPlayer = dynamic(() => import('./VideoPlayer'), {
	ssr: false, // Set ssr to false to render on the client side.
});

const ToolsAndResearch = () => {
	const videoUri = 'https://www.youtube.com/embed/Yj2NZaefbl0?si=cVyFUlTgL3jkGsSS'; // Replace with the actual video URL

	return (
		<React.Fragment>
			<Container maxWidth="xl" id="toolsResearch">
				<Grid container sx={sx.col2}>
					<Grid item lg={6} md={6} sm={12} xs={12}>
						<Box

							width={"100%"}
							sx={{
								display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
								justifyContent: "center",
							}}>
							<div >
								<DynamicVideoPlayer videoUri={videoUri} />
							</div>
						</Box>

						<Box

							width={"100%"}
							sx={{
								display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
								justifyContent: "center",
							}}>
							<div>
								<DynamicVideoPlayer videoUri={videoUri} />
							</div>
						</Box>
					</Grid>
					<Grid
						display={"flex"}
						justifyContent={"center"}
						item
						lg={5}
						md={5}
						sm={12}
						xs={12}>
						<Box sx={sx.boxTow}>
							<Typography
								sx={{
									marginTop: { xs: "-20px", sm: "0px", md: "0px" },
									marginRight: "2rem"
								}}
								className={styles.textHeading}>
								TradingView indicators
							</Typography>
							<Typography
								sx={{
									marginTop: { xs: "-10px", sm: "0px", md: "0px" },
									marginLeft: { xs: "10px", sm: "0px", md: "0px" },
								}}
								className={styles.textNormal}>
								Access in-depth research as our dedicated analysts utilize
								advanced tools and techniques to decipher market trends and
								uncover opportunities while providing invaluable learning
								experiences to hone your skills and become a more adept market
								navigator.
							</Typography>

						</Box>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default ToolsAndResearch;