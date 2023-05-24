import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CssBaseline,
  Grid,
  Stack,
  Box,
  Toolbar,
  Typography,
  Container,
  CardActionArea,
} from "@mui/material";
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
  orderBy,
  startAfter,
  limit,
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

  const navigate = useNavigate();

  // const fetchData = async () => {
  //   const data = query(collection(db, "home"), orderBy("price"), limit(4));
  //   const doc = await getDocs(data);
  //   setPorpertyData(doc.docs.map((docc: any) => docc.data()));
  // };

  const fetchData = async () => {
    const doc = await getDocs(collection(db, "home"));
    setPorpertyData(
      doc.docs.map((docc: any) => ({
        ...docc.data(),
        id: docc.id,
      }))
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(user);

  // console.log(porpertyData,"sdsadsadasd");

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = cards.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Container sx={{ py: 2 }} maxWidth="md">
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography sx={{ fontSize: 22 }}>Property Listing</Typography>
            {user?.email == "klajdi.tolis08@gmail.com" && (
              <Button
                size="small"
                onClick={() => {
                  navigate("property/create");
                }}
              >
                Create
              </Button>
            )}
          </Stack>
          <Grid container spacing={1}>
            {porpertyData &&
              porpertyData.map((data: any, index: any) => (
                <Grid item key={index} xs={12} sm={12} md={6}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        sx={{
                          // 16:9
                          pt: "5%",
                          pb: "5%",
                        }}
                        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                        alt="random"
                        height={200}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h3">
                          {data?.porperty_name}
                        </Typography>
                        <Typography>{data?.desc}</Typography>
                        <Typography
                          sx={{ display: "flex", justifyContent: "right" }}
                        >
                          Price: {data?.price}
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{ display: "flex", justifyContent: "right" }}
                      >
                        {user?.email == "klajdi.tolis08@gmail.com" && (
                          <Button
                            size="small"
                            onClick={() => {
                              navigate(`/${data.id}`);
                            }}
                          >
                            Edit
                          </Button>
                        )}
                        <ViewDialog />
                      </CardActions>
                    </CardActionArea>
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
