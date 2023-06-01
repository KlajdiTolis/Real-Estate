import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
  Stack,
  Box,
  Typography,
  Container,
  CardActionArea,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase/Firebase";
import {
  collection,
  query,
  getDocs,
  orderBy,
  limit,
  where,
  startAfter,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

import VerticalTabs from "../home/Home";
import ViewDialog from "./ViewPost";
import EditPost from "./EditPost";
import Pagination from "../../layout/Pagination";

const theme = createTheme();

const PostsCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const [porpertyData, setPorpertyData] = useState<any>([]);
  const [user, error, isloading] = useAuthState(auth);
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();

  const fetchAdminUsers = async () => {
    const dataB = collection(db, "user");
    const q = query(dataB, where("tag", "==", "admin"));
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.map((doc: any) => setUserEmail(doc.data().email));
  };

  const fetchData = async () => {
    const data = query(
      collection(db, "home"),
      orderBy("price"),
      startAfter(3),
      limit(8)
    );
    const doc = await getDocs(data);
    // console.log(lastVisible,"lastVisible");
    setPorpertyData(
      doc.docs.map((docc: any) => ({
        ...docc.data(),
        id: docc.id,
      }))
    );
  };

  useEffect(() => {
    fetchData();
    fetchAdminUsers();
  }, []);

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
            spacing={0}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography sx={{ fontSize: 22, pb: 1 }}>
              Property Listing
            </Typography>
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
                          pt: "2%",
                          // pb: "5%",
                        }}
                        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                        alt="random"
                        height={170}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          gutterBottom
                          sx={{ fontSize: 14, fontWeight: "bold" }}
                        >
                          {data?.porperty_name}
                        </Typography>
                        <Typography sx={{ fontSize: 12 }}>
                          {data?.desc}
                        </Typography>
                        <Typography
                          sx={{
                            display: "flex",
                            justifyContent: "right",
                            fontSize: 13,
                          }}
                        >
                          Price: {data?.price}
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{ display: "flex", justifyContent: "right" }}
                      >
                        {user?.email == userEmail && (
                          <Button
                            sx={{ fontSize: 12 }}
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
            {/* <Pagination /> */}
          </Grid>
        </Container>
      </ThemeProvider>
    </Box>
  );
};
export default PostsCard;
