import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

import VerticalTabs from "../home/Home";
import ViewDialog from "./ViewPost";
import EditPost from "./EditPost";
import Pagination from "../../layout/Pagination";

// const Copyright = () => {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

const cards = [1, 2, 3, 4];

const theme = createTheme();

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cards.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: 2,
          pb: 2,
          borderBottom: 2,
          // borderTop: 2,
          borderRadius: 2,
          bgcolor: "#fcfcfc",
        }}
      >
        <Typography sx={{ fontSize: 22 }}>Property Listing</Typography>
      </Box>
      <ThemeProvider theme={theme}>
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={1}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={12} md={6}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "5%",
                      pb: "5%",
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                    height={200}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>This is a media card ...</Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">
                    <ViewDialog />
                  </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {/* <Pagination/> */}
          </Grid>
        </Container>
      </ThemeProvider>
    </Box>
  );
};
export default Home;
