import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Button } from '@mui/material/';


//import images
import LoanImg from "../../assets/real-estate-business-building-technology.webp"
import Typography from '@mui/material/Typography';

const Loan = () => {
    return (
        <Grid container>
            <Grid item xs={false} md={6} display={{ lg: "block" }} sx={{ position: "relative", textAlign: "center", top: 200 }}>
                <Typography sx={{ fontSize: 22, pb: 3, fontWeight: "bold", fontFamily: "monospace", textShadow: "1px 0px #000000" }}>Need a home loan? Get pre-approved</Typography>
                <Typography sx={{ pb: 3, fontFamily: "monospace" }}>Find a lender who can offer competitive mortgage rates and help you with pre-approval.</Typography>
                <Button variant="contained" sx={{ fontSize: 18, paddingBlock: 1, borderRadius: 3, mt: 2, mb: 4, boxShadow: 5, bgcolor: "#fffeca", color: "black", fontFamily: "monospace", fontWeight: "bold" }}>
                    Contact drejtorin
                </Button>
            </Grid>
            <Grid item md={6} display={{ xs: "none", lg: "block" }} sx={{ p: 5, }}>
                <img src={LoanImg} alt="loan" width={800} height={500} style={{ borderRadius: 100, boxShadow: "1px 2px #000000" }} />
            </Grid>
        </Grid>
    );
}
export default Loan;