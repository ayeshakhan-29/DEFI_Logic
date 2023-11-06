import { useRef, Fragment } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { OutlinedButton } from "../../shared/Button";
import { assets } from "../../../assets";
import styles from "../../../../styles/HeroFeatureToolsResearch.module.css";
import Image from "next/image";
import sx from "./sx";
import 'swiper/swiper-bundle.min.css';


const FeatureSection = () => {
	const swiperRef = useRef<SwiperRef>(null);
	const swiperRefDesktop = useRef<SwiperRef>(null);

	const handleMobileSlides = (action: string) => {
		if (swiperRef.current && swiperRef.current.swiper) {
			const currentSlide = swiperRef.current.swiper.realIndex;
			const moveByUnits = action === "next" ? currentSlide + 1 : currentSlide - 1;
			swiperRef.current.swiper.slideTo(moveByUnits);
		}
	};

	const handleDesktopSlides = (action: string) => {
		if (swiperRefDesktop.current && swiperRefDesktop.current.swiper) {
			const currentSlide = swiperRefDesktop.current.swiper.realIndex;
			const moveByUnits = action === "next" ? currentSlide + 2 : currentSlide - 1;
			swiperRefDesktop.current.swiper.slideTo(moveByUnits);
		}
	};

	const sliderData = () => (
		<>
			<SwiperSlide id="feature">
				<div style={sx.featureCard}>
					<div style={{ height: 220 }}>
						<Image src={assets.indicators} width={250} alt="indicators" />
					</div>
					<Typography marginTop={1} className={styles.textFeature}>
						TradingView Indicators
					</Typography>
					<Typography marginTop={1} className={styles.textNormalFeatureCard}>
						Participate in twice-weekly meetings, blending in-depth technical analysis, Daily Dose reviews, and live demos with interactive Q&A sessions focused on crypto and broader market landscapes.
					</Typography>
				</div>
			</SwiperSlide>
			<SwiperSlide id="feature">
				<div style={sx.featureCard}>
					<div style={{ height: 220 }}>
						<Image src={assets.ai} width={250} alt="AI" />
					</div>
					<Typography marginTop={1} className={styles.textFeature}>
						AI-Research
					</Typography>
					<Typography marginTop={1} className={styles.textNormalFeatureCard}>
						Unlock members-only access to community-built products and services, coupled with exciting giveaways, amplifying value and nurturing growth within our collaborative, supportive ecosystem.
					</Typography>
				</div>
			</SwiperSlide>
			<SwiperSlide id="feature">
				<div style={sx.featureCard}>
					<div style={{ height: 220 }}>
						<Image
							src={assets.membersOnlyAccess}
							width={250}
							alt="membersOnlyAccess"
						/>
					</div>
					<Typography marginTop={1} className={styles.textFeature}>
						Members-Only Access
					</Typography>
					<Typography marginTop={1} className={styles.textNormalFeatureCard}>
						Unlock members-only access to community-built products and services,
						coupled with exciting giveaways, amplifying value and nurturing
						growth within our collaborative, supportive ecosystem.
					</Typography>
				</div>
			</SwiperSlide>
			<SwiperSlide id="feature">
				<div style={sx.featureCard}>
					<div style={{ height: 220 }}>
						<Image
							src={assets.consistentalpha}
							width={250}
							height={220}
							alt="directSupport"
						/>
					</div>
					<Typography marginTop={1} className={styles.textFeature}>
						Consistent Alpha
					</Typography>
					<Typography marginTop={1} className={styles.textNormalFeatureCard}>
						Experience priority support with our efficient ticket system,
						catering to entry-level and seasoned investors and traders alike
						throughout the crypto realm, ensuring prompt assistance and a
						seamless journey through our community.
					</Typography>
				</div>
			</SwiperSlide>
			<SwiperSlide id="feature">
				<div style={sx.featureCard}>
					<div style={{ height: 220 }}>
						<Image
							src={assets.dailyDose}
							width={250}
							height={220}
							alt="dailyDose"
						/>
					</div>
					<Typography marginTop={1} className={styles.textFeature}>
						Daily Dose
					</Typography>
					<Typography marginTop={1} className={styles.textNormalFeatureCard}>
						Explore comprehensive market and crypto reports meticulously created
						with advanced analytics and technology, designed to empower you with
						convenient insights necessary for strategic investment decisions.
					</Typography>
				</div>
			</SwiperSlide>
			<SwiperSlide id="feature">
				<div style={sx.featureCard}>
					<div style={{ height: 220 }}>
						<Image
							src={assets.communitycalls}
							width={250}
							height={220}
							alt="analystReportRequests"
						/>
					</div>
					<Typography marginTop={1} className={styles.textFeature}>
						Community Calls
					</Typography>
					<Typography marginTop={1} className={styles.textNormalFeatureCard}>
						Engage in the selection of analyst reports as a Navigator and, exclusive to Trailblazers, enjoy the privilege of requesting tailor-made reports to refine your investment approach.
					</Typography>
				</div>
			</SwiperSlide>
			<SwiperSlide id="feature">
				<div style={sx.featureCard}>
					<div style={{ height: 220 }}>
						<Image
							src={assets.sharedProsperity}
							width={250}
							height={220}
							alt="sharedProsperity"
						/>
					</div>
					<Typography marginTop={1} className={styles.textFeature}>
						Shared Prosperity
					</Typography>
					<Typography marginTop={1} className={styles.textNormalFeatureCard}>
						Leverage affiliate links for shared prosperity, and enjoy one month
						of crypto back annually for each year you stay with us (up to six
						months per year on your sixth anniversary) to celebrate long-term
						loyalty.
					</Typography>
				</div>
			</SwiperSlide>
			<SwiperSlide id="feature">
				<div style={sx.featureCard}>
					<div style={{ height: 220 }}>
						<Image
							src={assets.fellowship}
							width={250}
							height={220}
							alt="sharedProsperity"
						/>
					</div>
					<Typography marginTop={1} className={styles.textFeature}>
						Authentic Fellowship
					</Typography>
					<Typography marginTop={1} className={styles.textNormalFeatureCard}>
						Leverage affiliate links for shared prosperity, and enjoy one month
						of crypto back annually for each year you stay with us (up to six
						months per year on your sixth anniversary) to celebrate long-term
						loyalty.
					</Typography>
				</div>
			</SwiperSlide>
		</>
	);

	const handleScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const scrollOffset = id === "dfleducation" ? -170 : -100;
			const targetPosition = element.getBoundingClientRect().top;
			window.scrollBy(0, targetPosition + scrollOffset);
		}
	};

	return (
		<Fragment>
			<Container maxWidth="xl" id="features" style={{ paddingRight: 0 }}>
				<Grid container sx={sx.col2}>
					<Grid
						display={"flex"}
						justifyContent={"center"}
						item
						lg={5}
						md={5}
						sm={12}
						xs={12}>
						<Box sx={sx.boxTow}>
							<Typography className={styles.textHeading}>
								DeFi-Logic Features
							</Typography>
							<Typography className={styles.textNormal}>
								Experience a wealth of knowledge at your fingertips as our
								community grants direct and consistent access to seasoned
								analysts, market gurus, and proven winners, all eager to share
								their years of expertise and successful strategies with you.
							</Typography>
							<Box
								sx={{
									display: { xs: "none", sm: "flex", md: "flex" },
									justifyContent: "left",
								}}>
								<OutlinedButton
									width="195px"
									style={{ marginTop: 20 }}
									endIcon={
										<Image src={assets.forward} alt="Forward" width={15} />
									}
									className={styles.textNormal}
									onClick={() => handleScroll("plans")}>
									See our features
								</OutlinedButton>
							</Box>
							<Box
								sx={{
									display: { xs: "flex", sm: "none", md: "none" },
									justifyContent: "center",
								}}>
								<OutlinedButton
									width="195px"
									style={{ marginTop: 20 }}
									endIcon={
										<Image src={assets.forward} alt="Forward" width={15} />
									}
									className={styles.textNormal}
									onClick={() => handleScroll("plans")}
								>
									See our features
								</OutlinedButton>
							</Box>
						</Box>
					</Grid>
					<Grid marginLeft={"-15px"} item lg={7} md={7} sm={12} xs={12}>
						{/* Mobile */}
						<>
							<Box
								width={"100%"}
								sx={{
									display: { xs: "flex", sm: "none", md: "none", lg: "none" },
									justifyContent: "center",
									overflowX: "hidden",
									// paddingX: 2,
									paddingTop: 5,
								}}>
								<Swiper
									ref={swiperRef}
									cssMode={true}
									navigation={{
										nextEl: ".swiper-button-next",
										prevEl: ".swiper-button-prev",
									}}
									autoplay={{
										delay: 10000,
									}}
									// pagination={true}
									// mousewheel={true}
									// keyboard={true}
									slidesPerView={1}
									slidesPerGroup={1}
									modules={[Navigation, Autoplay]}
									className="mySwiper"
									style={{ paddingBottom: 40, paddingLeft: 40 }}>
									{sliderData()}
									<div
										className="swiper-button-next"
										onClick={() => handleMobileSlides("next")}
									/>
									<div
										className="swiper-button-prev"
										onClick={() => handleMobileSlides("prev")}
									/>
								</Swiper>
							</Box>
						</>

						{/* Other */}
						<>
							<Box
								width={"100%"}
								sx={{
									display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
									paddingLeft: {
										xs: "0px",
										sm: "0px",
										md: "110px",
										lg: "0px",
										xl: "38px",
									},
									justifyContent: "center",
									overflowX: "hidden",
									paddingTop: 5,
								}}>
								<Swiper
									ref={swiperRefDesktop}
									navigation={{
										nextEl: ".swiper-button-next",
										prevEl: ".swiper-button-prev",
									}}
									cssMode={true}
									modules={[Navigation, Autoplay]}
									autoplay={{
										delay: 20000,
									}}
									// pagination={true}

									// mousewheel={true}
									// keyboard={true}
									slidesPerView={2}
									slidesPerGroup={2}
									className="mySwiper"
									style={{
										paddingBottom: 40,
										paddingLeft: 65,
										paddingRight: 50,
									}}
									spaceBetween={12}>
									{sliderData()}
									<div
										className="swiper-button-next"
										onClick={() => handleDesktopSlides("next")}
									/>
									<div
										className="swiper-button-prev"
										onClick={() => handleDesktopSlides("prev")}
									/>
								</Swiper>
							</Box>
						</>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
};
export default FeatureSection;
