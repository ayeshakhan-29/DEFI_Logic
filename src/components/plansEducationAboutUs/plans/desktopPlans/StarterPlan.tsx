import React, { FC, useState } from "react";
import { Box } from "@mui/material";
import PlanCard, { PlanCardMobile } from "../../../shared/PlanCard";
import Accordion from "../../../shared/Accordion";
import LearnMoreAccordion from "../../../shared/LearnMoreAccordion";
import data, { StarterData } from "../plansdata";

interface StarterPlanProps {
	item1: boolean;
	item2: boolean;
	item3: boolean;
	item4: boolean;
	item5: boolean;
	item6: boolean;
}

const StarterPlan: FC<StarterPlanProps> = ({
	item1,
	item2,
	item3,
	item4,
	item5,
	item6,
}) => {
	const [learnMoreOpen, setLearnMoreOpen] = useState<boolean>(false);

	// Helper function to toggle Learn More
	const toggleLearnMore = () => {
		setLearnMoreOpen(!learnMoreOpen);
	};

	return (
		<React.Fragment>
			<Box
				sx={{
					display: {
						xs: "none",
						sm: "none",
						md: "block",
						lg: "block",
						xl: "block",
					},
				}}
			>
				<PlanCardMobile
					title="Explorer"
					type="FREE"
					lowertext="(limited availability)"
					buttonTitle="Sign up now"
					features=""
				>
					<div style={{ padding: "0px 15px" }}>
						<LearnMoreAccordion
							title="Learn More"
							description=""
							isOpen={learnMoreOpen}
							onClick={toggleLearnMore}
						/>
						{Object.keys(StarterData).map((featureKey) => (
							<div key={featureKey}>
								{learnMoreOpen && (
									<Accordion
										title={StarterData[featureKey].title}
										description={StarterData[featureKey].details}
										isOpen={true}
										borderBottom
									/>
								)}
							</div>
						))}
					</div>
				</PlanCardMobile>
			</Box>
		</React.Fragment>
	);
};

export default StarterPlan;
