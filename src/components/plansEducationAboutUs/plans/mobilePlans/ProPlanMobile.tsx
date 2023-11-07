import React, { useState } from "react";
// import { Box } from "@mui/material";
import { Box } from "@mui/system";
import { PlanCardMobile } from "../../../shared/PlanCard";
import Accordion, { ViewFeautureAccordion } from "../../../shared/Accordion";
import data, { ProData } from "../plansdata";

const ProPlanMobile = () => {
	const [viewFeature, setViewFeature] = useState<boolean>(false);

	// Handle opening and closing the "View features" accordion
	const toggleViewFeatures = () => {
		setViewFeature(!viewFeature);
	};

	return (
		<React.Fragment>
			<Box
				sx={{
					display: {
						xs: "block",
						sm: "block",
						md: "none",
						lg: "none",
						xl: "none",
					},
				}}
			>
				<PlanCardMobile
					title="Pro"
					type="$XX/month"
					// lowertext="(limited availability)"
					buttonTitle="Subscribe now"
					features=""
				>
					<ViewFeautureAccordion
						isOpen={viewFeature}
						onClick={toggleViewFeatures}
					>
						{viewFeature ? (
							<>
								<Accordion
									title={ProData.feature1.title}
									description={ProData.feature1.details}
									isOpen={true}
									borderBottom
									onClick={toggleViewFeatures} // Close the features when "Close" is clicked
								/>
								<Accordion
									title={ProData.feature2.title}
									description={ProData.feature2.details}
									isOpen={true}
									borderBottom
									onClick={toggleViewFeatures} // Close the features when "Close" is clicked
								/>
							</>
						) : null}
					</ViewFeautureAccordion>
				</PlanCardMobile>
			</Box>
		</React.Fragment>
	);
};

export default ProPlanMobile;
