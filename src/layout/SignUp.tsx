import React from 'react'
import { Box, Button, Grid, TextField, Typography } from "@mui/material"

//import image
import Logo from "../assets/logoNoBg.png"

const SignUp = () => {
    return (
        <Grid container sx={{ height: "100vh" }}>
            <Grid item md={12} xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                <Box sx={{ border: 2, width: 350, maxHeight: 600, borderColor: "#ababab", textAlign: "center" }}>
                    <Box sx={{ display: "center", justifyContent: "center", pt: 4 }}><img src={Logo} width={100} /></Box>
                    <Typography sx={{ pb: 3, fontSize: 22 }}>Real Estate</Typography>
                    <Box>
                        <TextField size='small' label="Full Name" placeholder='Full Name' InputLabelProps={{ shrink: true }} variant="outlined" />
                    </Box>
                    <Box sx={{ pt: 2 }}>
                        <TextField size='small' label="Username" placeholder='Username' InputLabelProps={{ shrink: true }} variant="outlined" />
                    </Box>
                    <Box sx={{ pt: 2 }}>
                        <TextField size='small' label="Email" placeholder='Email' InputLabelProps={{ shrink: true }} variant="outlined" />
                    </Box>
                    <Box sx={{ pt: 2 }}>
                        <TextField size='small' label="Phone Number" placeholder='Phone Number' InputLabelProps={{ shrink: true }} variant="outlined" />
                    </Box>
                    <Box sx={{ display: "center", justifyContent: "center", pt: 4, pb: 6 }}>
                        <Button variant='contained' sx={{ bgcolor: "#558381" }}>SignUp</Button>
                    </Box>
                </Box>
            </Grid>
            {/* <Grid item>
            </Grid> */}
        </Grid>
    )
}

export default SignUp