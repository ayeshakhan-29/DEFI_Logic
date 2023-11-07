import dynamic from 'next/dynamic';
import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import styles from "../../../../styles/HeroFeatureToolsResearch.module.css";
import { assets } from "../../../assets";
import sx from "./sx";
import GenericButton, { OutlinedButton } from "../../shared/Button";


const VideoPlayer = dynamic(() => import('../toolsAndResearch/VideoPlayer'), {
    ssr: false, // Set ssr to false to render on the client side.
});

const AIWeb = () => {
    const videoUri = 'https://www.youtube.com/embed/Yj2NZaefbl0?si=cVyFUlTgL3jkGsSS'; // Replace with the actual video URL

    return (
        <Container maxWidth="xl" id="toolsResearch">
            <Grid container sx={sx.col2}>
                <Grid
                    display={"flex"}
                    justifyContent={"flex-start"} // Align the content to the left
                    item
                    lg={5}
                    md={5}
                    sm={12}
                    xs={12}>
                    <Box sx={sx.boxTow}>
                        <Typography
                            sx={{
                                marginTop: { xs: "-20px", sm: "0px", md: "0px" },
                                marginRight: "17rem"
                            }}
                            className={styles.textHeading}>
                            AI
                        </Typography>
                        <Typography
                            sx={{
                                marginTop: { xs: "-10px", sm: "0px", md: "0px" },
                                marginLeft: "6rem", // Add left margin to the rest of the text
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

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box
                        width={"100%"}
                        sx={{
                            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                            justifyContent: "center",
                            paddingLeft: "10rem", // Add padding for space on the right
                            marginTop: "10rem"
                        }}>
                        <div>
                            <VideoPlayer videoUri={videoUri} />
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AIWeb;
