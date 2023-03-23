import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useMediaQuery } from "react-responsive";

export default function TitlebarImageList() {
  const bigScreen = useMediaQuery({
    query: "(min-width: 1700px)",
  });

  return (
    <Box>
      <Grid container>
        <Grid item md={6.5} sx={{ display: "flex", justifyContent: "right" }}>
          <ImageList
            sx={{ height: bigScreen ? 500 : 400, width: bigScreen ? 800 : 600 }}
          >
            <ImageListItem key="Subheader" cols={2}>
              <ListSubheader component="div">
                Suggested Properties
              </ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid
          item
          md={5.5}
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            paddingInline: bigScreen ? 15 : 5,
          }}
        >
          <Grid container>
            <Grid item md={12}>
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                Browse our top real estate properties, featuring a stunning city
                apartment with modern design and private balcony. Contact us
                today to schedule a viewing and find your dream home.
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Button
                variant="contained"
                sx={{
                  fontSize: 16,
                  paddingBlock: 1,
                  borderRadius: 3,
                  boxShadow: 5,
                  bgcolor: "#5a6360",
                  color: "white",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  textShadow: "3px 2px #000000",
                  mt: 4,
                }}
              >
                Contact drejtorin
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
];
