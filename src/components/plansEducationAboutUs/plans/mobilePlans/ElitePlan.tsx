import React, { useState } from "react";
// import { Box } from "@mui/material";
import { Box } from "@mui/system";
import { PlanCardMobile } from "../../../shared/PlanCard";
import Accordion, { ViewFeautureAccordion } from "../../../shared/Accordion";
import data, { EliteData } from "../plansdata";

const ElitePlanMobile = () => {
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
					title="Elite"
					type="Contact Us"
					lowertext=""
					buttonTitle="Contact Us"
					// features="All features of Explorer, plus:"
					sx={{ maxWidth: "100%" }} // Ensure full-width on mobile
				>
					<ViewFeautureAccordion
						isOpen={viewFeature}
						onClick={toggleViewFeatures}
						sx={{ width: "100%" }}
					>
						<div style={{ padding: "0px 15px" }}>
							{viewFeature ? (
								Object.keys(EliteData).map((featureKey) => (
									<Accordion
										key={featureKey}
										title={EliteData[featureKey].title}
										description={EliteData[featureKey].details}
										isOpen={true}
									/>
								))
							) : null}
						</div>
					</ViewFeautureAccordion>
				</PlanCardMobile>
			</Box>
		</React.Fragment>
	);
};

export default ElitePlanMobile;
