import React from "react";
import { Container, Typography, Button, Paper, Grid } from "@mui/material";

const PurchaseSection = () => {
    return (
        <Container maxWidth="lg">
            <Paper elevation={3} style={{ borderRadius: "20px", padding: "20px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom>
                            Your Heading
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            Your text goes here. Provide a description of your product or service.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/* Text on the left side */}
                        <Typography variant="body1">
                            Additional information or details can be placed here.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/* "Buy Now" button on the right */}
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Buy Now
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default PurchaseSection;
