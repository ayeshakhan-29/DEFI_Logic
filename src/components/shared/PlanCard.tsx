import React, { FC } from "react";
import { Box, Typography, Collapse } from "@mui/material";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
import GenericButton from "./Button";
import styles from "../../../styles/Shared.module.css";

interface PlanCardProps {
	title: string;
	type: string;
	lowertext: string;
	features: string;
	buttonTitle: string;
	isOpen: boolean;
	children: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface PlanCardMobileProps {
	title: string;
	type: string;
	lowertext: string;
	features: string;
	buttonTitle: string;
	children: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

//Plan Card Desktop
const PlanCard: FC<PlanCardProps> = ({
	title,
	type,
	lowertext,
	features,
	buttonTitle,
	isOpen,
	children,
	onClick,
}) => {
	console.log("🚀 ~ file: PlanCard.tsx:27 ~ isOpen:", isOpen);
	return (
		<React.Fragment>
			<Box className={styles.box}>
				<div className={styles.plantype}>
					<Typography className={styles.planHeading}>{title}</Typography>
					<Typography className={styles.planHeadingType}>{type}</Typography>
					<Typography className={styles.planHeadingTypeBelow}>
						{lowertext}
					</Typography>
				</div>
				<div className={styles.buttonArea}>
					<GenericButton
						variant="contained"
						width="max-content"
						style={{
							padding: "0px 20px",
							marginTop: buttonTitle === "Contact us" ? 0 : 20,
							marginBottom: 20,
							backgroundColor:
								buttonTitle === "Subscribe now" ? "#ED6AA9" : "#9B67F7",
						}}
						onClick={onClick}>
						{buttonTitle}
					</GenericButton>
				</div>

				<div className={styles.plantype}>
					<Typography
						className={
							buttonTitle === "Subscribe now"
								? styles.planHeadingFeatures
								: styles.planHeadingFeatures2
						}
						style={{
							marginBottom:
								buttonTitle === "Sign up now"
									? 80
									: buttonTitle === "Subscribe now"
										? 55
										: 20,
						}}>
						{features}
					</Typography>
				</div>

				<div className={styles.boxMobileCenter}>{children}</div>

				<div className={styles.buttonArea}>
					{/* <GenericButton
						variant="contained"
						width="max-content"
						style={{
							padding: "0px 20px",
							backgroundColor:
								buttonTitle === "Subscribe now" ? "#ED6AA9" : "#9B67F7",
							marginTop:
								buttonTitle === "Sign up now"
									? isOpen
										? "112%"
										: "186%"
									: buttonTitle === "Subscribe now"
										? isOpen
											? "0%"
											: "110%"
										: buttonTitle === "Contact us"
											? isOpen
												? "165%"
												: "254%"
											: 0,
						}}
						onClick={onClick}>
						{buttonTitle}
					</GenericButton> */}
				</div>
			</Box>
		</React.Fragment>
	);
};

//Plan Card Mobile View
export const PlanCardMobile: FC<PlanCardMobileProps> = ({
	title,
	type,
	lowertext,
	features,
	buttonTitle,
	children,
	onClick,
}) => {
	return (
		<React.Fragment>
			<Box className={styles.boxMobile}>
				<div className={styles.plantype}>
					<Typography className={styles.planHeading}>{title}</Typography>
					<Typography className={styles.planHeadingType}>{type}</Typography>
					<Typography className={styles.planHeadingTypeBelow}>
						{lowertext}
					</Typography>
				</div>
				<Box
					sx={{
						display: { xs: "flex", sm: "flex", md: "none" },
						justifyContent: "center",
					}}>
					{/* <GenericButton
						variant="contained"
						width="max-content"
						style={{
							padding: "0px 20px",
							height: "35px",
							marginTop: buttonTitle === "Contact us" ? 0 : 27,
							marginBottom: 20,
							// backgroundColor:
							// 	buttonTitle === "Subscribe now" ? "#ED6AA9" : "#9B67F7",
						}}
						// fromPlans={buttonTitle === "Subscribe now" ? true : false}
						onClick={onClick}>
						{buttonTitle}
					</GenericButton> */}
				</Box>
				<Box
					sx={{
						display: { xs: "none", sm: "none", md: "flex" },
						justifyContent: "center",
					}}
					className={styles.buttonArea}>
					<GenericButton
						variant="contained"
						width="max-content"
						style={{
							padding: "0px 20px",
							marginTop:
								buttonTitle === "Contact us"
									? 0
									: buttonTitle === "Sign up now"
										? 29
										: 27,
							marginBottom: 20,
							// backgroundColor:
							// 	buttonTitle === "Subscribe now" ? "#ED6AA9" : "#9B67F7",
						}}
						fromPlans={buttonTitle === "Subscribe now" ? true : false}
						onClick={onClick}>
						{buttonTitle}
					</GenericButton>
				</Box>

				<div className={styles.plantype}>
					<Typography
						className={
							buttonTitle === "Subscribe now"
								? styles.planHeadingFeatures
								: styles.planHeadingFeatures2
						}
						sx={{
							marginBottom:
								buttonTitle === "Sign up now"
									? { xs: 0, md: "80px" }
									: buttonTitle === "Subscribe now"
										? { xs: "5px", md: "55px" }
										: { xs: "5px", md: "28px" },
						}}>
						{features}
					</Typography>
				</div>

				<div className={styles.boxMobileCenter}>{children}</div>

				<Box
					sx={{
						display: { xs: "flex", sm: "flex", md: "none" },
						justifyContent: "center",
					}}
					className={styles.buttonArea}>
					<GenericButton
						variant="contained"
						width="max-content"
						style={{
							padding: "0px 20px",
							height: "35px",
							marginTop: buttonTitle === "Contact us" ? 0 : 27,
							marginBottom: 20,
							// backgroundColor:
							// 	buttonTitle === "Subscribe now" ? "#ED6AA9" : "#9B67F7",
						}}
						// fromPlans={buttonTitle === "Subscribe now" ? true : false}
						onClick={onClick}>
						{buttonTitle}
					</GenericButton>
				</Box>
			</Box>
		</React.Fragment>
	);
};

export default PlanCard;