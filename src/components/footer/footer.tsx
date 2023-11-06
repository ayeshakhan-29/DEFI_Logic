import Link from "next/link";
import React, { FC } from "react";
import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

import Icon from "../shared/Icon";
import styles from "../../../styles/Footer.module.css";
import Image from "next/image";
import { assets } from "../../assets";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
	const sx = {
		footerLinks: {
			flexDirection: {
				xs: "column",
				sm: "column",
				md: "row",
				lg: "row",
				xl: "row",
			},
			gap: { xs: "20px", sm: "20px", md: "80px", lg: "80px", xl: "80px" },
		},
	};

	const handleScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const scrollOffset = id === "dfleducation" ? -170 : -100;
			const targetPosition = element.getBoundingClientRect().top;
			window.scrollBy(0, targetPosition + scrollOffset);
		}
	};

	return (
		<Grid className={styles.background}>
			<Container
				maxWidth="xl"
				sx={{ padding: { xs: "0px", sm: "0px" }, paddingLeft: { md: "55px" } }}>
				<Grid container sx={{ padding: "0px 22.5px" }} spacing={4}>
					<Grid item lg={3} md={4} sm={12} xs={12}>
						<Box display="flex" flexDirection="column" gap={2}>
							<Link href="/">
								<Image src={assets.logo} alt="Logo" width={187} />
							</Link>
							<div className="showcase-menu-social">
								<Box display="flex" gap="20px" paddingLeft={2}>
									<Icon link="https://www.linkedin.com/company/defi-logic/ ">
										<Image src={assets.linkedIn} alt="LinkedIn" width={22.5} />
									</Icon>
									<Icon link="https://www.youtube.com/@defi-logic">
										<Image src={assets.youtube} alt="YouTube" width={30} />
									</Icon>
									<Icon link="https://twitter.com/cryptos_anon">
										<Image src={assets.twitter} alt="Twitter" width={30} />
									</Icon>
									<IconButton
										disableRipple
										style={{ marginLeft: -12 }}
										onClick={() => handleScroll("plans")}>
										<Image
											style={{ marginTop: -8 }}
											src={assets.discord}
											alt="Discord"
											width={30}
										/>
									</IconButton>
								</Box>
							</div>
						</Box>
					</Grid>
					<Grid
						item
						lg={4}
						md={6}
						sm={12}
						xs={12}
						sx={{
							marginTop: { md: "100px", sm: "0px" },
							marginLeft: { xl: "-40px", md: "-58px", sm: "0px" },
						}}
						className={styles.linksBox}>
						<Box display="flex" color="info" sx={sx.footerLinks}>
							<Link
								href={"https://defi-logic.education/about/"}
								style={{ textDecoration: "none" }}>
								<Typography
									sx={{ "&:hover": { color: "#ED6AA9" } }}
									className={styles.links}>
									Contact us
								</Typography>
							</Link>
							<Link
								href={"https://defi-logic.education/terms-and-conditions/"}
								style={{ textDecoration: "none" }}>
								<Typography
									sx={{ "&:hover": { color: "#ED6AA9" } }}
									className={styles.links}>
									Terms and conditions
								</Typography>
							</Link>
						</Box>
						<Box display="flex" color="info" sx={sx.footerLinks}>
							<Link
								href={"https://defi-logic.education/privacy-policy/"}
								style={{ textDecoration: "none" }}>
								<Typography
									sx={{ "&:hover": { color: "#ED6AA9" } }}
									className={styles.links}>
									Privacy policy
								</Typography>
							</Link>
							<Link
								href={"https://defi-logic.education/accessibility-help/"}
								style={{ textDecoration: "none" }}>
								<Typography
									sx={{
										"&:hover": { color: "#ED6AA9" },
										marginLeft: { xs: 0, sm: 0, md: "-21px" },
									}}
									className={styles.links}>
									Accessibility help
								</Typography>
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Grid>
	);
};
export default Footer;
Footer;
