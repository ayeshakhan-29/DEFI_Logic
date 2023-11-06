import React, { useState } from "react";
import { Box } from "@mui/material";
import { PlanCardMobile } from "../../../shared/PlanCard";
import Accordion, { ViewFeautureAccordion } from "../../../shared/Accordion";
import data, { StarterData } from "../plansdata";

const StarterPlanMobile = () => {
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
					title="Explorer"
					type="FREE"
					// lowertext="(limited availability)"
					buttonTitle="Sign up now"
					features=""
				>
					<ViewFeautureAccordion
						isOpen={viewFeature}
						onClick={toggleViewFeatures}
					>
						{viewFeature ? (
							<>
								<Accordion
									title={StarterData.feature1.title}
									description={StarterData.feature1.details}
									isOpen={true}
									borderBottom
								/>
								<Accordion
									title={StarterData.feature2.title}
									description={StarterData.feature2.details}
									isOpen={true}
									borderBottom
								/>
								<Accordion
									title={StarterData.feature3.title}
									description={StarterData.feature3.details}
									isOpen={true}
									borderBottom
								/>
								<Accordion
									title={StarterData.feature4.title}
									description={StarterData.feature4.details}
									isOpen={true}
									borderBottom
								/>
								<Accordion
									title={StarterData.feature5.title}
									description={StarterData.feature5.details}
									isOpen={true}
									borderBottom
								/>
							</>
						) : null}
					</ViewFeautureAccordion>
				</PlanCardMobile>
			</Box>
		</React.Fragment>
	);
};

export default StarterPlanMobile;
