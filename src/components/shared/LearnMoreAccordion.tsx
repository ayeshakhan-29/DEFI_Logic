import React, { FC } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Collapse from '@mui/material/Collapse';
import styles from '../../../styles/PlansEducationAboutUs.module.css';

interface LearnMoreAccordionProps {
    isOpen: boolean,
    title: string,
    description: string,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const LearnMoreAccordion: FC<LearnMoreAccordionProps> = ({ isOpen, title, description, onClick }) => {
    const sx = {
        boxBorder: {
            borderTop: '1px solid rgba(155, 103, 247, 0.2)',
            borderBottom: '1px solid rgba(155, 103, 247, 0.2)',
            padding: '10px 10px 10px',
        },
        featureHeader: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
        },
        text: {
            color: isOpen ? '#ED6AA9' : '#f4f7f9',
        },
        icon: {
            color: isOpen ? '#ED6AA9' : '#9B67F7',
        },
    };

    return (
        <React.Fragment>
            <Box sx={sx.boxBorder}>
                <div style={sx.featureHeader} onClick={onClick}>
                    <Typography className={styles.planHeadingFeatures} sx={sx.text}>
                        {isOpen ? 'Close' : title}
                    </Typography>
                    <IconButton>
                        {isOpen ? <CloseRoundedIcon sx={sx.icon} /> : <ArrowDownwardRoundedIcon sx={sx.icon} />}
                    </IconButton>
                </div>
                <Collapse in={isOpen} collapsedSize={0}>
                    {isOpen && (
                        <Typography marginTop={1} marginBottom={2} className={styles.textNormal}>
                            {description}
                        </Typography>
                    )}
                </Collapse>
            </Box>
        </React.Fragment>
    );
};

export default LearnMoreAccordion;
