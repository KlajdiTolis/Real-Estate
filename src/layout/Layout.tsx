import { Outlet, Link } from "react-router-dom";
import { Grid } from '@mui/material'

const Layout = () => {
    return (
        <>
            <Grid container>
                <Grid item md={1} xs={false}>
                    <Link to="/dashboard" style={{ textDecoration: "none", color: "black", fontSize: 20, paddingLeft: 20, fontWeight: "bold", fontFamily: "Times" }}>Home</Link>
                </Grid>
                <Grid item md={1} xs={false} >
                    <Link to="/blogs" style={{ textDecoration: "none", color: "black", fontSize: 20, fontWeight: "bold", fontFamily: "Times" }}>Blogs</Link>
                </Grid>
            </Grid>
            {/* <Link to="dashboard/edit">Contact</Link> */}
            <Outlet />
        </>
    )
};

export default Layout;