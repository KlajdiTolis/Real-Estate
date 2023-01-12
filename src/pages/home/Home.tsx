import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import Posts from "../posts/PostsCard"
import Map from "../map/Map"
import Loan from './Loan';
import HomeCarousel from './HomeCarousel';

//import Image
import House from "../../assets/realEstatebgImage.webp"
import Logo from "../../assets/real-estate-logo.png"
import { borderRadius } from '@mui/system';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const HorizontalTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const Copyright = () => {
        return (
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${House})`,
                    pt: 2,
                    pb: 12,
                    backgroundPosition: 'top',
                    borderBottomLeftRadius: 110,
                    borderBottomRightRadius: 110
                }}
            >
                <Container>
                    <Box sx={{ textAlign: "center" }}>
                        <img src={Logo} width={150} height={150} />
                    </Box>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        sx={{ pb: 2 }}
                    >
                        Let's Work Together
                    </Typography>
                    <Box sx={{ textAlign: "center", pb: 5 }}>
                        <input style={{ width: 350, height: 50, backgroundColor: "white", borderRadius: 10, paddingLeft: 25, opacity: "80%" }}
                            type="search" id="search" placeholder="Search..." required />
                    </Box>
                </Container>
            </Box>
            <Grid container>
                <Grid item md={5.5} xs={12}>
                    <Box sx={{ paddingInline: 5, pt: 5 }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                                <Tab label="Buy" {...a11yProps(0)} />
                                <Tab label="Sell" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Posts />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                    </Box>
                </Grid>
                <Grid item md={6.5} xs={11} >
                    <Map />
                </Grid>
            </Grid>
            <Box sx={{ pt: 14 }}>
            </Box>
            <Grid container>
                <Grid item md={4} xs={12}>
                    <Box sx={{ textAlign: "center", pt: 5, pl: 8, pr: 8 }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Box>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Box sx={{ textAlign: "center" }}>
                        <HomeCarousel />
                    </Box>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Box sx={{ textAlign: "center", pt: 5, pl: 8, pr: 8 }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Box>
                </Grid>
            </Grid>
            {/* Footer */}
            {/* <Box>
                <Loan />
            </Box> */}
            <Box sx={{ bgcolor: 'background.paper', pt: 15, pb: 5 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            End footer
            {/* </ThemeProvider> */}
        </Box>
    );
}
export default HorizontalTabs;