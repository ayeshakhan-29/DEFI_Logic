import React, { FC } from 'react';
import { IconButton, Typography } from '@mui/material';
import { Box } from "@mui/system";
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Collapse from '@mui/material/Collapse';
import styles from '../../../styles/PlansEducationAboutUs.module.css';

interface AccordionProps {
    isOpen: boolean,
    borderTop?: boolean,
    borderBottom?: boolean,
    mobile?: boolean,
    title: string,
    description: string,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

interface ViewFeatureAccordion {
    isOpen: boolean,
    children: React.ReactNode,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

// Desktop Accordion
const Accordion: FC<AccordionProps> = ({ isOpen, borderTop = false, borderBottom = false, title, description, onClick, mobile }) => {
    const sx = {
        boxBorder: {
            borderTop: borderTop ? '1px solid rgba(155, 103, 247, 0.2)' : 'unset',
            borderBottom: borderBottom ? '1px solid rgba(155, 103, 247, 0.2)' : 'unset',
            padding: '10px 10px 10px',
        },
        icon: {
            color: isOpen ? '#ED6AA9' : '#9B67F7',
        },
        featureHeader: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: mobile ? 'center' : 'space-between',
            cursor: 'pointer',
        },
        text: {
            color: isOpen ? '#ED6AA9' : '#f4f7f9',
        },
    };

    return (
        <React.Fragment>
            <Box sx={sx.boxBorder}>
                <div style={sx.featureHeader} onClick={onClick}>
                    <Typography className={styles.planHeadingFeatures} sx={sx.text}>{title}</Typography>
                    {mobile && (
                        <IconButton size="small" onClick={onClick}>
                            {isOpen ? <ArrowDownwardRoundedIcon sx={sx.icon} /> : <CloseRoundedIcon sx={sx.icon} />}
                        </IconButton>
                    )}
                </div>
                <Collapse in={isOpen} collapsedSize={0}>
                    <Typography marginTop={1} marginBottom={2} className={styles.textNormal}>{description}</Typography>
                </Collapse>
            </Box>
        </React.Fragment>
    );
}

// View Features Mobile View Accordion
export const ViewFeautureAccordion: FC<ViewFeatureAccordion> = ({ isOpen, children, onClick }) => {
    const sx = {
        viewFeaturesText: {
            color: '#fff', // Make "View features" white all the time
        },
        closeText: {
            color: isOpen ? '#ED6AA9' : '#fff', // Make "Close" pink when open and white when closed
        },
        collaps: {
            padding: '0px 15px',
        },
        icon: {
            color: isOpen ? '#ED6AA9' : '#fff', // Icon color (pink when open, white when closed)
        },
    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    backgroundColor: "#151B28",
                    width: "100%", // Ensure full width
                }}
            >
                <div className={styles.viewfeatureHeader} onClick={onClick}>
                    <Typography className={styles.featureText} sx={isOpen ? sx.closeText : sx.viewFeaturesText}>
                        {isOpen ? 'Close' : 'Learn More'}
                    </Typography>
                    <IconButton size="small" onClick={onClick}>
                        {isOpen ? <CloseRoundedIcon sx={sx.icon} /> : <ArrowDownwardRoundedIcon sx={sx.icon} />}
                    </IconButton>
                </div>
                <Collapse in={isOpen} collapsedSize={0} sx={sx.collaps}>
                    {children}
                </Collapse>
            </Box>
        </React.Fragment>
    );
}

export default Accordion;