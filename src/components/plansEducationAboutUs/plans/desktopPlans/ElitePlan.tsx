import React, { FC, useState } from "react";
import { Box } from "@mui/material";
import PlanCard, { PlanCardMobile } from "../../../shared/PlanCard";
import LearnMoreAccordion from "../../../shared/LearnMoreAccordion";
import Accordion from "../../../shared/Accordion";  // Import your Accordion component
import data, { EliteData } from "../plansdata";

interface ElitePlanProps {
	item1: boolean;
	item2: boolean;
	item3: boolean;
	item4: boolean;
	item5: boolean;
	item6: boolean;
}

const ElitePlan: FC<ElitePlanProps> = ({
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
		<>
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
					title="Navigator"
					type="$69/month"
					lowertext=""
					buttonTitle="Subscribe now"
					features="All features of Explorer, plus:"
				>
					<div style={{ padding: "0px 15px" }}>
						<LearnMoreAccordion
							title="Learn More"
							description=""
							isOpen={learnMoreOpen}
							onClick={toggleLearnMore}
						/>
						{Object.keys(EliteData).map((featureKey) => (
							<div key={featureKey}>
								{learnMoreOpen && (
									<Accordion
										title={EliteData[featureKey as keyof typeof EliteData].title}
										description={EliteData[featureKey as keyof typeof EliteData].details}
										isOpen={learnMoreOpen} // Use the learnMoreOpen state here
										onClick={toggleLearnMore} // Keep the onClick prop for the Accordion
										borderBottom
									/>
								)}
							</div>
						))}
					</div>
				</PlanCardMobile>
			</Box>
		</>
	);
}

export default ElitePlan;
