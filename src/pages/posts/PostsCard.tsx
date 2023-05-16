import React, { useEffect, useState } from "react";
import { AppBar, Button, Card, CardActions, CardMedia, CardContent, CssBaseline, Grid, Stack, Box, Toolbar, Typography, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase/Firebase";
import {
  collection,
  getDoc,
  query,
  addDoc,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { Link, Navigate, useNavigate } from "react-router-dom";

import VerticalTabs from "../home/Home";
import ViewDialog from "./ViewPost";
import EditPost from "./EditPost";
import Pagination from "../../layout/Pagination";

const theme = createTheme();

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const [porpertyData, setPorpertyData] = useState<any>([]);
  const [user, error, isloading] = useAuthState(auth);

  const navigate = useNavigate()

  const fetchData = async () => {
    const doc = await getDocs(collection(db, "home"));
    setPorpertyData(
      doc.docs.map((docc: any) => ({
        ...docc.data(),
        id: docc.id,
      }))
    );
  }

  useEffect(() => {
    fetchData()
  }, [])

  // console.log(porpertyData,"sdsadsadasd");

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = cards.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Container sx={{ py: 2 }} maxWidth="md">
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              pb: 2,
            }}
          >
            <Typography sx={{ fontSize: 22 }}>Property Listing</Typography>
          </Box>
          <Grid container spacing={1}>
            {porpertyData.map((data: any, index: any) => (
              <Grid item key={index} xs={12} sm={12} md={6}>
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
                      {data?.name}
                    </Typography>
                    <Typography>{data?.desc}</Typography>
                  </CardContent>
                  <CardActions sx={{ display: "flex", justifyContent: "right" }}>
                    <Button size="small" onClick={() => { navigate(`/${data.id}`) }}>
                      Edit
                    </Button>
                    <ViewDialog />
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
