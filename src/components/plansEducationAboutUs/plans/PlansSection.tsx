import React, { useState } from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import styles from '../../../../styles/PlansEducationAboutUs.module.css';
import Accordion from '../../shared/Accordion';
import StarterPlanMobile from './mobilePlans/StarterPlanMobile';
import StarterPlan from './desktopPlans/StarterPlan';
import ProPlan from './desktopPlans/ProPlan';
import ProPlanMobile from './mobilePlans/ProPlanMobile';
import ElitePlan from './desktopPlans/ElitePlan';
import ElitePlanMobile from './mobilePlans/ElitePlan';
import data from './plansdata';
import sx from './sx';


const PlansSection = () => {
	// const [feature1, setFeatur1] = useState<boolean>(false);
	// const [feature2, setFeatur2] = useState<boolean>(true);
	// const [feature3, setFeatur3] = useState<boolean>(false);
	// const [feature4, setFeatur4] = useState<boolean>(false);
	// const [feature5, setFeatur5] = useState<boolean>(false);
	// const [feature6, setFeatur6] = useState<boolean>(false);

	// const handleFeatures = (title: string) => {
	// 	if (title === 'Feature 1') {
	// 		setFeatur1(!feature1)
	// 		setFeatur2(false)
	// 		setFeatur3(false)
	// 		setFeatur4(false)
	// 		setFeatur5(false)
	// 		setFeatur6(false)
	// 	} else if (title === 'Feature 2') {
	// 		setFeatur1(false)
	// 		setFeatur2(!feature2)
	// 		setFeatur3(false)
	// 		setFeatur4(false)
	// 		setFeatur5(false)
	// 		setFeatur6(false)
	// 	} else if (title === 'Feature 3') {
	// 		setFeatur1(false)
	// 		setFeatur2(false)
	// 		setFeatur3(!feature3)
	// 		setFeatur4(false)
	// 		setFeatur5(false)
	// 		setFeatur6(false)
	// 	}
	// 	else if (title === 'Feature 4') {
	// 		setFeatur1(false)
	// 		setFeatur2(false)
	// 		setFeatur3(false)
	// 		setFeatur4(!feature4)
	// 		setFeatur5(false)
	// 		setFeatur6(false)
	// 	}
	// 	else if (title === 'Feature 5') {
	// 		setFeatur1(false)
	// 		setFeatur2(false)
	// 		setFeatur3(false)
	// 		setFeatur4(false)
	// 		setFeatur5(!feature5)
	// 		setFeatur6(false)
	// 	}
	// 	else if (title === 'Feature 6') {
	// 		setFeatur1(false)
	// 		setFeatur2(false)
	// 		setFeatur3(false)
	// 		setFeatur4(false)
	// 		setFeatur5(false)
	// 		setFeatur6(!feature6)
	// 	}
	// }
	// return (
	// 	<React.Fragment>
	// 		<Container maxWidth='xl' sx={{ marginBottom: "40px" }} id='pricing'>
	// 			<Box >
	// 				<Typography sx={{ paddingLeft: 3, paddingRight: 3 }} className={styles.textHeading}>Plans</Typography>
	// 			</Box>
	// 			<Grid container columns={12} spacing={2} sx={{ paddingLeft: 3, paddingRight: 3 }} >
	// 				<Grid item xs={12} sm={12} md={3} lg={3} className={styles.features} >
	// 					<Box sx={sx.features}>
	// 						{/* Feature 1 */}
	// 						<Accordion title={data.feature1.title} description={data.feature1.details} isOpen={feature1} borderBottom={true} onClick={() => handleFeatures(data.feature1.title)} />
	// 						{/* Feature 2 */}
	// 						<Accordion title={data.feature2.title} description={data.feature2.details} isOpen={feature2} borderBottom={true} onClick={() => handleFeatures(data.feature2.title)} />
	// 						{/* Feature 3 */}
	// 						<Accordion title={data.feature3.title} description={data.feature3.details} isOpen={feature3} borderBottom={true} onClick={() => handleFeatures(data.feature3.title)} />
	// 						{/* Feature 4 */}
	// 						<Accordion title={data.feature4.title} description={data.feature4.details} isOpen={feature4} borderBottom={true} onClick={() => handleFeatures(data.feature4.title)} />
	// 						{/* Feature 5 */}
	// 						<Accordion title={data.feature5.title} description={data.feature5.details} isOpen={feature5} borderBottom={true} onClick={() => handleFeatures(data.feature5.title)} />
	// 						{/* Feature 6 */}
	// 						<Accordion title={data.feature6.title} description={data.feature6.details} isOpen={feature6} onClick={() => handleFeatures(data.feature6.title)} />
	// 					</Box>
	// 				</Grid>
	// 				<Grid item xs={12} sm={12} md={3} lg={3}>
	// 					<StarterPlan item1={feature1} item2={feature2} item3={feature3} item4={feature4} item5={feature5} item6={feature6} />
	// 					<StarterPlanMobile />
	// 				</Grid>
	// 				<Grid item xs={12} sm={12} md={3} lg={3}>
	// 					<ProPlan item1={feature1} item2={feature2} item3={feature3} item4={feature4} item5={feature5} item6={feature6} />
	// 					<ProPlanMobile />
	// 				</Grid>
	// 				<Grid item xs={12} sm={12} md={3} lg={3} >
	// 					<ElitePlan item1={feature1} item2={feature2} item3={feature3} item4={feature4} item5={feature5} item6={feature6} />
	// 					<ElitePlanMobile />
	// 				</Grid>
	// 			</Grid>
	// 		</Container>
	// 	</React.Fragment>
	// );
};
export default PlansSection;
