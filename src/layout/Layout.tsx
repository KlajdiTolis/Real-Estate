import { Outlet, Link } from "react-router-dom";
import { Grid } from '@mui/material'

const Layout = () => {
    return (
        <>
            <Grid container spacing={1}>
                <Grid item md={1} xs={false}>
                    <Link to="/dashboard" style={{ textDecoration: "none", color: "white", fontSize: 20, fontWeight: "bold", fontFamily: "monospace", textShadow: "2px 2px #000000" }}>HOME</Link>
                </Grid>
                <Grid item md={1} xs={false} >
                    <Link to="/buy" style={{ textDecoration: "none", color: "white", fontSize: 20, fontWeight: "bold", fontFamily: "monospace", textShadow: "2px 2px #000000" }}>BUY</Link>
                </Grid>
                <Grid item md={1} xs={false}>
                    <Link to="/sell" style={{ textDecoration: "none", color: "white", fontSize: 20, fontWeight: "bold", fontFamily: "monospace", textShadow: "2px 2px #000000" }}>SELL</Link>
                </Grid>
                <Grid item md={1} xs={false}>
                    <Link to="/rent" style={{ textDecoration: "none", color: "white", fontSize: 20, fontWeight: "bold", fontFamily: "monospace", textShadow: "2px 2px #000000" }}>RENT</Link>
                </Grid>
            </Grid>
            {/* <Link to="dashboard/edit">Contact</Link> */}
            <Outlet />
        </>
    )
};

export default Layout;