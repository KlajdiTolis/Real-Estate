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
      startAfter(3)
      // limit(8)
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
    <Box sx={{ maxHeight: "80vh", overflowY: "scroll" }}>
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            py: 2,
            // bgcolor: "#F9F5F6"
          }}
          // maxWidth="xl"
        >
          <Stack
            direction="row"
            spacing={1}
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
                      // bgcolor: "#E3F4F4",
                      // border: 1,
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        sx={{
                          // 16:9
                          pt: "2%",
                          // pb: "5%",
                          borderRadius: 6,
                          paddingInline: 0.5,
                        }}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU"
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
                          {`${data?.desc.substring(0, 20)} ${
                            data?.desc.length > 29 ? "..." : ""
                          }`}
                        </Typography>
                        <Typography
                          sx={{
                            display: "flex",
                            justifyContent: "right",
                            fontSize: 16,
                            // fontWeight: "bold",
                            fontStyle: "italic",
                          }}
                        >
                          {data?.price} $
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{ display: "flex", justifyContent: "right" }}
                      >
                        <Grid container spacing={1}>
                          {user?.email == userEmail && (
                            <Grid item md={12}>
                              <Button
                                fullWidth
                                sx={{
                                  fontSize: 12,
                                  // bgcolor: "#f0c781",
                                  p: 0.7,
                                  borderColor: "#4d876a",
                                  color: "black",
                                }}
                                size="small"
                                // color="success"
                                variant="outlined"
                                onClick={() => {
                                  navigate(`/${data.id}`);
                                }}
                              >
                                Edit
                              </Button>
                            </Grid>
                          )}
                          <Grid item md={12}>
                            <ViewDialog data={data} />
                          </Grid>
                        </Grid>
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
