"use client"
import React, { FC } from "react";
import { Container, Grid, Link, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import sx from "./sx";
import { assets } from "../../../assets";
import Button, { OutlinedButton } from "../../shared/Button";
import GenericButton from "../../shared/Button";
import styles from "../../../../styles/PlansEducationAboutUs.module.css";

interface EducatioAndAboutUs { }

const EducatioAndAboutUs: FC<EducatioAndAboutUs> = ({ }) => {
	const handleScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const scrollOffset = id === "dfleducation" ? -170 : -100;
			const targetPosition = element.getBoundingClientRect().top;
			window.scrollBy(0, targetPosition + scrollOffset);
		}
	};
	return (
		<Grid>
			<Container maxWidth="xl" id="education">
				<Grid container sx={sx.col2}>
					{/* Education Section */}
					<React.Fragment>
						{/* Image Tab & Mob*/}
						<Grid
							sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
							item
							lg={6}
							md={6}
							sm={12}
							xs={12}
						// paddingTop={10}
						>
							<Box
								width={"100%"}
								sx={{ display: "flex", justifyContent: "center" }}
								style={{ marginTop: "50px" }}>
								<Image
									src={assets.education}
									alt="DFL Education"
									// className={styles.toolsImg}
									width={290}
								/>
							</Box>
						</Grid>

						{/* Text */}
						<Grid
							display={"flex"}
							item
							justifyContent={"center"}
							sx={{ paddingTop: { xs: 0, sm: 0, md: 1 } }}
							lg={6}
							md={6}
							sm={12}
							xs={12}>
							<Box sx={sx.boxTow}>
								<Typography className={styles.textHeading} id="dfleducation">
									DeFi-Logic.education
								</Typography>
								<Typography
									sx={{ marginLeft: { xs: "18px", sm: "0px", md: "0px" } }}
									className={styles.textNormalJustify}>
									Explore our free education platform, overflowing with
									insightful articles and in-depth content designed to showcase
									the essence of our community and provide a comprehensive
									understanding of the investment landscape while empowering you
									to make well-informed decisions.
								</Typography>

								<Box
									sx={{
										display: { xs: "none", sm: "flex", md: "flex" },
										justifyContent: "left",
									}}>
									<OutlinedButton
										width="270px"
										style={{ marginTop: 45 }}
										endIcon={
											<Image src={assets.goNext} alt="Forward" width={15} />
										}
										className={styles.textNormal}>
										<Link
											href="https://defi-logic.education/"
											className={styles.textNormal}
											underline="none">
											Visit our resource site
										</Link>
									</OutlinedButton>
								</Box>
								<Box
									sx={{
										display: { xs: "flex", sm: "none", md: "none" },
										justifyContent: "center",
									}}>
									<OutlinedButton
										width="270px"
										style={{ marginTop: 20 }}
										endIcon={
											<Image src={assets.goNext} alt="Forward" width={15} />
										}
										className={styles.textNormal}>
										<Link
											href="https://defi-logic.education/"
											className={styles.textNormal}
											underline="none">
											Visit our resource site
										</Link>
									</OutlinedButton>
								</Box>
							</Box>
						</Grid>
						{/* Image Laptop */}
						<Grid
							sx={{
								display: { xs: "none", sm: "none", md: "flex", lg: "none" },
							}}
							item
							lg={6}
							md={6}
							sm={12}
							xs={12}>
							<Box
								width={"100%"}
								sx={{
									display: "flex",
									justifyContent: "center",
									paddingRight: 3,
								}}>
								<Image
									src={assets.education}
									alt="DFL Education"
									// className={styles.toolsImg}
									width={400}
									style={{ marginLeft: -45 }}
								/>
							</Box>
						</Grid>
						<Grid
							sx={{
								display: { xs: "none", sm: "none", md: "none", lg: "flex" },
							}}
							item
							lg={6}
							md={6}
							sm={12}
							xs={12}>
							<Box
								width={"100%"}
								sx={{
									display: "flex",
									justifyContent: "center",
									paddingRight: 3,
								}}>
								<Image
									src={assets.education}
									alt="DFL Education"
									width={430}
									style={{ marginLeft: -115 }}
								/>
							</Box>
						</Grid>
					</React.Fragment>

					{/* Email Row */}
					<Box
						marginTop={10}
						sx={{ border: 1, borderColor: "#9B67F7" }}
						className={styles.report}>
						<Grid container>
							<Grid
								sx={{
									display: { xs: "flex" },
									flexDirection: { xs: "column" },
									alignItems: { xs: "center", sm: "center", md: "flex-start" }, //center
									marginBottom: { md: "-10px" }
								}}
								// margin="auto"
								item
								lg={3}
								md={4}
								sm={12}
								xs={12}>
								<Typography className={styles.textSmall}>
									Stay in the know.
								</Typography>
								<Typography className={styles.textNormal}>
									Join our monthly newsletter.
								</Typography>
							</Grid>
							<Grid item lg={7} md={6} sm={12} xs={12} margin="auto">
								<TextField
									sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
									fullWidth={true}
									placeholder="Enter your email"
								/>
							</Grid>
							<Grid item lg={2} md={2} sm={12} xs={12} margin="auto">
								<Box
									sx={{
										display: { xs: "flex" },
										justifyContent: {
											xs: "center",
											sm: "center",
											md: "flex-end",
										},
										alignItems: "center",
										paddingTop: { xs: 3, md: 0 },
										paddingLeft: { xs: 0, md: 3 },
									}}>
									<OutlinedButton
										className={styles.textNormal}
										width="100%"
										variant="outlined"
										style={{ height: "35px" }}
										onClick={() => { }}>
										Submit
									</OutlinedButton>
								</Box>
							</Grid>
						</Grid>
					</Box>

					{/* About Us */}
					<React.Fragment>
						{/* Image */}
						<Grid paddingTop={10} item lg={6} md={6} sm={12} xs={12}>
							<Box
								width={"100%"}
								sx={{
									display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
									justifyContent: {
										lg: "flex-start",
										md: "flex-start",
										sm: "center",
										xs: "center",
									},
								}}>
								<Image src={assets.aboutUs} alt="About Us" width={300} />
							</Box>
							<Box
								width={"100%"}
								sx={{
									display: { xs: "none", sm: "none", md: "flex", lg: "none" },
									justifyContent: "center",
								}}>
								<Image src={assets.aboutUs} alt="About Us" width={330} />
							</Box>
							<Box
								width={"100%"}
								sx={{
									display: { xs: "none", sm: "none", md: "none", lg: "flex" },
									justifyContent: "center",
								}}>
								<Image src={assets.aboutUs} alt="About Us" width={430} />
							</Box>
						</Grid>
						{/* Text */}
						<Grid
							display={"flex"}
							item
							justifyContent={"center"}
							sx={{ paddingTop: { xs: 0, sm: 0, md: 7 } }}
							lg={6}
							md={6}
							sm={12}
							xs={12}>
							<Box sx={sx.boxTow}>
								<Typography className={styles.textHeading}>
									About us
								</Typography>
								<Typography
									sx={{ marginLeft: { xs: "17px", sm: "0px", md: "0px" } }}
									className={styles.textNormalJustify}>
									After three years as a free community, Cryptos Anon, we’ve
									evolved into a dynamic think-tank experience that fosters
									genuine community collaboration, empowering you to make
									informed decisions in the crypto and overlapping markets as
									you strive for financial freedom and individual sovereignty.
								</Typography>
								<Box
									sx={{
										display: { xs: "none", sm: "flex", md: "flex" },
										justifyContent: "left",
									}}>
									<OutlinedButton
										width="270px"
										style={{ marginTop: 50 }}
										endIcon={
											<Image src={assets.goNext} alt="Forward" width={15} />
										}
										className={styles.textNormal}>
										<Link
											href="https://defi-logic.education/about/"
											className={styles.textNormal}
											underline="none">
											Learn More About Us
										</Link>
									</OutlinedButton>
								</Box>
								<Box
									sx={{
										display: { xs: "flex", sm: "none", md: "none" },
										justifyContent: "center",
									}}>
									<OutlinedButton
										width="270px"
										style={{ marginTop: 20 }}
										endIcon={
											<Image src={assets.goNext} alt="Forward" width={15} />
										}
										className={styles.textNormal}>
										<Link
											href="https://defi-logic.education/about/"
											className={styles.textNormal}
											underline="none">
											Learn More About Us
										</Link>
									</OutlinedButton>
								</Box>
							</Box>
						</Grid>
					</React.Fragment>

					{/* Review Slider */}
					<React.Fragment>
						<Grid paddingY={4} item lg={12} md={12} sm={12} xs={12}>
							<Box
								width={"100%"}
								sx={{
									display: "flex",
									justifyContent: "center",
									overflowX: "hidden",
									// paddingX: 2,
									paddingTop: 5,
								}}>
								<Swiper
									cssMode={true}
									navigation={true}
									mousewheel={true}
									keyboard={true}
									slidesPerView={1}
									autoplay={{
										delay: 10000,
									}}
									modules={[Navigation, Mousewheel, Autoplay]}>
									<SwiperSlide>
										<div style={sx.reviewCard}>
											<Grid
												item
												display={"flex"}
												flexDirection={{
													lg: "row",
													md: "row",
													sm: "column",
													xs: "column",
												}}
												paddingX={7}
												paddingY={3}>
												<Grid item lg={2} md={2} sm={12} xs={12} margin="0">
													<Box
														sx={{
															display: "flex",
															justifyContent: {
																xs: "flex-start",
																md: "center",
															},
															alignItems: "center",
														}}>
														<Image
															alt="Skyloreafk"
															src={assets.Skyloreafk}
															style={{
																height: 90,
																width: 90,
																// backgroundColor: "#D9D9D9",
																borderRadius: 50,
																objectFit: "cover",
																// display: "flex",
																// textAlign: "center",
																// alignItems: "center",
															}}
														/>
													</Box>
												</Grid>
												<Grid item lg={9} md={9} sm={11} xs={11}>
													<Typography className={styles.textNormal}>
														…I found my people when I joined Defi-Logic… a solid
														group of guys and gals who take a professional & fun
														approach to crypto. Chats about news and hot
														projects arm me with…alpha to gain a profitable
														edge…
													</Typography>
													<Typography
														style={{ color: "#9B67F7" }}
														className={styles.textNormal}>
														— Skyloreafk
													</Typography>
												</Grid>
											</Grid>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div style={sx.reviewCard}>
											<Grid
												item
												display={"flex"}
												flexDirection={{
													lg: "row",
													md: "row",
													sm: "column",
													xs: "column",
												}}
												paddingX={7}
												paddingY={5}>
												<Grid item lg={2} md={2} sm={12} xs={12} margin="0">
													<Box
														sx={{
															display: "flex",
															justifyContent: {
																xs: "flex-start",
																md: "center",
															},
															alignItems: "center",
														}}>
														<Image
															alt="Marquise"
															src={assets.Marquise}
															style={{
																height: 90,
																width: 90,
																// backgroundColor: "#D9D9D9",
																borderRadius: 50,
																objectFit: "cover",
																// display: "flex",
																// textAlign: "center",
																// alignItems: "center",
															}}
														/>
													</Box>
												</Grid>
												<Grid item lg={9} md={9} sm={11} xs={11}>
													<Typography className={styles.textNormal}>
														…technical analysis and [other] real ones…are really
														informative…starting out in the defi/crypto space,
														this is something I would definitely love to have
														with the additional bonus of being able to talk
														about more than crypto.
													</Typography>
													<Typography
														style={{ color: "#9B67F7" }}
														className={styles.textNormal}>
														— Marquise
													</Typography>
												</Grid>
											</Grid>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div style={sx.reviewCard}>
											<Grid
												item
												display={"flex"}
												flexDirection={{
													lg: "row",
													md: "row",
													sm: "column",
													xs: "column",
												}}
												paddingX={7}
												paddingY={5}>
												<Grid item lg={2} md={2} sm={12} xs={12} margin="0">
													<Box
														sx={{
															display: "flex",
															justifyContent: {
																xs: "flex-start",
																md: "center",
															},
															alignItems: "center",
														}}>
														<Image
															alt="Obreezy"
															src={assets.Obreezy}
															style={{
																height: 90,
																width: 90,
																// backgroundColor: "#D9D9D9",
																borderRadius: 50,
																objectFit: "cover",
																// display: "flex",
																// textAlign: "center",
																// alignItems: "center",
															}}
														/>
													</Box>
												</Grid>
												<Grid item lg={9} md={9} sm={11} xs={11}>
													<Typography className={styles.textNormal}>
														I appreciated the fact that it is a group of good
														people willing to help each other, without becoming
														sanctimonious. People laughed, and have a good time,
														while improving themselves and others. And the Pepe
														memes, those are fire.
													</Typography>
													<Typography
														style={{ color: "#9B67F7" }}
														className={styles.textNormal}>
														— Obreezy
													</Typography>
												</Grid>
											</Grid>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div style={sx.reviewCard}>
											<Grid
												item
												display={"flex"}
												flexDirection={{
													lg: "row",
													md: "row",
													sm: "column",
													xs: "column",
												}}
												paddingX={7}
												paddingY={5}>
												<Grid item lg={2} md={2} sm={12} xs={12} margin="0">
													<Box
														sx={{
															display: "flex",
															justifyContent: {
																xs: "flex-start",
																md: "center",
															},
															alignItems: "center",
														}}>
														<Image
															alt="Trillstradamus"
															src={assets.Trillstradamus}
															style={{
																height: 90,
																width: 90,
																// backgroundColor: "#D9D9D9",
																borderRadius: 50,
																objectFit: "cover",
																// display: "flex",
																// textAlign: "center",
																// alignItems: "center",
															}}
														/>
													</Box>
												</Grid>
												<Grid item lg={9} md={9} sm={11} xs={11}>
													<Typography className={styles.textNormal}>
														The potential for growth since joining is infinite.
														The write-ups are fire af, real comprehensive. Save
														me time from doing…research, better than…published
														news articles out here. Appreciate your work.
													</Typography>
													<Typography
														style={{ color: "#9B67F7" }}
														className={styles.textNormal}>
														— Trillstradamus
													</Typography>
												</Grid>
											</Grid>
										</div>
									</SwiperSlide>
								</Swiper>
							</Box>
						</Grid>
					</React.Fragment>

					{/* Community Section */}
					<React.Fragment>
						{/* Image Tab & Mob*/}
						<Grid
							sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
							item
							lg={6}
							md={6}
							sm={12}
							xs={12}
							// paddingTop={10}
							marginLeft={-1}>
							<Box
								width={"100%"}
								sx={{ display: "flex", justifyContent: "center" }}>
								<Image
									src={assets.community}
									alt="DFL Community"
									// className={styles.toolsImg}
									width={360}
								/>
							</Box>
						</Grid>
						{/* Text */}
						<Grid
							display={"flex"}
							item
							justifyContent={"center"}
							sx={{ paddingTop: { xs: 0, sm: 0, md: 7 } }}
							lg={6}
							md={6}
							sm={12}
							xs={12}>
							<Box sx={sx.boxTow}>
								<Typography className={styles.textHeading}>
									Join the community
								</Typography>
								<Typography
									sx={{ marginLeft: { xs: "17px", sm: "0px", md: "0px" } }}
									className={styles.textNormalJustify}>
									Join DeFi-Logic Co-Op, where valuable investment insights are
									shared in a genuine, no-shill environment. Our diverse group
									comprises members of various levels of financial
									understanding, political beliefs, career paths, and
									nationalities, fostering an inclusive space for learning and
									growth.
								</Typography>
								<Box
									sx={{
										display: { xs: "none", sm: "flex", md: "flex" },
										justifyContent: "left",
									}}>
									<OutlinedButton
										width="200px"
										style={{ marginTop: 50 }}
										endIcon={
											<Image src={assets.forward} alt="Forward" width={15} />
										}
										className={styles.textNormal}
										onClick={() => handleScroll("plans")}>
										<Link
											// href="https://defi-logic.education/"
											className={styles.textNormal}
											underline="none">
											Join the Discord
										</Link>
									</OutlinedButton>
								</Box>
								<Box
									sx={{
										display: { xs: "flex", sm: "none", md: "none" },
										justifyContent: "center",
									}}>
									<OutlinedButton
										width="200px"
										style={{ marginTop: 20 }}
										endIcon={
											<Image src={assets.forward} alt="Forward" width={15} />
										}
										className={styles.textNormal}
										onClick={() => handleScroll("plans")}>
										<Link
											// href="https://defi-logic.education/"
											className={styles.textNormal}
											underline="none">
											Join the Discord
										</Link>
									</OutlinedButton>
								</Box>
							</Box>
						</Grid>
						{/* Image Laptop */}
						<Grid
							sx={{
								display: { xs: "none", sm: "none", md: "flex", lg: "none" },
							}}
							item
							lg={6}
							md={6}
							sm={12}
							xs={12}>
							<Box
								width={"100%"}
								sx={{
									display: "flex",
									justifyContent: "center",
									paddingRight: 3,
									paddingTop: 6,
								}}>
								<Image
									src={assets.community}
									alt="DFL Community"
									// className={styles.toolsImg}
									width={400}
								/>
							</Box>
						</Grid>
						<Grid
							sx={{
								display: { xs: "none", sm: "none", md: "none", lg: "flex" },
							}}
							item
							lg={6}
							md={6}
							sm={12}
							xs={12}>
							<Box
								width={"100%"}
								sx={{
									display: "flex",
									justifyContent: "center",
									paddingRight: 3,
									paddingTop: 5,
								}}>
								<Image
									src={assets.community}
									alt="DFL Community"
									width={530}
									height={490}
									style={{ marginLeft: -145 }}
								/>
							</Box>
						</Grid>
					</React.Fragment>
				</Grid>
			</Container>
		</Grid>
	);
};
export default EducatioAndAboutUs;
