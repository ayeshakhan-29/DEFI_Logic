import React, { FC, useState } from "react";
import { Box } from "@mui/material";
import PlanCard, { PlanCardMobile } from "../../../shared/PlanCard";
import LearnMoreAccordion from "../../../shared/LearnMoreAccordion";
import data, { ProData } from "../plansdata";

interface ProPlanProps {
	item1: boolean;
	item2: boolean;
	item3: boolean;
	item4: boolean;
	item5: boolean;
	item6: boolean;
}

const ProPlan: FC<ProPlanProps> = ({
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
					title="Trailblazer"
					type="By Application and Referral Only"
					lowertext=""
					buttonTitle="Contact us"
					features="All features of Explorer & Navigator, plus:"
				>
					<div style={{ padding: "0px 15px" }}>
						<LearnMoreAccordion
							title="Learn More"
							description=""
							isOpen={learnMoreOpen}
							onClick={toggleLearnMore}
						/>
						{Object.keys(ProData).map((featureKey) => (
							<div key={featureKey}>
								{learnMoreOpen && (
									<Accordion
										title={ProData[featureKey].title}
										description={ProData[featureKey].details}
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

export default ProPlan;
